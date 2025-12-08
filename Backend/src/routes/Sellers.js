const express = require("express");
const router = express.Router();
const Seller = require("../models/Seller");

// POST new seller
router.post("/", async (req, res) => {
  const { name, email, phone, status } = req.body;
  if (!name || !email || !phone) {
    return res.status(400).json({ message: "Name, email, and phone are required" });
  }

  try {
    const exists = await Seller.findOne({ email });
    if (exists) return res.status(400).json({ message: "Seller with this email already exists" });

    const seller = new Seller({ name, email, phone, status });
    await seller.save();
    res.status(201).json({ message: "Seller added successfully", seller });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
});

// GET all sellers
router.get("/", async (req, res) => {
  try {
    const sellers = await Seller.find();
    res.json(sellers);
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
});

// GET single seller by ID
router.get("/:id", async (req, res) => {
  try {
    const seller = await Seller.findById(req.params.id);
    if (!seller) return res.status(404).json({ message: "Seller not found" });
    res.json(seller);
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
});

// PUT / Update seller
router.put("/:id", async (req, res) => {
  try {
    const seller = await Seller.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!seller) return res.status(404).json({ message: "Seller not found" });
    res.json({ message: "Seller updated", seller });
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
});

// DELETE seller
router.delete("/:id", async (req, res) => {
  try {
    const seller = await Seller.findByIdAndDelete(req.params.id);
    if (!seller) return res.status(404).json({ message: "Seller not found" });
    res.json({ message: "Seller deleted", seller });
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
});

module.exports = router;
