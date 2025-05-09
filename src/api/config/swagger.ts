import { OpenAPIObject } from "openapi3-ts/oas31";
import {
  campoCreateOpenApiSchema,
  campoGetAllOpenApiSchema,
} from "../schemas/campoSchemas";
import {
  preenchimentoCreateOpenApiSchema,
  preenchimentoGetAllOpenApiSchema,
} from "../schemas/preenchimentoSchemas";

export const openApiDocument: OpenAPIObject = {
  openapi: "3.1.0",
  info: {
    title: "API de Campos e Preenchimentos",
    version: "1.0.0",
    description: "API para gerenciamento de campos e preenchimentos",
    contact: {
      name: "Equipe de Desenvolvimento",
      email: "dev@example.com",
    },
  },
  tags: [
    {
      name: "Campos",
      description: "Operações relacionadas a campos",
    },
    {
      name: "Preenchimentos",
      description: "Operações relacionadas a preenchimentos",
    },
  ],
  paths: {
    "/api/campos": {
      post: {
        tags: ["Campos"],
        summary: "Cria um novo campo",
        requestBody: {
          required: true,
          content: {
            "application/json": {
              schema: {
                $ref: "#/components/schemas/CreateCampo",
              },
            },
          },
        },
        responses: {
          "201": {
            description: "Campo criado com sucesso",
            content: {
              "application/json": {
                schema: {
                  $ref: "#/components/schemas/GetAllCampo",
                },
              },
            },
          },
          "400": {
            description: "Dados inválidos",
          },
          "500": {
            description: "Erro interno do servidor",
          },
        },
      },
      get: {
        tags: ["Campos"],
        summary: "Lista todos os campos",
        responses: {
          "200": {
            description: "Lista de campos",
            content: {
              "application/json": {
                schema: {
                  type: "array",
                  items: {
                    $ref: "#/components/schemas/GetAllCampo",
                  },
                },
              },
            },
          },
          "500": {
            description: "Erro interno do servidor",
          },
        },
      },
    },
    "/api/preenchimentos": {
      post: {
        tags: ["Preenchimentos"],
        summary: "Cria um novo preenchimento",
        requestBody: {
          required: true,
          content: {
            "application/json": {
              schema: {
                $ref: "#/components/schemas/CreatePreenchimento",
              },
            },
          },
        },
        responses: {
          "201": {
            description: "Preenchimento criado com sucesso",
            content: {
              "application/json": {
                schema: {
                  $ref: "#/components/schemas/GetAllPreenchimento",
                },
              },
            },
          },
          "400": {
            description: "Dados inválidos",
          },
          "500": {
            description: "Erro interno do servidor",
          },
        },
      },
      get: {
        tags: ["Preenchimentos"],
        summary: "Lista todos os preenchimentos",
        responses: {
          "200": {
            description: "Lista de preenchimentos",
            content: {
              "application/json": {
                schema: {
                  type: "array",
                  items: {
                    $ref: "#/components/schemas/GetAllPreenchimento",
                  },
                },
              },
            },
          },
          "500": {
            description: "Erro interno do servidor",
          },
        },
      },
    },
  },
  components: {
    schemas: {
      CreateCampo: campoCreateOpenApiSchema,
      GetAllCampo: campoGetAllOpenApiSchema,
      CreatePreenchimento: preenchimentoCreateOpenApiSchema,
      GetAllPreenchimento: preenchimentoGetAllOpenApiSchema,
    },
  },
};
