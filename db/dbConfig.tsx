import { neon } from "@neondatabase/serverless";
import { drizzle } from "drizzle-orm/neon-http";
import * as schema from "./schema";
const sql = neon(
  "postgresql://neondb_owner:B8Uf3bujYKxh@ep-blue-leaf-a19arcaz.ap-southeast-1.aws.neon.tech/intelliwealth-advisors?sslmode=require"
);
export const db = drizzle(sql, {
  schema,
});
