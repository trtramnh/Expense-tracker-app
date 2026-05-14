import dotenv from 'dotenv';

dotenv.config({ path: '.env.local' });

/** @type {import('drizzle-kit').Config} */
export default {
  schema: "./utils/schema.jsx",
  out: "./drizzle",
  dialect: "postgresql",
  dbCredentials: {
    url: process.env.DATABASE_URL,
  },
};