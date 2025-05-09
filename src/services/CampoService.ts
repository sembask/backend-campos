import { CreateCampoDto } from "../api/schemas/campoSchemas";
import { Campo } from "../domain/entities/Campo";
import { ICampoRepository } from "../repositories/ICampoRepository";

export class CampoService {
  constructor(private campoRepository: ICampoRepository) {}

  async findAll(): Promise<Campo[]> {
    return this.campoRepository.findAll();
  }

  async create(data: CreateCampoDto): Promise<Campo> {
    const existente = await this.campoRepository.findByName(data.name);
    if (existente) {
      throw new Error("Já existe um campo com esse nome");
    }

    const campo = new Campo();
    Object.assign(campo, data);

    return this.campoRepository.create(campo);
  }
}
