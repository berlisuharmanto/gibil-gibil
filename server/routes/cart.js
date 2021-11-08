const express = require("express");
const router = express.Router();

const {
  getsAllCarts,
  addToCarts,
  deleteCarts,
  updateCarts,
} = require("../controllers/cart");

router.route("/").get(getsAllCarts);
router.route("/add").get(addToCarts);
router.route("/delete").post(deleteCarts);
router.route("/update").post(updateCarts);

module.exports = router;
