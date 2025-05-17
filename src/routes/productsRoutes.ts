import { Router } from "express";
import { ProductsController } from "../controllers/ProductsController";
import { myMiddleware } from "../middlewares/myMiddleware";

const productsRouter = Router();
const productsController = new ProductsController();
productsRouter.get("/", productsController.index);

// Middleware em um rota específica
productsRouter.post("/", myMiddleware, productsController.create);

export { productsRouter };
