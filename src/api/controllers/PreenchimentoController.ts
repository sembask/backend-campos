import { Request, Response } from "express";
import { PreenchimentoService } from "../../services/PreenchimentoService";

export class PreenchimentoController {
  constructor(private preenchimentoService: PreenchimentoService) {}

  async create(req: Request, res: Response): Promise<Response> {
    try {
      const preenchimento = await this.preenchimentoService.create(req.body);
      return res.status(201).json(preenchimento);
    } catch (error: any) {
      if (error.message) {
        return res.status(400).json({ message: error.message });
      }
      console.error("Erro ao criar preenchimento:", error);
      return res.status(500).json({ message: "Erro interno do servidor" });
    }
  }

  async findAll(req: Request, res: Response): Promise<Response> {
    try {
      const preenchimentos = await this.preenchimentoService.findAll();
      return res.json(preenchimentos);
    } catch (error) {
      console.error("Erro ao listar preenchimentos com campo:", error);
      return res.status(500).json({ message: "Erro interno do servidor" });
    }
  }
}
