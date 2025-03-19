import { Router } from "express";
const router = Router();

// Definição das rotas
router.get("/", (req, res) => {
  res.send("Rota de vendas funcionando!");
});

export default router;
