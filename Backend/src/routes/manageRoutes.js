const express = require("express");
const router = express.Router();
const Dish = require("../models/Dish");

router.get("/", async (req, res) => {
  try {
    const dishes = await Dish.find();
    res.json(dishes);
  } catch (error) {
    res.status(500).json({ message: "Server Error" });
  }
});

router.post("/", async (req, res) => {
  try {
    const { _id, ...dishData } = req.body;

    const dish = new Dish(dishData);
    await dish.save();

    res.status(201).json(dish);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error", error: error.message });
  }
});

router.put("/:id", async (req, res) => {
  try {
    const dish = await Dish.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.json(dish);
  } catch (error) {
    res.status(500).json({ message: "Server Error" });
  }
});

router.delete("/:id", async (req, res) => {
  try {
    await Dish.findByIdAndDelete(req.params.id);
    res.json({ message: "Dish deleted" });
  } catch (error) {
    res.status(500).json({ message: "Server Error" });
  }
});

module.exports = router;
