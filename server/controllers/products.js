const Products = require("../models/Products");

const getsAllProductsStatic = async (req, res) => {
  const products = await Products.find({ name: "Airator" });
  console.log(products);
  res.status(200).json({ products });
};

const getsAllProducts = async (req, res) => {
  const { name, price } = req.query;
  const queryObject = {};

  if (name) {
    queryObject.name = { $regex: name, $options: "i" };
  }

  if (price) {
    queryObject.price = { $regex: price, $options: "i" };
  }

  console.log(queryObject);
  const products = await Products.find(queryObject);
  res.status(200).json({ products, nbHits: products.length });
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
