/**
 *   @author : Meet Patel (B00899516)
 */

/**
 *   @description : a user model to define the structure of the Product.
 */

const mongoose = require("mongoose");

const ProductSchema = mongoose.Schema({
  userid: { type: String },
  ProductId: { type: Number, unique: true },
  Name: { type: String, required: true },
  Category: { type: String, required: true },
  Image: { type: String, required: true },
  Description: { type: String, required: true },
  Quantity: { type: Number, required: true },
  RentAmount: { type: Number, required: true },
  Address: { type: String, required: true },
  SecurityDeposit: { type: Number, required: true },
  AvailableFor: { type: Number, required: true },
  CouponType: { type: String, required: true },
});

const ProductDetails = mongoose.model("productdetails", ProductSchema);

module.exports = ProductDetails;
