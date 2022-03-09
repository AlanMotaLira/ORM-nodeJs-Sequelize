const { Router } = require("express");
const {NivelControllers} = require("../controllers/");

const router = Router();

router
  .get("/niveis", NivelControllers.pegaTodosOsNiveis)
  .get("/niveis/:id", NivelControllers.pegaUmNivel)
  .post("/niveis", NivelControllers.criarUmNivel)
  .put("/niveis/:id", NivelControllers.atualziarNivel)
  .delete("/niveis/:id", NivelControllers.removerNivel);

module.exports = router;
