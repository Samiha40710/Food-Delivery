const express = require("express");
const router = express.Router();
const Subscribe = require("../models/Subscribe");

router.post("/", async (req, res) => {
  const { email } = req.body;
  if (!email) return res.status(400).json({ message: "Email is required" });

  try {
    const exists = await Subscribe.findOne({ email });
    if (exists)
      return res.status(400).json({ message: "Email already subscribed" });

    const newSubscribe = new Subscribe({ email });
    await newSubscribe.save();

    res.status(201).json({ message: "Subscribed successfully" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
});

router.get("/", async (req, res) => {
  try {
    const subscribers = await Subscribe.find();
    res.json(subscribers);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const subscriber = await Subscribe.findByIdAndDelete(req.params.id);
    if (!subscriber)
      return res.status(404).json({ message: "Subscriber not found" });

    res.status(200).json({ message: "Subscriber deleted successfully" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Something went wrong" });
  }
});

module.exports = router;
