import { drizzle } from "drizzle-orm/mysql2";
import mysql from "mysql2/promise";
import bcrypt from "bcryptjs";
import dotenv from "dotenv";

dotenv.config();

const DATABASE_URL = process.env.DATABASE_URL;
if (!DATABASE_URL) {
  console.error("DATABASE_URL 환경변수가 없습니다.");
  process.exit(1);
}

const connection = await mysql.createConnection(DATABASE_URL);
const db = drizzle(connection);

const username = "admin";
const password = "admin1234";
const passwordHash = await bcrypt.hash(password, 12);

try {
  await connection.execute(
    `INSERT INTO admin_accounts (username, passwordHash) VALUES (?, ?)
     ON DUPLICATE KEY UPDATE passwordHash = VALUES(passwordHash)`,
    [username, passwordHash]
  );
  console.log(`✅ 관리자 계정 생성 완료: ${username}`);
} catch (err) {
  console.error("계정 생성 실패:", err);
} finally {
  await connection.end();
}
