const Requisition = require("../models/requisition.model");
const axios = require("axios");

const makePayment = async (req, res, next) => {
  try {
    const { requisitionId } = req.query;
    const order = await Requisition.findOne({
      requisitionId,
    }).populate("userId");
    const data = await axios({
      url: "https://api.paystack.co/transaction/initialize",
      method: "post",
      headers: {
        Authorization: `Bearer ${process.env.paystack_Secret}`,
      },
      data: {
        email: order.userId.email,
        amount: order.totalAmount,
      },
    });
    return res.status(200).json({
      data: data.data.data,
      order,
    });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};


module.exports = makePayment
