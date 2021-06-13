const express = require("express");
const db = require("./db");
const laptopRoute = require("./routes/laptopRoute");
const cors = require("cors");
const app = express();

app.use(express.json());
app.use(cors());

app.use("/", laptopRoute);

app.listen(5000, () => {
  console.log("App is running on port 5000");
});
