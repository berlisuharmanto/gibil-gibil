const mongoose = require("mongoose");

const articleSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, "name is required"],
  },
  img: [
    {
      type: String,
    },
  ],
  head: [
    {
      type: String,
    },
  ],
  paragraphs: [
    {
      type: String,
    },
  ],
});

module.exports = mongoose.model("Article", articleSchema);
