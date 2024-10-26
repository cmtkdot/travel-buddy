import { sql } from "drizzle-orm";
import { 
  text,
  timestamp,
  pgTable,
  uuid as pgUuid,
  boolean as pgBoolean,
  jsonb as pgJsonb
} from "drizzle-orm/pg-core";

// Users table
export const users = pgTable("users", {
  id: text("id").primaryKey(),
  email: text("email"),
  createdAt: timestamp("created_at").defaultNow(),
  updatedAt: timestamp("updated_at").defaultNow(),
});

// Trips table
export const trips = pgTable("trips", {
  id: pgUuid("id").primaryKey().defaultRandom(),
  userId: pgUuid("user_id").references(() => users.id).notNull(),
  title: text("title").notNull(),
  description: text("description"),
  startDate: timestamp("start_date"),
  endDate: timestamp("end_date"),
  location: text("location"),
  isPublic: pgBoolean("is_public").default(false),
  createdAt: timestamp("created_at").default(sql`now()`),
  updatedAt: timestamp("updated_at").default(sql`now()`),
  metadata: pgJsonb("metadata").default({})
});

// Chat messages table
export const chatMessages = pgTable("chat_messages", {
  id: pgUuid("id").primaryKey().defaultRandom(),
  userId: pgUuid("user_id").references(() => users.id).notNull(),
  tripId: pgUuid("trip_id").references(() => trips.id).notNull(),
  content: text("content").notNull(),
  createdAt: timestamp("created_at").default(sql`now()`),
});
