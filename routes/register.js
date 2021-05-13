const router = require("express").Router();
const Register = require("../models/Register");
const bcrypt = require("bcryptjs");

router.post("/", (req, res, next) => {
  bcrypt.hash(req.body.password, 10).then((hash) => {
    const register = new Register({
      name: req.body.name,
      email: req.body.email,
      password: hash,
    });

    register
      .save()
      .then(
        res.send({
          message: "Auth is good!",
        })
      )
      .catch((err) => {
        return res.send("unable to connect to database: " + err);
      });
  });
});

module.exports = router;
