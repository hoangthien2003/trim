import bcrypt from "bcrypt";
import User from "../model/User.js";

export const getUser = (req, res) => {
  console.log(req.body);
  res.status(200);
};

export const createUser = async (req, res) => {
  const salt = await bcrypt.genSalt(10);
  const hashPassword = await bcrypt.hash(req.body.password, salt);

  const user = new User({
    name: req.body.name,
    email: req.body.email,
    password: hashPassword,
  });

  try {
    const newUser = await user.save();
    await res.send(newUser);
  } catch (err) {
    res.status(400).send(err);
  }
};

export const checkEmail = async (req, res) => {
  if (req.body.email === "") {
    res.send("Please type your email!");
    return;
  }
  const isExistEmail = await User.findOne({ email: req.body.email });
  if (isExistEmail) res.status(422).send("Email is exist.");
  else res.send("Sign up email successfully!");
};
