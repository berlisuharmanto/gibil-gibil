const mongoose = require("mongoose");

const productsSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "name is required"],
  },
  price: {
    type: Number,
    required: [true, "price is required"],
  },
  numOfProducts: {
    type: Number,
    required: [true, "numOfProduct is required"],
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
});

module.exports = mongoose.model("Products", productsSchema);
