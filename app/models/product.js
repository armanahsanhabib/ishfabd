import mongoose from "mongoose";

// Define the Student schema
const productSchema = new mongoose.Schema({
  code: {
    type: Number,
    required: true,
    unique: true,
  },
  name: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  cost: {
    type: Number,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  discountPrice: {
    type: Number,
  },
  currentStock: {
    type: Number,
  },
  tags: {
    type: String,
  },
  images: {
    type: [String],
    required: true,
  },
});

export default productSchema;
