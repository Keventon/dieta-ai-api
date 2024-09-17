import {
  FastifyInstance,
  FastifyPluginOptions,
  FastifyRequest,
  FastifyReply,
} from "fastify";

import { CreateNutritionController } from "./controller/CreateNutritionController";

export async function routes(
  fastify: FastifyInstance,
  options: FastifyPluginOptions
) {
  fastify.get(
    "/hello",
    async (request: FastifyRequest, reply: FastifyReply) => {
      let responseText =
        '```json\n{\n  "nome": "Keventon",\n  "sexo": "Masculino",\n  "idade": 23,\n  "altura": 1.80,\n  "peso": 80,\n  "objetivo": "Perder peso",\n  "refeicoes": [\n    {\n      "horario": "07:00",\n      "nome": "Café da manhã",\n      "alimentos": [\n        "1 fatia de pão integral",\n        "1 ovo cozido",\n        "1 xícara de iogurte grego desnatado",\n        "1/2 mamão papaia",\n        "1 colher de sopa de chia"\n      ]\n    },\n    {\n      "horario": "10:00",\n      "nome": "Lanche da manhã",\n        "alimentos": [\n        "1 xícara de frutas vermelhas",\n        "1 colher de sopa de granola"\n      ]\n    },\n    {\n      "horario": "13:00",\n      "nome": "Almoço",\n      "alimentos": [\n        "100g de frango grelhado",\n        "1 xícara de arroz integral",\n        "1 xícara de brócolis cozido no vapor",\n        "Salada verde com azeite de oliva e limão"\n      ]\n    },\n    {\n      "horario": "16:00",\n      "nome": "Lanche da tarde",\n        "alimentos": [\n        "1 iogurte natural desnatado",\n        "1/2 banana",\n        "1 colher de sopa de castanhas"\n      ]\n    },\n    {\n      "horario": "20:00",\n      "nome": "Jantar",\n      "alimentos": [\n        "150g de peixe assado",\n        "1 xícara de batata doce cozida",\n        "1 xícara de couve refogada",\n        "Salada verde com azeite de oliva e limão"\n      ]\n    }\n  ],\n  "suplementos": [\n    "Proteína do soro do leite",\n    "Creatina",\n    "Ômega 3"\n  ]\n}\n```';

      try {
        let jsonString = responseText
          .replace(/```\w*\n/g, "")
          .replace(/\n```/g, "")
          .trim();

        let json = JSON.parse(jsonString);

        return reply.send(jsonString);
      } catch (error) {
        console.log(error);
      }

      reply.send({ ok: true });
    }
  );

  fastify.post(
    "/create-nutrition",
    async (request: FastifyRequest, reply: FastifyReply) => {
      return new CreateNutritionController().handle(request, reply);
    }
  );
}
