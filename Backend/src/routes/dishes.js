const express = require("express");
const router = express.Router();
const Dish = require("../models/Dish");

// GET all dishes
router.get("/", async (req, res) => {
  try {
    const dishes = await Dish.find();
    res.json(dishes);
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
});

// GET single dish by ID
router.get("/:id", async (req, res) => {
  try {
    const dish = await Dish.findById(req.params.id);
    if (!dish) return res.status(404).json({ message: "Dish not found" });
    res.json(dish);
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
});

// POST new dish
router.post("/", async (req, res) => {
  const { name, category, price, quantity, status } = req.body;
  try {
    const dish = new Dish({ name, category, price, quantity, status });
    await dish.save();
    res.status(201).json(dish);
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
});

// PUT / Update dish
router.put("/:id", async (req, res) => {
  try {
    const dish = await Dish.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!dish) return res.status(404).json({ message: "Dish not found" });
    res.json(dish);
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
});

// DELETE dish
router.delete("/:id", async (req, res) => {
  try {
    const dish = await Dish.findByIdAndDelete(req.params.id);
    if (!dish) return res.status(404).json({ message: "Dish not found" });
    res.json({ message: "Dish deleted", dish });
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
});

module.exports = router;
