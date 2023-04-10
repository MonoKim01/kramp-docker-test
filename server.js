const express = require("express");

const PORT = 8080;

//This is APP6
const app = express();
app.get("/", (req, res) => {
  res.send("mymy");
});

app.listen(PORT);
console.log("Server is running");
