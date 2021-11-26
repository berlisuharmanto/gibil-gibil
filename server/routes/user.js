const express = require("express");
const router = express.Router();
const { login, dashboard, register, getUser } = require("../controllers/user");

const authMiddleware = require("../middleware/auth");

router.route("/dashboard").get(authMiddleware, dashboard);
router.route("/login").post(login);
router.route("/register").post(register);
router.route("/user").get(getUser);

module.exports = router;
