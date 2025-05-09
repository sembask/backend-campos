import { Request, Response } from "express";
import { CampoService } from "../../services/CampoService";

export class CampoController {
  constructor(private campoService: CampoService) {}

  async findAll(req: Request, res: Response): Promise<Response> {
    try {
      const campos = await this.campoService.findAll();
      return res.status(200).json(campos);
    } catch (error: any) {
      return res.status(500).json({ message: error.message });
    }
  }

  async create(req: Request, res: Response): Promise<Response> {
    try {
      const campo = await this.campoService.create(req.body);
      return res.status(201).json(campo);
    } catch (error: any) {
      return res.status(500).json({ message: error.message });
    }
  }
}
