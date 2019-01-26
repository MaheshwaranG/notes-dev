const express = require("express");

var app = express();

app.get("/", (req, res) => {
  res.send({ welcome: "welcome to passport login" });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT);
