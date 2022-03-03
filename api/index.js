const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.json());

const port = process.env.PORT || 8080;

app
  .get("/teste", (req, res) => {res.status(200).send('boas vindas a api')})
;

app.listen(port,()=>console.log(`servidor rodando na porta ${port}`))

module.exports = app    