//req => middleware => res
const { json, query, application } = require("express");
const express = require("express");
const app = express();
const { myLog } = require("./logger");
const { authorize } = require("./authorize");

// middleware loaded with app.use
app.use(myLog, authorize);

// [logger,authorize] add this to single route use use in single mode

app.get("/", (req, res) => {
  res.send("home");
});
app.get("/about", (req, res) => {
  res.send("about");
});

app.listen(5000, () => {
  console.log("server: http://localhost:5000");
});
