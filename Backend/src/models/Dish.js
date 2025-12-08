const mongoose = require("mongoose");

const DishSchema = new mongoose.Schema({
  name: { type: String, required: true },
  category: { type: String, required: true },
  price: { type: Number, required: true },
  quantity: { type: Number, default: 0 },
  status: { type: String, default: "Published" },
});

module.exports = mongoose.model("Dish", DishSchema);
