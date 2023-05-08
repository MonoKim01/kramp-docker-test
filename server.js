const express = require("express");

const PORT = 8080;

//This is APP10
const app = express();

app.use("", (req, res, next) =&gt; {
  console.log("req: ", req);
  console.log("res: ", res);
  next()
});

app.get("/", (req, res) =&gt; {
  res.send("hello krampoline!!!!!");
});

app.get("/list", (req, res) =&gt; {
  res.send("list-endpoint");
});

app.listen(PORT);
console.log("Server is running");
