import { drizzle } from "drizzle-orm/vercel-postgres";
import { sql } from "@vercel/postgres";
import { pgTable, serial, varchar } from "drizzle-orm/pg-core";

// Use this object to send drizzle queries to your DB
export const db = drizzle(sql);
// Create a pgTable that maps to a table in your DB
export const userTable = pgTable("users", {
  _id: serial("_id").primaryKey(),
  username: varchar("username").notNull(),
  email: varchar("email").notNull(),
});
