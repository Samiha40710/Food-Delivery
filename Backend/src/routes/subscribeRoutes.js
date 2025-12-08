const express = require("express");
const router = express.Router();
const Subscribe = require("../models/Subscribe");

// POST /api/subscribe
router.post("/", async (req, res) => {
  const { email } = req.body;
  if (!email) return res.status(400).json({ message: "Email is required" });

  try {
    const exists = await Subscribe.findOne({ email });
    if (exists) return res.status(400).json({ message: "Email already subscribed" });

    const newSubscribe = new Subscribe({ email });
    await newSubscribe.save();

    res.status(201).json({ message: "Subscribed successfully" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
});

// GET all subscriptions (optional)
router.get("/", async (req, res) => {
  try {
    const subscribers = await Subscribe.find();
    res.json(subscribers);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
});

module.exports = router;
