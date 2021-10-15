const express = require("express");
const router = express.Router();

const {
  getsAllProducts,
  getsAllProductsStatic,
} = require("../controllers/products");

router.route("/").get(getsAllProducts);
router.route("/static").get(getsAllProductsStatic);

module.exports = router;
