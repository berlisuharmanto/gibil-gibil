const User = require("../models/User");
const jwt = require("jsonwebtoken");
const loginAPIError = require("../errors/loginErrors");

const login = async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    throw new loginAPIError("Please provide email and password", 400);
  }

  const user = await User.findOne({ email, password });

  if (user) {
    const token = jwt.sign({ email }, process.env.JWT_SECRET, {
      expiresIn: "1d",
    });

    user.token = token;
    res.status(200).json({ name: user.name, id: user.id, token: token });
  } else {
    res.status(400).json("Invalid user");
  }
};

const register = async (req, res) => {
  const { email, password, name, address } = req.body;

  if (!(email && password && name && address)) {
    res.status(400).json({ msg: "all fields are required" });
  }

  const checkIdentical = async (condition, value) => {
    const userExist = await User.findOne({ [condition]: value });

    if (userExist) {
      return true;
    }
    return false;
  };

  const userExist = await checkIdentical("email", email);

  if (userExist) {
    throw new loginAPIError("User already exist", 409);
  }

  const newUser = new User({
    email: email.toLowerCase(),
    password,
    name,
    address,
  });

  const token = jwt.sign({ email }, process.env.JWT_SECRET, {
    expiresIn: "1d",
  });

  newUser.token = token;

  await newUser.save();

  return res
    .status(201)
    .json({ name: newUser.name, id: newUser.id, token: token });
};

const dashboard = async (req, res) => {
  console.log(req.user);

  const luckyNumber = Math.floor(Math.random() * 100);
  res.status(200).json({
    msg: `Hello there ${req.user.email}`,
    secret: `Here is your number: ${luckyNumber}`,
  });
};

const getUser = async (req, res) => {
  const user = await User.find(req.query);

  if (!user) {
    throw new loginAPIError("User not found", 404);
  }

  res.status(200).json(user);
};

module.exports = {
  login,
  dashboard,
  register,
  getUser,
};
