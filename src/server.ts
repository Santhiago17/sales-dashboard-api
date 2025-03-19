import "reflect-metadata";
import express from "express";
import cors from "cors";
import { AppDataSource } from "./database/data-source";
import saleRoutes from "./routes/saleRoutes"

const app = express();

app.use(cors());
app.use(express.json()); 
app.use("/api/sales", saleRoutes);

const PORT = process.env.PORT || 3000;

AppDataSource.initialize()
  .then(() => {
    console.log("📦 Banco de dados conectado!");
    app.listen(PORT, () => {
      console.log(`🚀 Servidor rodando na porta ${PORT}`);
    });
  })
  .catch((error) => console.log("Erro ao conectar no banco", error));
