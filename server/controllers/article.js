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
  const article = await Article.find(req.query);
  res.status(200).json({ article });
};

const createArticle = async (req, res) => {
  const { title, img, preview, article } = req.body;
  const featured = false;

  const newArticle = new Article({
    title,
    img,
    featured,
    preview,
    article,
  });

  await newArticle.save();
  return res.status(201).json({ msg: "masuk brah" });
};

module.exports = {
  getsArticle,
  getsAllArticle,
  createArticle,
};
