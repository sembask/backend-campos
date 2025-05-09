import { Campo } from "../domain/entities/Campo";
import { ICampoRepository } from "./ICampoRepository";
import { AppDataSource } from "../infra/database/AppDataSource";
import { Repository } from "typeorm";

export class CampoRepository implements ICampoRepository {
  private get repository(): Repository<Campo> {
    return AppDataSource.getRepository(Campo);
  }

  async findAll(): Promise<Campo[]> {
    return this.repository.find();
  }

  async findById(id: string): Promise<Campo | null> {
    return this.repository.findOneBy({ id });
  }

  async findByName(name: string): Promise<Campo | null> {
    return this.repository.findOneBy({ name });
  }

  async create(campo: Campo): Promise<Campo> {
    return this.repository.save(campo);
  }
}
