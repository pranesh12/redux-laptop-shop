const mongoose = require("mongoose");
const { Schema } = mongoose;

const orderSchema = new Schema(
  {
    firstName: { type: String, require },
    lastName: { type: String, require },
    email: { type: String, require },
    mobileNumber: { type: String, require },
    userId: String,
    city: { type: String, require },
    address: { type: String, require },
    transactionId: { type: String },
    userId: { type: String, require },
    status: { type: String, default: false },
    orders: [],
  },
  {
    timestamps: true,
  }
);

const orderModel = mongoose.model("orders", orderSchema);
module.exports = orderModel;
