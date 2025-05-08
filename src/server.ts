import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { AppDataSource } from "./database/AppDataSource";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

//Middlewares
app.use(cors());
app.use(express.json());

///Database
AppDataSource.initialize()
  .then(() => {
    console.log("Database connection established successfully.");
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch((error) => {
    console.error("Error during Data Source initialization:", error);
  });

// Routes

//Server running
