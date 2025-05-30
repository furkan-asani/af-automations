import {
  pgTable,
  serial,
  text,
  timestamp,
  date,
  time,
} from "drizzle-orm/pg-core";

export const contacts = pgTable("contacts", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  email: text("email").notNull(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});

export const appointments = pgTable("appointments", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  email: text("email").notNull(),
  date: date("date").notNull(),
  time: time("time").notNull(),
  message: text("message"),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});

export type Contact = typeof contacts.$inferSelect;
export type NewContact = typeof contacts.$inferInsert;
export type Appointment = typeof appointments.$inferSelect;
export type NewAppointment = typeof appointments.$inferInsert;
