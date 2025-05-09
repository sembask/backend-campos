import { Repository } from "typeorm";
import { Preenchimento } from "../domain/entities/Preenchimento";
import { IPreenchimentoRepository } from "../repositories/IPreenchimentoRepository";
import { AppDataSource } from "../infra/database/AppDataSource";

type PreenchimentoWithCampoNome = Preenchimento & { campoNome: string };

export class PreenchimentoRepository implements IPreenchimentoRepository {
  private get repository(): Repository<Preenchimento> {
    return AppDataSource.getRepository(Preenchimento);
  }

  async findAll(): Promise<Preenchimento[]> {
    return this.repository.find();
  }

  async findAllWithCampoNome(): Promise<PreenchimentoWithCampoNome[]> {
    const rows = await this.repository
      .createQueryBuilder("p")
      .leftJoin("p.campo", "c")
      .select(["p.id", "p.value", "p.fieldId", "p.createdAt", "c.name"])
      .getRawMany();

    return rows.map(
      (row) =>
        ({
          id: row.p_id,
          value: row.p_value,
          fieldId: row.p_fieldId,
          createdAt: row.p_created_at,
          campoNome: row.c_name,
        } as PreenchimentoWithCampoNome)
    );
  }

  async findById(id: string): Promise<Preenchimento | null> {
    return this.repository.findOneBy({ id });
  }

  async create(preenchimento: Preenchimento): Promise<Preenchimento> {
    return this.repository.save(preenchimento);
  }
}
