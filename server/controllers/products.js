const getsAllProductsStatic = async (req, res) => {
  res.status(200).json({ msg: "product testing route" });
};

const getsAllProducts = async (req, res) => {
  res.status(200).json({ msg: "product route" });
};

module.exports = {
  getsAllProducts,
  getsAllProductsStatic,
};
