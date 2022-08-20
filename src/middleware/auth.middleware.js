// require dependencies
const jwt = require("jsonwebtoken");
const User = require("../models/user.model");
require("dotenv").config();

//  authenticating  user
const authenticate = async (req, res, next) => {
  try {
    let authorization = req.headers.authorization;
    if (!authorization) {
      return res.status(401).json({
        message: "Token is required",
      });
    }
    const authenticationArr = authorization.split(" ");
    if (authenticationArr[0] !== "Bearer") {
      return res.status(401).json({
        message: "Bearer is required",
      });
    }
    let token = authenticationArr[1];
    if (!token) {
      return res.status(401).json({
        message: "Token is required",
      });
    }
    const decryptToken = await jwt.verify(token, process.env.SECRET_TOKEN, {
      expiresIn: "1d",
    });

    req.user = decryptToken;
    next();
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
};

//    exporting modules
module.exports = authenticate ;
