import { Preenchimento } from "../domain/entities/Preenchimento";
import { IPreenchimentoRepository } from "../repositories/IPreenchimentoRepository";
import { ICampoRepository } from "../repositories/ICampoRepository";
import { DataType } from "../domain/entities/Campo";
import { CreatePreenchimentoDto } from "../api/schemas/preenchimentoSchemas";

export class PreenchimentoService {
  constructor(
    private preenchimentoRepository: IPreenchimentoRepository,
    private campoRepository: ICampoRepository
  ) {}

  async findAll(): Promise<Array<Preenchimento & { campoNome: string }>> {
    return this.preenchimentoRepository.findAllWithCampoNome();
  }

  async create(data: CreatePreenchimentoDto): Promise<Preenchimento> {
    const campo = await this.campoRepository.findById(data.fieldId);
    if (!campo) {
      throw new Error(`Campo com ID ${data.fieldId} não existe`);
    }

    this.validateDataType(campo.datatype, data.value);

    const preenchimento = new Preenchimento();
    preenchimento.value = data.value;
    preenchimento.fieldId = campo.id;

    return this.preenchimentoRepository.create(preenchimento);
  }

  private validateDataType(datatype: string, value: any): void {
    try {
      switch (datatype) {
        case DataType.NUMBER:
          const num = Number(value);
          if (isNaN(num)) throw new Error();
          break;
        case DataType.DATE:
          const date = new Date(value);
          if (isNaN(date.getTime())) throw new Error();
          break;
        case DataType.BOOLEAN:
          if (value !== "true" && value !== "false") throw new Error();
          break;
      }
    } catch (error) {
      throw new Error(
        `O valor '${value}' não é compatível com o tipo ${datatype}`
      );
    }
  }
}
