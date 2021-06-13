const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/e-laptop", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

let db = mongoose.connection;
db.on("connected", () => {
  console.log("mongodb connection successfull");
});

db.on("err", () => {
  console.log("mongodb coonection failed");
});

module.exports = mongoose;
