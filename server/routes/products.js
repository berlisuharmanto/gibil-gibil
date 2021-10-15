const express = require("express");
const router = express.Router();

const {
  getsAllProducts,
  getsAllProductsStatic,
  createProduct,
} = require("../controllers/products");

router.route("/").get(getsAllProducts);
router.route("/static").get(getsAllProductsStatic);

router.route("/").post(createProduct);

module.exports = router;
