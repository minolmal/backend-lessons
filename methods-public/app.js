const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const { products, people } = require("./data");

const app = express();
app.use(cors(), morgan("dev"));

// static assets
app.use(express.static("./"));
// parse form data
app.use(express.urlencoded({ extended: false }));
// parse json
app.use(express.json());

app.get("/api/people", (req, res) => {
  res.status(200).json({ success: true, data: people });
});

app.post("/api/people", (req, res) => {
  const { name } = req.body;
  if (!name) {
    return res
      .status(400)
      .json({ success: false, msg: "Please provide a name" });
  }
  res.status(201).json({ success: true, person: name });
});

app.post("/login", (req, res) => {
  const { name } = req.body;
  if (name) {
    return res.status(200).send(`Welcome ${name}`);
  } else {
    res.status(401).send("Please use a valid name");
  }
});

app.listen(5000, () => {
  console.log("server: http://localhost:5000");
});
