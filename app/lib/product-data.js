"use server";

import productSchema from "../models/product";
import connectProductDB from "./productdb";

export async function fetchProducts({
  name,
  category,
  stock,
  code,
  page,
  limit,
  sort,
}) {
  try {
    const db = await connectProductDB();
    const Product = db.models.Product || db.model("Product", productSchema);

    const query = {};
    if (name) {
      query.name = { $regex: name, $options: "i" };
    }
    if (category) {
      query.category = category;
    }
    if (stock) {
      if (stock === "in-stock") {
        query.currentStock = { $gt: 0 };
      } else if (stock === "out-of-stock") {
        query.currentStock = { $lte: 0 };
      }
    }
    if (code) {
      query.code = code;
    }

    const pageNumber = parseInt(page, 10) || 1;
    const pageSize = parseInt(limit, 10) || 15;
    const skip = (pageNumber - 1) * pageSize;

    const products = await Product.find(query)
      .sort({ code: sort === "asc" ? 1 : -1 })
      .skip(skip)
      .limit(pageSize)
      .lean();

    const totalProducts = await Product.countDocuments(query);

    if (!products || products.length === 0) {
      return { products: [], totalPages: 0 };
    }

    const productsWithStringId = products.map((product) => ({
      ...product,
      _id: product._id.toString(),
    }));

    return {
      products: productsWithStringId,
      totalPages: Math.ceil(totalProducts / pageSize),
    };
  } catch (error) {
    console.error("Failed to fetch products:", error);
    throw new Error("Failed to fetch products!");
  }
}
