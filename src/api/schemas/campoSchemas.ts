import { z } from "zod";
import { DataType } from "../../domain/entities/Campo";
import { extendZodWithOpenApi, generateSchema } from "@anatine/zod-openapi";

extendZodWithOpenApi(z);

export const createCampoSchema = z
  .object({
    name: z
      .string()
      .min(2, "O nome precisa ter pelo menos 2 caracteres")
      .max(100, "O nome não pode ter mais que 100 caracteres")
      .openapi({
        description: "Nome do campo",
        example: "Idade",
      }),
    datatype: z.nativeEnum(DataType).openapi({
      description: "Tipo de dado do campo",
      example: DataType.NUMBER,
    }),
  })
  .openapi({
    title: "CreateCampoDto",
    description: "Schema para criar uma entidade Campo",
  });

export const getAllCampoSchema = z
  .object({
    id: z.string().uuid().openapi({
      description: "ID do campo",
    }),
    name: z.string().openapi({
      description: "Nome do campo",
      example: "Idade",
    }),
    datatype: z.nativeEnum(DataType).openapi({
      description: "Tipo de dado do campo",
      example: DataType.NUMBER,
    }),
    createdAt: z.date().openapi({
      description: "Data de criação do campo",
    }),
  })
  .openapi({
    title: "GetAllCampoDto",
    description: "Schema para obter todos os campos",
  });

export const campoGetAllOpenApiSchema = generateSchema(getAllCampoSchema);
export const campoCreateOpenApiSchema = generateSchema(createCampoSchema);

export type CreateCampoDto = z.infer<typeof createCampoSchema>;
