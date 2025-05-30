import { NextApiRequest, NextApiResponse } from "next";
import { db } from "../../lib/db";
import { contacts } from "../../lib/db/schema";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    const { name, email } = req.body;

    // Validate the input
    if (!name || !email) {
      return res.status(400).json({ error: "Name and email are required" });
    }

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({ error: "Invalid email format" });
    }

    // Insert the contact into the database
    const result = await db
      .insert(contacts)
      .values({
        name: name.trim(),
        email: email.trim().toLowerCase(),
      })
      .returning();

    // Return success response
    res.status(200).json({
      success: true,
      message: "Contact saved successfully",
      id: result[0].id,
    });
  } catch (error) {
    console.error("Database error:", error);
    res.status(500).json({ error: "Internal server error" });
  }
}
