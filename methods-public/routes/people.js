const express = require("express");
const router = express.Router();
const {
  getPeople,
  updatePerson,
  postPerson,
  deletePerson,
} = require("../controller/people");

// router.get("/", (req, res) => {
//   res.status(200).json({ success: true, data: people });
// });

// router.post("/", (req, res) => {
//   const { name } = req.body;
//   if (!name) {
//     return res
//       .status(400)
//       .json({ success: false, msg: "Please provide a name" });
//   }
//   res.status(201).json({ success: true, person: name });
// });

// url/:id
// router.put("/:id", (req, res) => {
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

// router.delete("/:id", (req, res) => {
//   const person = people.find((person) => person.id === Number(req.params.id));
//   if (!person) {
//     return res.status(400).json({
//       success: false,
//       msg: `No person found with id: ${req.params.id}`,
//     });
//   }

//   const newPeople = people.filter(
//     (person) => person.id !== Number(req.params.id)
//   );
//   return res.status(201).json({ success: true, data: newPeople });
// });

//short with controllers
// router.get("/", getPeople);
// router.post("/", postPerson);
// router.put("/:id", updatePerson);
// router.delete("/:id", deletePerson);

// shortest
router.route("/").get(getPeople).post(postPerson);
router.route("/:id").put(updatePerson).delete(deletePerson);

module.exports = router;
