const express = require("express");
const cors = require("cors");

const authRoutes = require("./routes/authRoutes");
const statsRoutes = require("./routes/stats");
const orderRoutes = require("./routes/Order");
const customerRoutes = require("./routes/Customer");
const sellersRoutes = require("./routes/Sellers");
const orderNowRoutes = require("./routes/orderNowRoutes");
const subscribeRoutes = require("./routes/subscribeRoutes");
const contactRoutes = require("./routes/contact");
const dishRoutes = require("./routes/dishRoutes");
const menuRoutes = require("./routes/menuRoutes");

const app = express();

app.use(cors());

app.use(express.json({ limit: "10mb" }));
app.use(express.urlencoded({ limit: "10mb", extended: true }));

app.use("/auth", authRoutes);
app.use("/api/stats", statsRoutes);
app.use("/api/orders", orderRoutes);
app.use("/api/customers", customerRoutes);
app.use("/api/sellers", sellersRoutes);
app.use("/api/ordernow", orderNowRoutes);
app.use("/api/subscribe", subscribeRoutes);
app.use("/api/contact", contactRoutes);
app.use("/api/dishes", dishRoutes);
app.use("/api/menu-items", menuRoutes);

module.exports = app;
