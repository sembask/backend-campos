import { Router } from "express";
import { campoController } from "../../infra/container";
import { validateSchema } from "../middlewares/validateSchema";
import { createCampoSchema } from "../schemas/campoSchemas";

const campoRouter = Router();

campoRouter.post("/", validateSchema(createCampoSchema), async (req, res) => {
  await campoController.create(req, res);
});

campoRouter.get("/", async (req, res) => {
  await campoController.findAll(req, res);
});

export default campoRouter;
