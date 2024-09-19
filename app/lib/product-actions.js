"use server";

import {
  DeleteObjectCommand,
  PutObjectCommand,
  S3Client,
} from "@aws-sdk/client-s3";
import { ObjectId } from "mongodb";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import productSchema from "../models/product";
import connectProductDB from "./productdb";

// Initialize S3 client
const s3 = new S3Client({
  region: "eu-north-1",
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  },
});

const bucketName = "ishfabd";

// Helper function to upload image to S3
async function uploadToS3(newFilename, buffer, fileType, folder) {
  const uploadParams = {
    Bucket: bucketName,
    Key: `${folder}/${newFilename}`,
    Body: buffer,
    ContentType: fileType,
  };
  const command = new PutObjectCommand(uploadParams);
  await s3.send(command);

  return `https://${bucketName}.s3.amazonaws.com/${folder}/${newFilename}`;
}

// Helper function to delete image from S3
async function deleteFromS3(key) {
  const deleteParams = {
    Bucket: bucketName,
    Key: key,
  };
  const command = new DeleteObjectCommand(deleteParams);
  await s3.send(command);
}

// Function to add product to MongoDB and upload images to S3
export async function addProduct(formData) {
  const productData = {
    code: +formData.get("code"),
    name: formData.get("name"),
    category: formData.get("category"),
    cost: +formData.get("cost"),
    price: +formData.get("price"),
    discountPrice: +formData.get("discountPrice"),
    currentStock: +formData.get("currentStock"),
    tags: formData.get("tags"),
    description: formData.get("description"),
    images: [], // Placeholder for image URLs
  };

  // Extract images from formData
  const files = formData.getAll("images"); // 'images' should be the input field's name

  try {
    const db = await connectProductDB();

    // Check if the model already exists to prevent redefinition
    const Product = db.models.Product || db.model("Product", productSchema);

    // Upload images to S3 and save their URLs
    const imageUploadPromises = files.map(async (file) => {
      const buffer = await file.arrayBuffer();
      const sanitizedProductName = productData.name
        .replace(/[^a-zA-Z0-9 ]/g, "")
        .replace(/ /g, "-");
      const newFilename = `${sanitizedProductName}-${new ObjectId()}.${file.name.split(".").pop()}`; // Use a unique name for each file
      const fileType = file.type;
      return await uploadToS3(newFilename, buffer, fileType, "products"); // Upload to 'products' folder
    });

    // Wait for all uploads to finish
    const imageUrls = await Promise.all(imageUploadPromises);

    // Add the image URLs to productData
    productData.images = imageUrls;

    // Insert product data into MongoDB
    await Product.create(productData);
  } catch (error) {
    console.error("Failed to add product: ", error);
    throw new Error("Failed to add product!");
  }

  // After successful insertion, revalidate the path and redirect
  revalidatePath("/admin/dashboard/products?sort=desc");
  redirect("/admin/dashboard/products?sort=desc");
}
