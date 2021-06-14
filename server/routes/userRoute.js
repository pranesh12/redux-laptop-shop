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
router.post("/login", async (req, res) => {});

module.exports = router;
