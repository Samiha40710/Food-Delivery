const express = require("express");
const router = express.Router();
const Contact = require("../models/Contact"); // Alehda schema file jo humne banayi thi

// POST /api/contact
router.post("/", async (req, res) => {
  const { firstName, lastName, email, message } = req.body;

  if (!firstName || !lastName || !email || !message) {
    return res.status(400).json({ error: "All fields are required" });
  }

  try {
    // Database me save karna
    const contact = new Contact({ firstName, lastName, email, message });
    await contact.save();

    res.status(200).json({ success: true, message: "Message received successfully!" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Server error" });
  }
});

module.exports = router;
