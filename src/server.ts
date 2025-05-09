import "reflect-metadata";
import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { AppDataSource } from "./infra/database/AppDataSource";
import swaggerUI from "swagger-ui-express";
import { openApiDocument } from "./api/config/swagger";
import campoRouter from "./api/routes/campoRoutes";
import preenchimentoRouter from "./api/routes/preenchimentoRoutes";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.use("/api/campos", campoRouter);
app.use("/api/preenchimentos", preenchimentoRouter);
app.use(
  "/api-docs",
  swaggerUI.serve,
  swaggerUI.setup(openApiDocument, {
    explorer: true,
    customCss: ".swagger-ui .topbar { display: none }",
    swaggerOptions: {
      docExpansion: "list",
      filter: true,
      showRequestDuration: true,
    },
  })
);

AppDataSource.initialize()
  .then(() => {
    console.log("Database connection established successfully.");
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
      console.log(
        `API Documentation available at http://localhost:${PORT}/api-docs`
      );
    });
  })
  .catch((error) => {
    console.error("Error during Data Source initialization:", error);
  });
