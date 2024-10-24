"use server";

import { auth } from "@clerk/nextjs";
import { db } from "./db";
import { users, trips } from "./db/schema";
import { eq } from "drizzle-orm";

export async function createUserRecord() {
  const { userId } = auth();
  if (!userId) throw new Error("Unauthorized");

  const user = await auth().user;
  if (!user) throw new Error("User not found");

  // Create user record in Neon database
  const [newUser] = await db.insert(users).values({
    clerkId: userId,
    email: user.emailAddresses[0].emailAddress,
  }).returning();

  return newUser;
}

export async function getCurrentUser() {
  const { userId } = auth();
  if (!userId) throw new Error("Unauthorized");

  const [user] = await db.select()
    .from(users)
    .where(eq(users.clerkId, userId));

  return user;
}

export async function createTrip(title: string, description?: string) {
  const { userId } = auth();
  if (!userId) throw new Error("Unauthorized");

  const [trip] = await db.insert(trips).values({
    userId,
    title,
    description,
  }).returning();

  return trip;
}

export async function getUserTrips() {
  const { userId } = auth();
  if (!userId) throw new Error("Unauthorized");

  const userTrips = await db.select()
    .from(trips)
    .where(eq(trips.userId, userId));

  return userTrips;
}
