const Carts = require("../models/Carts");

const getsAllCarts = async (req, res) => {
  const carts = await Carts.find(req.query);
  res.status(200).json({ carts });
};

module.exports = {
  getsAllCarts,
};
