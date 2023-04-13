const express = require("express");

const PORT = 8080;

//This is APP6
const app = express();
app.get("/", (req, res) => {
  res.send("mymy");
});

app.get("/list", (req, res) => {
  res.send("list-endpoint");
});

app.listen(PORT);
console.log("Server is running");
