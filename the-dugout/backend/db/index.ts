//Sets up connection pool to database
import { Pool } from 'pg';

import dotenv from 'dotenv';
dotenv.config();

//Create a connection pool
const pool: Pool = new Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  password: process.env.DB_PASS,
  port: Number(process.env.DB_PORT),
});

export default pool;