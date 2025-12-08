const mongoose = require("mongoose");

const CustomerSchema = new mongoose.Schema({
  name: { type: String, required: true },
  phone: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  orders: { type: Number, default: 0 },
  since: { type: Date, default: Date.now },
  status: { type: String, default: "Active" },
});

module.exports = mongoose.model("Customer", CustomerSchema);
