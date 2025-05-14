import express from "express";

const PORT = 3333;

const app = express();

app.get("/", (request, response) => {
  response.send(`Hello world Express!`);
});

app.listen(PORT, () => console.log(`server is running  port ${PORT}`));
