import { Preenchimento } from "../domain/entities/Preenchimento";

export interface IPreenchimentoRepository {
  findAll(): Promise<Preenchimento[]>;
  findAllWithCampoNome(): Promise<Array<Preenchimento & { campoNome: string }>>;
  findById(id: string): Promise<Preenchimento | null>;
  create(preenchimento: Preenchimento): Promise<Preenchimento>;
}
