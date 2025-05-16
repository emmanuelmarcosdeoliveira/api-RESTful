import { Router } from "express";
import { myMiddleware } from "../middlewares/myMiddleware";
const productsRouter = Router();

productsRouter.get("/:id", (request, response) => {
  const { page, limit } = request.query;
  const { id } = request.params;
  response.send(`Página ${page} de ${limit} - ID: ${id} `);
});

// Middleware em um rota específica
productsRouter.post("/", myMiddleware, (request, response) => {
  const { name, price } = request.body;
  response.status(201).json({ name, price, user_id: request.user_id });
});

export { productsRouter };
