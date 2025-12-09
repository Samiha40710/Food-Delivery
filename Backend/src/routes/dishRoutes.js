const express = require("express");
const router = express.Router();
const Dish = require("../models/Dish");

// GET all dishes
router.get("/", async (req, res) => {
  try {
    const dishes = await Dish.find();
    res.json(dishes);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// POST new dish
router.post("/", async (req, res) => {
  try {
    const newDish = new Dish(req.body);
    const savedDish = await newDish.save();
    res.status(201).json(savedDish);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// PUT update dish
router.put("/:id", async (req, res) => {
  try {
    const updatedDish = await Dish.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(updatedDish);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// DELETE dish
router.delete("/:id", async (req, res) => {
  try {
    await Dish.findByIdAndDelete(req.params.id);
    res.json({ message: "Dish deleted" });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

module.exports = router;
