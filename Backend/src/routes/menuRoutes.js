const express = require("express");
const router = express.Router();
const MenuItem = require("../models/MenuItem");

// Get all menu items
router.get("/", async (req, res) => {
  try {
    const items = await MenuItem.find();
    res.json(items);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Add a new menu item
router.post("/", async (req, res) => {
  try {
    const { name, mainCategory, category, price, status, img } = req.body;

    // Validate required fields
    if (!name || !mainCategory || !category || !price) {
      return res.status(400).json({ message: "Missing required fields" });
    }

    const newItem = new MenuItem({
      name,
      mainCategory,
      category,
      price: Number(price), // ensure number
      status: status || "Available",
      img: img || "",
    });

    const savedItem = await newItem.save();
    res.status(201).json(savedItem);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Update a menu item
router.put("/:id", async (req, res) => {
  try {
    const { name, mainCategory, category, price, status, img } = req.body;

    const updatedItem = await MenuItem.findByIdAndUpdate(
      req.params.id,
      {
        name,
        mainCategory,
        category,
        price: Number(price),
        status,
        img,
      },
      { new: true }
    );

    res.json(updatedItem);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Delete a menu item
router.delete("/:id", async (req, res) => {
  try {
    await MenuItem.findByIdAndDelete(req.params.id);
    res.json({ message: "Menu item deleted" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
