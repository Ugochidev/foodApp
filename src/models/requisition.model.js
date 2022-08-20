const mongoose = require("mongoose")
const Schema = mongoose.Schema

const requisitionSchema = new Schema(
  {
    requisitionId: {
      type: String,
      required: true,
    },
    productId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Product",
    },
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    dateCreated: {
      type: String,
      required: true,
      default: new Date(),
    },
    quantityRequested: {
      type: Number,
      required: true,
    },
    totalAmount: {
      type: Number,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Requisition = mongoose.model("Requisition", requisitionSchema);

module.exports = Requisition;