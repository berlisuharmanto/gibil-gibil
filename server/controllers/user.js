const User = require("../models/User");
const jwt = require("jsonwebtoken");
const loginAPIError = require("../errors/loginErrors");

const login = async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    throw new loginAPIError("Please provide email and password", 400);
  }

  const token = jwt.sign(email, process.env.JWT_SECRET, {
    expiresIn: "1d",
  });
  res.status(200).json({ msg: "user created", token });
};

const register = async (req, res) => {
  const { email, password, name, address } = req.body;

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
    email,
    password,
    name,
    address,
  });
  await newUser.save();
  return res.status(201).json({ msg: "Register Success" });
};

const dashboard = async (req, res) => {
  console.log(req.user);

  const luckyNumber = Math.floor(Math.random() * 100);
  res.status(200).json({
    msg: `Hello there ${req.user.email}`,
    secret: `Here is your number: ${luckyNumber}`,
  });
};

module.exports = {
  login,
  dashboard,
  register,
};
