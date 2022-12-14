// require dependencies
const express = require("express");
const router = express.Router();
const app = express();
const mongoose = require("mongoose");
require("dotenv").config();
const authRoute = require("./routes/auth.route");
const userRoute = require("./routes/user.route");
const productRoute = require("./routes/product.route")
const requisitionRoute = require("./routes/requisition.route");
const paymentRoute = require("./routes/payment.route");

//  middleware
app.use(express.json());

const { PORT } = process.env;

// connecting to DB
const connectDB = require("./DBconnect/database");
connectDB;
// Base route
app.get("/", function (req, res) {
  res.send("Hello World!");
});

// route
app.use("/api/v1/auth", authRoute);
app.use("/api/v1/user", userRoute);
app.use("/api/v1/product", productRoute)
app.use("/api/v1/requisition", requisitionRoute);
app.use("/api/v1/payment", paymentRoute);

app.listen(PORT, async () => {
  console.log(`The app is listening on PORT ${PORT}`);
});
