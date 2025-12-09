const mongoose = require("mongoose");

const menuItemSchema = new mongoose.Schema({
  name: { type: String, required: true },
  mainCategory: { type: String, required: true }, // Fast Food / Desi Food
  category: { type: String, required: true }, // Food Item / Snacks / etc
  price: { type: Number, required: true },
  status: { type: String, default: "Available" },
  img: { type: String },                 // Single main image
  images: { type: [String], default: [] }, // Gallery images
  description: { type: String },        // Optional
}, { timestamps: true });

module.exports = mongoose.model("MenuItem", menuItemSchema);
