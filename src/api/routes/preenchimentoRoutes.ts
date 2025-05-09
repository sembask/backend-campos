import { Router } from "express";
import { preenchimentoController } from "../../infra/container";
import { validateSchema } from "../middlewares/validateSchema";
import { createPreenchimentoSchema } from "../schemas/preenchimentoSchemas";

const preenchimentoRouter = Router();

preenchimentoRouter.post(
  "/",
  validateSchema(createPreenchimentoSchema),
  async (req, res) => {
    await preenchimentoController.create(req, res);
  }
);

preenchimentoRouter.get("/", async (req, res) => {
  await preenchimentoController.findAll(req, res);
});

export default preenchimentoRouter;
