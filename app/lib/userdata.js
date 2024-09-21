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

export async function fetchCustomers({ phone, page, limit, sort }) {
  try {
    const db = await connectUserDB();
    const Customer = db.models.Customer || db.model("Customer", customerSchema);

    const query = {};
    if (phone) {
      query.phone = phone;
    }

    const pageNumber = parseInt(page, 10) || 1;
    const pageSize = parseInt(limit, 10) || 15;
    const skip = (pageNumber - 1) * pageSize;

    const customers = await Customer.find(query)
      .sort({ code: sort === "asc" ? 1 : -1 })
      .skip(skip)
      .limit(pageSize)
      .lean();

    const totalCustomer = await Customer.countDocuments(query);

    if (!customers || customers.length === 0) {
      return { customers: [], totalPages: 0 };
    }

    const customersWithStringId = customers.map((customer) => ({
      ...customer,
      _id: customer._id.toString(),
    }));

    return {
      customers: customersWithStringId,
      totalPages: Math.ceil(totalCustomer / pageSize),
    };
  } catch (error) {
    console.error("Failed to fetch customers:", error);
    throw new Error("Failed to fetch customers!");
  }
}
