const makePayment= require("../controllers/payment.controller")
const router = require("express").Router();

router.post("/makepayment" , makePayment)


module.exports= router