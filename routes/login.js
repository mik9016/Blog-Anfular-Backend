const router = require("express").Router();
const Register = require("../models/Register");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

router.post("/", (req, res, next) => {
  let fetchedUser;

  Register.findOne({ email: req.body.email }).then((user) => {
    if (!user) {
      return res.status(401).json({
        message: "Auth failed",
      });
    }
    fetchedUser = user;
    return bcrypt
      .compare(req.body.password, user.password)
      .then((result) => {
        if (!result) {
          return res.status(401).json({
            message: "Auth failed",
          });
        }
        const token = jwt.sign(
          { email: fetchedUser.email, userId: fetchedUser._id },
          "secret_this_should_be_longer",
          { expiresIn: "1h" }
        );
        res.status(200).json({
          token: token,
          name: fetchedUser.name,
          expiresIn: 3600,
        });
      })
      .catch((err) => {
        return res.status(401).json({
          message: "Auth failed",
        });
      });
  });

});

module.exports = router;
