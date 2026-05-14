import { drizzle } from "drizzle-orm/postgres-js";
import postgres from "postgres";
import * as schema from "./schema";


// tạo một client postgres với connection string lấy từ biến môi trường DATABASE_URL
// cấu hình ssl và timeout để đảm bảo kết nối ổn định với database
const client = postgres(process.env.DATABASE_URL, {
  ssl: "require",
  connect_timeout: 30,
  idle_timeout: 20,
  max: 1,
});

export const db = drizzle(client, { schema });