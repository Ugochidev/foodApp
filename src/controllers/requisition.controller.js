const Requisition = require("../models/requisition.model");
const uuid = require("uuid");
const User = require("../models/user.model");
const Product = require("../models/product.model");

const createRequisition = async (req, res, next) => {
  try {
    const { productId, userId } = req.query;
    const { dateCreated, quantityRequested } = req.body;
    const product = await Product.findOne({ productId });
    if (!product) {
      return res.status(404).json({ message: "NO product found" });
    }
    const user = await User.findOne({ userId });
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
  const totalAmount = quantityRequested * product.pricePerItem
    const newRequisition = new Requisition({
      requisitionId: uuid.v4(),
      productId: product._id,
      userId: user._id,
      dateCreated,
      quantityRequested,
      totalAmount,
    });
    await newRequisition.save();
    return res
      .status(201)
      .json({ message: "Requisition created successfully.", newRequisition });
  } catch (error) {
    return res.status(500).json({
      messsage: error.message,
    });
  }
};

const fetchRequisition = async (req, res, next) => {
  try {
    const { requisitionId } = req.query;
    const requisition = await Requisition.findOne({ requisitionId }).populate(
      "userId productId"
    );
    if (!requisition) {
      return res.status(404).json({
        message: "Requisition not found",
      });
    }
    return res.status(200).json({
      message: "Requisition fetched successfully ....",
      requisition,
    });
  } catch (error) {
    return res.status(500).json({
      messsage: error.message,
    });
  }
};

const fetchAllRequisition = async (req, res, next) => {
  try {
    const allRequisition = await Requisition.find().populate(
      "userId productId"
    );
    if (!allRequisition) {
      return res.status(404).json({ message: "NO requisition found" });
    }
    return res
      .status(200)
      .json({ message: "fetched successfully ....", allRequisition });
  } catch (error) {
    return res.status(500).json({
      messsage: error.message,
    });
  }
};

const updateRequisition = async (req, res, next) => {
  try {
    const { requisitionId } = req.query;
    const update = await Requisition.findOneAndUpdate(
      { requisitionId },
      req.body,
      { new: true }
    );
    if (!update) {
      return res.status(404).json({ message: "Requisition not found" });
    }
    return res
      .status(200)
      .json({ message: "Requisition updated successfully ....", update });
  } catch (error) {
    return res.status(500).json({
      messsage: error.message,
    });
  }
};

const deleteRequisition = async (req, res, next) => {
  try {
    const { requisitionId } = req.query;
    const removeRequisition = await Requisition.findOneAndDelete({
      requisitionId,
    });
    if (!removeRequisition) {
      return res.status(404).json({ message: "Requisition not found" });
    }
    return res
      .status(200)
      .json({ message: "Requisition deleted successfully ...." });
  } catch (error) {
    return res.status(500).json({
      messsage: error.message,
    });
  }
};



module.exports = {
  createRequisition,
  fetchRequisition,
  fetchAllRequisition,
  updateRequisition,
  deleteRequisition,
};
