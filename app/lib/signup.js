"use server";
import { hash } from "bcryptjs";
import customerSchema from "../models/customer";
import connectUserDB from "./userdb";

export async function createUser({ name, email, password }) {
  const db = await connectUserDB();
  const Customer = db.models.Customer || db.model("Customer", customerSchema);

  // Check if the user already exists
  const existingUser = await Customer.findOne({ email });
  if (existingUser) {
    throw new Error("User already exists");
  }

  // Hash the password
  const hashedPassword = await hash(password, 10);

  // Create the user in the database
  const newUser = new Customer({
    name,
    email,
    password: hashedPassword,
    provider: "credentials",
  });

  await newUser.save();

  return { success: true };
}
