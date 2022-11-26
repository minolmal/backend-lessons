const express = require("express");
const router = express.Router();
const { postLogin } = require("../controller/auth");

// router.post("/", (req, res) => {
//   const { name } = req.body;
//   if (name) {
//     return res.status(200).send(`Welcome ${name}`);
//   } else {
//     res.status(401).send("Please use a valid name");
//   }
// });
router.post("/", postLogin);

module.exports = router;
