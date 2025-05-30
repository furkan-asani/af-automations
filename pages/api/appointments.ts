import { NextApiRequest, NextApiResponse } from "next";
import { db } from "../../lib/db";
import { appointments } from "../../lib/db/schema";
import { eq, and } from "drizzle-orm";

// Available days: Tuesday (2), Thursday (4), Friday (5)
const AVAILABLE_DAYS = [2, 4, 5];
const BLOCKED_TIME = { start: "14:00", end: "14:30" };

// Generate time slots from 9:00 to 17:00 (30-minute intervals)
const generateTimeSlots = () => {
  const slots = [];
  for (let hour = 9; hour < 17; hour++) {
    for (let minute = 0; minute < 60; minute += 30) {
      const timeString = `${hour.toString().padStart(2, "0")}:${minute
        .toString()
        .padStart(2, "0")}`;

      // Skip blocked time (14:00-14:30)
      if (timeString >= BLOCKED_TIME.start && timeString < BLOCKED_TIME.end) {
        continue;
      }

      slots.push(timeString);
    }
  }
  return slots;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "GET") {
    // Get available slots for a specific date
    const { date } = req.query;

    if (!date || typeof date !== "string") {
      return res.status(400).json({ error: "Date is required" });
    }

    try {
      const requestDate = new Date(date);
      const dayOfWeek = requestDate.getDay();

      // Check if the day is available
      if (!AVAILABLE_DAYS.includes(dayOfWeek)) {
        return res.status(200).json({ slots: [] });
      }

      // Get all booked appointments for this date
      const bookedAppointments = await db
        .select()
        .from(appointments)
        .where(eq(appointments.date, date));

      // Normalize time format (remove seconds if present)
      const bookedTimes = bookedAppointments.map((apt) => {
        const time = apt.time;
        // If time includes seconds (HH:MM:SS), remove them
        return time.length > 5 ? time.substring(0, 5) : time;
      });

      const allSlots = generateTimeSlots();

      // Return all slots with their booking status
      const slotsWithStatus = allSlots.map((slot) => ({
        time: slot,
        isBooked: bookedTimes.includes(slot),
      }));

      res.status(200).json({ slots: slotsWithStatus });
    } catch (error) {
      console.error("Error fetching available slots:", error);
      res.status(500).json({ error: "Internal server error" });
    }
  } else if (req.method === "POST") {
    // Book an appointment
    const { name, email, date, time, message } = req.body;

    // Validate input
    if (!name || !email || !date || !time) {
      return res
        .status(400)
        .json({ error: "Name, email, date, and time are required" });
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({ error: "Invalid email format" });
    }

    try {
      const requestDate = new Date(date);
      const dayOfWeek = requestDate.getDay();

      // Check if the day is available
      if (!AVAILABLE_DAYS.includes(dayOfWeek)) {
        return res
          .status(400)
          .json({ error: "This day is not available for appointments" });
      }

      // Check if time slot is available
      const existingAppointment = await db
        .select()
        .from(appointments)
        .where(and(eq(appointments.date, date), eq(appointments.time, time)));

      if (existingAppointment.length > 0) {
        return res
          .status(400)
          .json({ error: "This time slot is already booked" });
      }

      // Create the appointment
      const result = await db
        .insert(appointments)
        .values({
          name: name.trim(),
          email: email.trim().toLowerCase(),
          date,
          time,
          message: message?.trim() || null,
        })
        .returning();

      res.status(200).json({
        success: true,
        message: "Appointment booked successfully",
        appointment: result[0],
      });
    } catch (error) {
      console.error("Error booking appointment:", error);
      res.status(500).json({ error: "Internal server error" });
    }
  } else {
    res.status(405).json({ error: "Method not allowed" });
  }
}
