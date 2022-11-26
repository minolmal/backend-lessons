const { products, people } = require("../data");
const postLogin = (req, res) => {
  const { name } = req.body;
  if (name) {
    return res.status(200).send(`Welcome ${name}`);
  } else {
    res.status(401).send("Please use a valid name");
  }
};

module.exports = { postLogin };
