//req => middleware => res
const { json, query, application } = require("express");
const express = require("express");
const app = express();
const { myLog } = require("./logger");

// function myLog(req, res, next) {
//   const method = req.method;
//   const url = req.url;
//   const time = new Date().getFullYear();
//   console.log(method, url, time);
//   next();
// }

app.get("/", myLog, (req, res) => {
  res.send("home");
});
app.get("/about", myLog, (req, res) => {
  res.send("about");
});

app.listen(5000, () => {
  console.log("server: http://localhost:5000");
});
