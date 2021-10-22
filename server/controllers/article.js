const Article = require("../models/Article");

const getsArticle = async (req, res) => {
  const article = await Article.findById(req.params._id);

  if (article) {
    res.send({
      status: "success",
      message: "article found",
      data: article,
    });
  } else {
    res.send({
      status: "warning",
      message: "article not found",
    });
  }
};

const getsAllArticle = async (req, res) => {
  const products = await Products.find(req.query);
  res.status(200).json({ products });
};

const createArticle = async (req, res) => {
  const { title, img, head, paragraphs } = req.body;

  const newArticle = new Article({
    title,
    img,
    head,
    paragraphs,
  });

  await newArticle.save();
  return res.status(201).json({ msg: "masuk brah" });
};

module.exports = {
  getsArticle,
  getsAllArticle,
  createArticle,
};