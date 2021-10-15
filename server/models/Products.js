module.exports = (mongoose) => {
  const Products = mongoose.model(
    "products",
    mongoose.Schema({
      item_id: {
        type: String,
        unique: true,
        required: true,
      },
      item_name: {
        type: String,
        required: true,
      },
      item_variant: {
        type: String,
        required: true,
      },
      description: {
        type: String,
        required: true,
      },
      item_img: {
        url: {
          type: String,
          required: true,
        },
      },
      price: {
        type: Number,
        required: true,
      },
    })
  );
};
