const Carts = require("../models/Carts");

const getsAllCarts = async (req, res) => {
  const carts = await Carts.find(req.query);
  res.status(200).json({ carts });
};

const addToCarts = async (req, res) => {
  const { userId, products } = req.body;
};

module.exports = {
  getsAllCarts,
};
