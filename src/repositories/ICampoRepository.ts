import { Campo } from "../domain/entities/Campo";

export interface ICampoRepository {
  findAll(): Promise<Campo[]>;
  findById(id: string): Promise<Campo | null>;
  findByName(name: string): Promise<Campo | null>;
  create(campo: Campo): Promise<Campo>;
}
