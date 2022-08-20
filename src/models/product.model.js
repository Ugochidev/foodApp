const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const productSchema = new Schema(
  {
    productId: {
      type: String,
      required: true,
    },
    foodName: {
      type: String,
      required: true,
    },
    pricePerItem: {
      type: Number,
      required: true,
    },
    dateCreated: {
      type: String,
      required: true,
      default: new Date
    },
  },
  {
    timestamps: true,
  }
);

const Product = mongoose.model("Product", productSchema);
module.exports = Product;
