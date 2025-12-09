const express = require("express");
const router = express.Router();
const Stats = require("../models/Stats");

router.get("/dashboard", async (req, res) => {
  try {
    let stats = await Stats.findOne();
    if (!stats) {
      stats = new Stats({
        foodDelivered: 23568,
        balance: 8904.8,
        satisfaction: 98,
      });
      await stats.save();
    }

    res.json(stats);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
});

module.exports = router;
