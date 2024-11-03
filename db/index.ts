import { drizzle } from "drizzle-orm/neon-http";

const databaseUrl =
  process.env.NEXT_PUBLIC_DATABASE_URL;
if (!databaseUrl) {
  throw new Error(
    "NEXT_PUBLIC_DATABASE_URL environment variable is not set"
  );
}

const db = drizzle(databaseUrl);
