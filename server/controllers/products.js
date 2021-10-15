const Products = require("../models/Products");

const getsAllProductsStatic = async (req, res) => {
  throw new Error("testing async errors");
  res.status(200).json({ msg: "product testing route" });
};

const getsAllProducts = async (req, res) => {
  res.status(200).json({ msg: "product route" });
};

const createProduct = async (req, res) => {
  const { name, price, numOfProducts } = req.body;

  const newProduct = new Products({
    name,
    price,
    numOfProducts,
  });

  await newProduct.save();
  return res.status(201).json({ msg: "masuk brah" });
};

module.exports = {
  getsAllProducts,
  getsAllProductsStatic,
  createProduct,
};
