"use server";
import customerSchema from "../models/customer";
import connectUserDB from "./userdb";

export async function fetchCustomerData(_id) {
  const db = await connectUserDB();
  const Customer = db.models.Customer || db.model("Customer", customerSchema);

  // Check if the user already exists
  const existingUser = await Customer.findById(_id);

  if (!existingUser) {
    throw new Error("User not found!");
  }

  existingUser._id = existingUser._id.toString();

  return existingUser;
}
