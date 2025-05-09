import { Request, Response, NextFunction } from "express";
import { AnyZodObject, ZodError } from "zod";

export const validateSchema = (schema: AnyZodObject) => {
  return async (req: Request, res: Response, next: NextFunction) => {
    try {
      await schema.parseAsync(req.body);
      next();
    } catch (error) {
      if (error instanceof ZodError) {
        res.status(400).json({
          status: "error",
          message: "Dados inválidos",
          errors: error.format(),
        });
      }
      res.status(500).json({
        status: "error",
        message: "Erro interno do servidor",
      });
    }
  };
};
