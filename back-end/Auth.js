const { User } = require("./models/User");
const express = require("express");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const secrets = require("./secrets.json");

const app = express.Router();
app.post("/register", async (req, res) => {
  const user = req.body;
  console.log(user);
  const takenUsername = await User.findOne({ username: user.username });
  const takenEmail = await User.findOne({ email: user.email });

  if (takenUsername || takenEmail) {
    res.json({ message: "Username or email has already been taken." });
  } else {
    user.password = await bcrypt.hash(req.body.password, 10);

    const dbuser = new User({
      username: user.username.toLowerCase(),
      email: user.email.toLowerCase(),
      password: user.password,
    });

    dbuser.save();
    res.json({ message: "success" });
  }
});

app.post("/login", (req, res) => {
  const userLoggedIn = req.body;
  console.log(userLoggedIn);
  User.findOne({ username: userLoggedIn.username }).then((dbUser) => {
    if (!dbUser) {
      return res.json({ message: "Invalid Username or Password" });
    }
    bcrypt.compare(userLoggedIn.password, dbUser.password).then((isCorrect) => {
      if (isCorrect) {
        const payload = {
          id: dbUser._id,
          username: dbUser.username,
        };
        jwt.sign(
          payload,
          secrets.JWT_SECRET,
          { expiresIn: 86400 },
          (err, token) => {
            if (err) return res.json({ message: err });
            return res.json({
              message: "Success",
              token: "Bearer " + token,
            });
          }
        );
      } else {
        return res.json({ message: "Invalid Username or Password" });
      }
    });
  });
});

module.exports = app;
