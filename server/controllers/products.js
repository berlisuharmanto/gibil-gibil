const Products = require("../models/Products");

const getsAllProductsStatic = async (req, res) => {
  const id = req.params._id;

  Products.findById(id)
    .select("name price _id prodImage prodBg prodDesc prodSpec")
    .exec()
    .then((doc) => {
      if (doc) {
        res.status(200).json({ doc });
      } else {
        res.status(400).json("Invalid product");
      }
    });
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

  const products = await Products.find(queryObject);
  console.log(products);
  res.status(200).json({ products, nbHits: products.length });
};

const createProduct = async (req, res) => {
  const { name, price, numOfProducts, prodImage, prodBg, prodDesc, prodSpec } =
    req.body;

  const newProduct = new Products({
    name,
    price,
    numOfProducts,
    prodImage,
    prodBg,
    prodDesc,
    prodSpec,
  });

  await newProduct.save();
  return res.status(201).json({ msg: "masuk brah" });
};

module.exports = {
  getsAllProducts,
  getsAllProductsStatic,
  createProduct,
};
