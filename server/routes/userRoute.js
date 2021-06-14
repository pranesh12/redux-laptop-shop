const express = require("express");
const router = express.Router();
const User = require("../modles/userModel");

router.post("/register", async (req, res) => {
  const { name, email, password } = req.body;
  try {
    const newUser = await User.create({
      name: name,
      email: email,
      password: password,
    });
    res.send("User register successull");
  } catch (error) {
    res.status(414).json({ meassage: error });
  }
});
router.post("/login", async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.find({ email, password });
    console.log(user);
    if (user.length > 0) {
      const currentUser = {
        name: user[0].name,
        isAdmin: user[0].isAdmin,
        email: user[0].email,
        _id: user[0]._id,
      };
      res.send(currentUser);
    } else {
      res.send({ meassage: "Login Failed" });
    }
  } catch (error) {
    res.send({ meassage: error });
  }
});

module.exports = router;
