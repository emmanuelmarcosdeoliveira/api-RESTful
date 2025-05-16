import express from "express";
import { myMiddleware } from "./middlewares/myMiddleware";
const PORT = 3333;

const app = express();
app.use(express.json());
// Abaixo Middleware global
app.use(myMiddleware);

app.get("/", (request, response) => {
  response.send("Hello World Express");
});

app.get("/products/", (request, response) => {
  response.send(`Products`);
});

app.post("/products", (request, response) => {
  const { name, price } = request.body;
  response.status(201).json({ name, price });
});

app.listen(PORT, () => {
  console.log(`Server is running na porta ${PORT}`);
});
