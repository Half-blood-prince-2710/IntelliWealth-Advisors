import "dotenv/config";
import { defineConfig } from "drizzle-kit";

export default defineConfig({
  out: "./drizzle",
  schema: "./db/schema.ts",
  dialect: "postgresql",
  dbCredentials: {
    url: "postgresql://neondb_owner:B8Uf3bujYKxh@ep-blue-leaf-a19arcaz.ap-southeast-1.aws.neon.tech/intelliwealth-advisors?sslmode=require",
  },
});
