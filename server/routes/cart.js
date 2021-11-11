const express = require("express");
const router = express.Router();

const {
  getsAllCarts,
  addToCarts,
  deleteCarts,
  updateCarts,
} = require("../controllers/cart");

router.route("/").get(getsAllCarts);
router.route("/add").post(addToCarts);
router.route("/delete").delete(deleteCarts);
router.route("/update").put(updateCarts);

module.exports = router;
