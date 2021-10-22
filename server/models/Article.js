const mongoose = require("mongoose");

const articleSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, "name is required"],
  },
  img: [
    {
      type: String,
      required: [true, "img is required"],
    },
  ],
  head: [
    {
      type: String,
      required: [true, "head is required"],
    },
  ],
  paragraphs: [
    {
      type: String,
      required: [true, "paragraphs are required"],
    },
  ],
});

module.exports = mongoose.model("Article", articleSchema);
