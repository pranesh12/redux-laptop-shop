const express = require("express");
const db = require("./db");
const laptopRoute = require("./routes/laptopRoute");
const userRoute = require("./routes/userRoute");
const orderRoute = require("./routes/orderRoute");
const cors = require("cors");
const app = express();

app.use(express.json());
app.use(cors());

app.use("/", laptopRoute);
app.use("/user", userRoute);
app.use("/", orderRoute);

app.listen(5000, () => {
  console.log("App is running on port 5000");
});
