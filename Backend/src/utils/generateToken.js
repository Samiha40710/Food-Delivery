const jwt = require("jsonwebtoken");

const generateToken = (id) => {
  return jwt.sign({ id }, "SECRET123", { expiresIn: "7d" });
};

module.exports = generateToken;
