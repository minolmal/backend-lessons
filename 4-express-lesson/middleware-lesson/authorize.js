const authorize = (req, res, next) => {
  const { user } = req.query;

  if (user === "john") {
    req.user = { name: "john", id: 3 };
  } else {
    res.status(401).send("Unauthorize");
  }
  console.log("Authorize" + req.user.name + "-" + req.user.id);
  next();
};

module.exports = { authorize };
