const express = require("express");
const router = express.Router();
const Laptop = require("../modles/laptopModel");

router.get("/getAllLaptops", async (req, res) => {
  try {
    const allLaptops = await Laptop.find({});
    res.send(allLaptops);
  } catch (err) {
    console.log(err);
  }
});

module.exports = router;
