import mongoose from "mongoose";

// Define the Customer schema
const customerSchema = new mongoose.Schema(
  {
    provider: {
      type: String, // Indicate if signed up with "google", "facebook", or "credentials"
      required: true,
    },
    name: {
      type: String,
      required: true, // Will be provided by OAuth or the customer
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String, // Only required for credential sign-up
    },
    image: {
      type: String,
      default: "", // Optional, can be added later
    },
    phone: {
      type: String,
    },
    address: {
      type: String, // Optional, can be added later by the customer
    },
    cart: {
      type: Array,
      default: [],
    },
    orders: {
      type: Array,
      default: [],
    },
    resetPasswordToken: {
      type: String,
      default: "",
    },
    resetPasswordExpires: {
      type: Date,
      default: Date.now,
    },
  },
  { timestamps: true },
);

export default customerSchema;
