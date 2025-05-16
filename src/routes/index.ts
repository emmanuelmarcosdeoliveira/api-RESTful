import { Router } from "express";
import { productsRouter } from "./productsRoutes";

const routes = Router();

routes.use("/products", productsRouter);

export { routes };
