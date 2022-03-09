const { Router } = require("express");
const {TurmaControllers} = require("../controllers/");

const router = Router();

router
  .get("/turmas", TurmaControllers.pegaTodasAsTurmas)
  .get("/turmas/:id", TurmaControllers.pegaUmaTurma)
  .put("/turmas/:id", TurmaControllers.atualizarTurma)
  .delete("/turmas/:id", TurmaControllers.removerTurma);

module.exports = router;
