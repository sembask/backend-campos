import { CampoRepository } from "../repositories/CampoRepository";
import { PreenchimentoRepository } from "../repositories/PreenchimentoRepository";
import { CampoService } from "../services/CampoService";
import { PreenchimentoService } from "../services/PreenchimentoService";
import { CampoController } from "../api/controllers/CampoController";
import { PreenchimentoController } from "../api/controllers/PreenchimentoController";

const campoRepository = new CampoRepository();
const preenchimentoRepository = new PreenchimentoRepository();

const campoService = new CampoService(campoRepository);
const preenchimentoService = new PreenchimentoService(
  preenchimentoRepository,
  campoRepository
);

export const campoController = new CampoController(campoService);
export const preenchimentoController = new PreenchimentoController(
  preenchimentoService
);
