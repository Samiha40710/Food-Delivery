const express = require("express");
const router = express.Router();
const OrderNow = require("../models/OrderNow");

router.post("/", async (req, res) => {
  const { customerName, email, phone, address, dish, quantity, total } = req.body;
  if (!customerName || !email || !phone || !address || !dish || !total) {
    return res.status(400).json({ message: "All required fields must be filled" });
  }

  try {
    const order = new OrderNow({ customerName, email, phone, address, dish, quantity, total });
    await order.save();
    res.status(201).json({ message: "Order placed successfully!", order });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
});

router.get("/", async (req, res) => {
  try {
    const orders = await OrderNow.find();
    res.json(orders);
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
});

router.get("/:id", async (req, res) => {
  try {
    const order = await OrderNow.findById(req.params.id);
    if (!order) return res.status(404).json({ message: "Order not found" });
    res.json(order);
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
});

module.exports = router;
