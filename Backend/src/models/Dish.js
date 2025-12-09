const mongoose = require("mongoose");

const dishSchema = new mongoose.Schema({
  name: { type: String, required: true },
  category: { type: String, required: true },
  price: { type: Number, required: true },
  quantity: { type: Number, default: 0 },
  status: { type: String, enum: ["Published", "Draft", "Reviewing"], default: "Published" },
  img: { type: String },
  createdBy: { type: String, default: "Admin" },
}, { timestamps: true });

module.exports = mongoose.model("Dish", dishSchema);
