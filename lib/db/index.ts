import { drizzle } from 'drizzle-orm/postgres-js';
import postgres from 'postgres';
import * as schema from './schema';

// Database connection string from environment variable
const connectionString = process.env.DATABASE_URL;

// Throw error if DATABASE_URL is not defined
if (!connectionString) {
  throw new Error('DATABASE_URL is not defined');
}

// Create postgres connection
const client = postgres(connectionString);

// Create drizzle database instance
export const db = drizzle(client, { schema });

// Export schema for use in other files
export { schema };
