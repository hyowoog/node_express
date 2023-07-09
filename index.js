const express = require("express");
var cors = require("cors");
const app = express();
const port = 3000;

app.use(cors());

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.get("/sund/:name", function (req, res) {
  const { name } = req.params;
});

app.get("/cat", function (req, res) {
  res.json({ sound: "야옹" });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
