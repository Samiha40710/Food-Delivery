const express = require("express");
const cors = require("cors");
const authRoutes = require("./routes/authRoutes");
const statsRoutes = require("./routes/stats");
const dishesRoutes = require("./routes/dishes");
const orderRoutes = require("./routes/Order");
const customerRoutes = require("./routes/Customer");
const sellersRoutes = require("./routes/Sellers");
const orderNowRoutes = require("./routes/orderNowRoutes");
const subscribeRoutes = require("./routes/subscribeRoutes");

const app = express();

app.use(cors());
app.use(express.json());

// Routes
app.use("/auth", authRoutes);
app.use("/api/stats", statsRoutes);
app.use("/api/dishes", dishesRoutes);
app.use("/orders", orderRoutes);
app.use("/customers", customerRoutes);
app.use("/sellers", sellersRoutes);
app.use("/orders", orderNowRoutes);
app.use("/api/subscribe", subscribeRoutes);

module.exports = app;
