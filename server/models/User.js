module.exports = (mongoose) => {
  const User = mongoose.model(
    "user",
    mongoose.Schema({
      email: {
        type: String,
        unique: true,
        required: true,
      },
      password: {
        type: String,
        required: true,
      },
      name: {
        type: String,
        required: true,
      },
      phoneNumber: {
        type: Number,
        required: true,
      },
      address: {
        type: String,
        required: true,
      },
    })
  );
};
