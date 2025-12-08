const mongoose = require("mongoose");

const OrderNowSchema = new mongoose.Schema({
  customerName: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String, required: true },
  address: { type: String, required: true },
  dish: { type: String, required: true },
  quantity: { type: Number, default: 1 },
  total: { type: Number, required: true },
  status: { type: String, default: "Pending" },
  orderedAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("OrderNow", OrderNowSchema);
