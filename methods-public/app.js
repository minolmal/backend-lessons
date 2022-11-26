const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
// const { products, people } = require("./data");
const people = require("./routes/people");
const auth = require("./routes/auth");
const { map } = require("lodash");

const app = express();
app.use(cors(), morgan("dev"));

// static assets
app.use(express.static("./"));
// parse form data
app.use(express.urlencoded({ extended: false }));
// parse json
app.use(express.json());
// routes
app.use('/api/people', people)
app.use('/login', auth)

// app.get("/api/people", (req, res) => {
//   res.status(200).json({ success: true, data: people });
// });

// app.post("/api/people", (req, res) => {
//   const { name } = req.body;
//   if (!name) {
//     return res
//       .status(400)
//       .json({ success: false, msg: "Please provide a name" });
//   }
//   res.status(201).json({ success: true, person: name });
// });

// // url/:id
// app.put("/api/people/:id", (req, res) => {
//   let { id } = req.params;
//   let { name } = req.body;

//   const person = people.find((person) => person.id === Number(id));
//   if (!person) {
//     return res.status(400).json({ success: false, msg: "ID not found" });
//   }

//   const newPeople = people.map((person) => {
//     if (person.id === Number(id)) {
//       person.name = name;
//     }
//     return person;
//   });
//   res.status(201).json({ success: true, data: newPeople });
// });

// app.delete("/api/people/:id", (req, res) => {
//   const person = people.find((person) => person.id === Number(req.params.id));
//   if (!person) {
//     return res
//       .status(400)
//       .json({
//         success: false,
//         msg: `No person found with id: ${req.params.id}`,
//       });
//   }

//   const newPeople = people.filter(
//     (person) => person.id !== Number(req.params.id)
//   );
//   return res.status(201).json({ success: true, data: newPeople });
// });

app.post("/api/postman/people", (req, res) => {
  const { name } = req.body;
  if (!name) {
    return res
      .status(400)
      .json({ success: false, msg: "Please provide a name" });
  }
  res.status(201).json({ success: true, data: [...people, name] });
});

// app.post("/login", (req, res) => {
//   const { name } = req.body;
//   if (name) {
//     return res.status(200).send(`Welcome ${name}`);
//   } else {
//     res.status(401).send("Please use a valid name");
//   }
// });

app.listen(5000, () => {
  console.log("server: http://localhost:5000");
});
