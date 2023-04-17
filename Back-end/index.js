const express = require("express");
const cors = require("cors");
const app = express();
const port = 3001;
app.use(cors());

app.use(express.json());
app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/pokemons", async (req, res) => {
  const response = await fetch("https://home.loick.io/api/pokemons");
  const result = await response.json();
  res.send(result);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
