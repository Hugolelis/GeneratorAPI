import { FastifyInstance } from 'fastify';
import { SortedNumberController } from "../controllers/SortedNumberController";

export async function SortedNumberRoutes(app: FastifyInstance) {
    app.post('/generate', SortedNumberController.generate)
}