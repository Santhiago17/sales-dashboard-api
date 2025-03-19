import { DataSource } from "typeorm";
import dotenv from "dotenv";
import { Sale } from "../models/Sale.js";

dotenv.config();

export const AppDataSource = new DataSource({
  type: "postgres",
  host: process.env.DB_HOST,
  port: Number(process.env.DB_PORT),
  username: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  synchronize: true, // Em produção, utilize migrations!
  entities: [Sale],
});
