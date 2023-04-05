const express = require("express");

const PORT = 8080;

//APP 입니다
const app = express();
app.get("/", (req, res) => {
  res.send("mymy");
});

app.listen(PORT);
console.log("Server is running");
