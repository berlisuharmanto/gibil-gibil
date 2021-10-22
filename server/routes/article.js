const express = require("express");
const router = express.Router();

const {
  getsAllArticle,
  getsArticle,
  createArticle,
} = require("../controllers/article");

router.route("/").get(getsAllArticle);
router.route("/:_id").get(getsArticle);

router.route("/").post(createArticle);

module.exports = router;
