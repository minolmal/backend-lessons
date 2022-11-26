const { products, people } = require("../data");

const getPeople = (req, res) => {
  res.status(200).json({ success: true, data: people });
};

const postPerson = (req, res) => {
  const { name } = req.body;
  if (!name) {
    return res
      .status(400)
      .json({ success: false, msg: "Please provide a name" });
  }
  res.status(201).json({ success: true, person: name });
};

const updatePerson = (req, res) => {
  let { id } = req.params;
  let { name } = req.body;

  const person = people.find((person) => person.id === Number(id));
  if (!person) {
    return res.status(400).json({ success: false, msg: "ID not found" });
  }

  const newPeople = people.map((person) => {
    if (person.id === Number(id)) {
      person.name = name;
    }
    return person;
  });
  res.status(201).json({ success: true, data: newPeople });
};
const deletePerson = (req, res) => {
  const person = people.find((person) => person.id === Number(req.params.id));
  if (!person) {
    return res.status(400).json({
      success: false,
      msg: `No person found with id: ${req.params.id}`,
    });
  }

  const newPeople = people.filter(
    (person) => person.id !== Number(req.params.id)
  );
  return res.status(201).json({ success: true, data: newPeople });
};

module.exports = {
  getPeople,
  postPerson,
  updatePerson,
  deletePerson,
};
