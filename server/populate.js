require("dotenv").config();

const connectDB = require("./lib/db/connect");

const Product = require("./models/Products");

const jsonProduct = require("./products.json");

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    process.exit(0);
    console.log("Success");
  } catch (error) {
    console.log(error);
    rocess.exit(1);
  }
};

start();
