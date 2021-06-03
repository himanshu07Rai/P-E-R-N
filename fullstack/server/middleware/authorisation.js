const jwt = require("jsonwebtoken");
require("dotenv").config();

module.exports = (req, res, next) => {
  const token = req.header("token");

  if (!token) {
    return res.status(403).json("No token, authorisation denied");
  }

  try {
    const payload = jwt.verify(token, process.env.jwtSecret);
    req.user = payload.user;
    next();
  } catch (error) {
    res.status(401).json("Token is not valid ");
  }
};
