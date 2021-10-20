const express = require("express");
const router = express.Router();

const {
  getsAllProducts,
  getsProduct,
  getsAllProductsStatic,
  createProduct,
} = require("../controllers/products");

router.route("/").get(getsAllProducts);
router.route("/:_id").get(getsProduct);
router.route("/:static").get(getsAllProductsStatic);

router.route("/").post(createProduct);

module.exports = router;
