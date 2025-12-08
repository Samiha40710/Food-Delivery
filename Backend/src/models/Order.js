const mongoose = require("mongoose");

const OrderSchema = new mongoose.Schema({
  date: { type: Date, required: true },
  orderId: { type: String, required: true, unique: true },
  dish: { type: String, required: true },
  total: { type: Number, required: true },
  status: { type: String, default: "Paid" },
});

module.exports = mongoose.model("Order", OrderSchema);
