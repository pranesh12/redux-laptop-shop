const mongoose = require("mongoose");
const { Schema } = mongoose;
const laptopSchema = new Schema({
  category: String,
  name: { type: String, require },
  img: { type: String, require },
  features: { type: Array, require },
  price: { type: Number, require },
  star: Number,
  shipping: { type: Number, require },
});

const laptopModel = mongoose.model("laptops", laptopSchema);

module.exports = laptopModel;
