require("dotenv").config();
require("express-async-errors");
const mongoose = require("mongoose");
const express = require("express");
const cors = require("cors");
const app = express();
const apiPort = 5000;

const connectDB = require("./lib/db/connect");
const userRouter = require("./routes/user");
const productsRouter = require("./routes/products");
const articleRouter = require("./routes/article");
const cartsRouter = require("./routes/cart");

app.use(cors());
app.use(express.json());

const errorMiddleware = require("./middleware/error-handler");
const notFoundMiddleware = require("./middleware/not-found");

app.get("/", (req, res) => {
  res.send('<h1>Store API</h1><a href="/api/v1/products/">products route</a>');
});

app.use("/api/v1", userRouter);
app.use("/api/v1/products", productsRouter);
app.use("/api/v1/article", articleRouter);
app.use("/api/v1/cart", cartsRouter);

app.use(notFoundMiddleware);
app.use(errorMiddleware);

if (process.env.NODE_ENV === "production") {
  app.use(express.static("build"));
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "build", "index.html"));
  });
}

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(apiPort, console.log(`Server running on port ${apiPort}...`));
  } catch (error) {
    console.log(error);
  }
};

start();
