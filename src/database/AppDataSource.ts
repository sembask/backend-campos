import { DataSource } from "typeorm";
import dotenv from "dotenv";

dotenv.config();

export const AppDataSource = new DataSource({
  type: "postgres",
  host: process.env.HOST,
  port: parseInt(process.env.DBPORT || "5432", 10),
  username: process.env.USER,
  password: process.env.PASSWORD,
  database: process.env.DATABASE,
  synchronize: false,
  logging: false,
  entities: ["src/entities/*.ts"],
  subscribers: ["src/subscribers/*.ts"],
  migrations: ["src/migrations/*.ts"],
});
