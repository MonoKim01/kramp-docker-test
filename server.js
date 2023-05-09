const express = require("express");

const PORT = 8080;

//This is APP11
const app = express();

app.use("", (req, res, next) => {
  console.log("req: ", req);
  console.log("res: ", res);
  next()
});

app.get("/", (req, res) => {
  res.send("hello krampoline");
});

app.get("/list", (req, res) => {
  res.send("list-endpoint");
});

app.listen(PORT);
console.log("Server is running");
