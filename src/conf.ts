import fastify, { FastifyInstance }  from "fastify";
import cors from "@fastify/cors";

export const app: FastifyInstance = fastify({ 
    logger: {
        transport: {
            target: 'pino-pretty'
        }
    }
})

import { FastifyError, FastifyRequest, FastifyReply } from 'fastify';
import { baseErrors } from "./helpers/errors/base-errors";

app.setErrorHandler((error: FastifyError, req: FastifyRequest, reply:FastifyReply) => {
    if(error instanceof baseErrors) return reply.status(error.statusCode).send({ error: error.name, message: error.message });

    // Erro padrão
    return reply.status(500).send({ error: "Internal Server Error" });
});

await app.register(cors)

import { healthRoutes } from './routes/healthRoutes';
app.register(healthRoutes, { prefix: '/api/verify' })

import { UUIDRoutes } from "./routes/uuidRoutes";
app.register(UUIDRoutes, { prefix: '/api/UUID' })