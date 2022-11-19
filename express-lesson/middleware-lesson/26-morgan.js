//req => middleware => res
//1. route vs use
//options - our own/express/third party

//app.use([logger,authorize])
//app.use(express.static('public'))
const { json, query, application } = require("express");
const express = require("express");
const app = express();
var morgan = require("morgan");

app.use(morgan("tiny"));

app.get("/", (req, res) => {
  res.send("home");
});
app.get("/about", (req, res) => {
  res.send("about");
});

app.listen(5000, () => {
  console.log("server: http://localhost:5000");
});
