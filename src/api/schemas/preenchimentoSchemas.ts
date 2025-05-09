import { z } from "zod";
import { extendZodWithOpenApi, generateSchema } from "@anatine/zod-openapi";

extendZodWithOpenApi(z);

export const createPreenchimentoSchema = z
  .object({
    value: z
      .union([
        z.string().min(1, "O valor não pode ser vazio"),
        z.number(),
        z.boolean(),
        z.string().datetime(),
      ])
      .openapi({
        description: "Valor do preenchimento (string, número, boolean ou data)",
        example: "25",
      }),
    fieldId: z.string().uuid("ID de campo inválido").openapi({
      description: "ID do campo associado",
    }),
  })
  .openapi({
    title: "CreatePreenchimentoDto",
    description: "Schema para criar uma entidade Preenchimento",
  });

export const getAllPreenchimentoSchema = z.object({
  id: z.string().uuid().openapi({
    description: "ID do preenchimento",
  }),
  value: z
    .union([z.string(), z.number(), z.boolean(), z.string().datetime()])
    .openapi({
      description: "Valor do preenchimento (string, número, boolean ou data)",
      example: "25",
    }),
  createdAt: z.date().openapi({
    description: "Data de criação do preenchimento",
  }),
  campoNome: z.string().openapi({
    description: "Nome do campo associado",
  }),
});

export const preenchimentoCreateOpenApiSchema = generateSchema(
  createPreenchimentoSchema
);
export const preenchimentoGetAllOpenApiSchema = generateSchema(
  getAllPreenchimentoSchema
);

export type CreatePreenchimentoDto = z.infer<typeof createPreenchimentoSchema>;
