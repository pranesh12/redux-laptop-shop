const express = require("express");
require("dotenv").config();
const router = express.Router();
const Order = require("../modles/orderModel");
const stripe = require("stripe")(`{process.env.STRIPE_SECRET_KEY}`);
router.post("/placeorder", async (req, res) => {
  const { userInfo, cartItems, currentUser } = req.body;
  try {
    const payment = await stripe.paymentIntents.create({
      amount: userInfo.totalamount * 100,
      currency: "usd",
    });
    if (payment) {
      const newOrder = await Order.create({
        userId: currentUser._id,
        firstName: userInfo.firstName,
        lastName: userInfo.lastName,
        email: userInfo.email,
        totoalAmount: userInfo.totalamount,
        mobileNumber: userInfo.mobile,
        orders: cartItems,
        city: userInfo.city,
        address: userInfo.address,
      });
      res.send({ meassage: "Payment Successfull" });
    } else {
      res.send({ meassage: "something went wrong" });
    }
  } catch (err) {
    console.log(err);
    res.send({ meassage: err });
  }
});

router.post("/userOrder", async (req, res) => {
  const { userid } = req.body;
  console.log(userid);
  try {
    const userOrders = await Order.find({ userId: userid });
    console.log(userOrders);
    res.send(userOrders);
  } catch (err) {
    console.log({ meassage: err });
  }
});

module.exports = router;
