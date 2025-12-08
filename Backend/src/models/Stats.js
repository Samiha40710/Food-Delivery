const mongoose = require("mongoose");

const StatsSchema = new mongoose.Schema({
  foodDelivered: { type: Number, default: 0 },
  balance: { type: Number, default: 0 },
  satisfaction: { type: Number, default: 0 },
  updatedAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Stats", StatsSchema);
