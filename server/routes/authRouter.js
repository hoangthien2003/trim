import "dotenv/config";
import express from "express";
// import { getUser, createUser } from "../controllers/auth.js";
const authRouter = express.Router();
import argon2 from 'argon2';
import jwt from 'jsonwebtoken';
import User from '../model/User.js';

// authRouter.get("/", getUser);
// // authRouter.post("/check-email", checkEmail);
// authRouter.post("/create-user", createUser);

authRouter.post('/check-email', async (req, res) => {

  const { email } = req.body;

  //check blank
  if (!email) {
    return res.status(400).json({ success: false, message: "Missing Email" });
  }

  //check valid email
  const validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };
  if (!validateEmail(email)) return res.status(400).json({ success: false, message: "Invalid Email" });

  try {
    //check for existing email
    const user = await User.findOne({ email })
    if (user) return res.status(400).json({ success: false, message: "Email already exists" })

    res.json({ success: true, message: "Check Email successfully" })
  } catch (err) {
    console.log(err);
    res.status(500).json({ success: false, message: "Internal Server Error" })
  }
});

authRouter.post('/check-login-info', async (req, res) => {
  const { email, password } = req.body;
  const validateEmail = (displayName) => {
    return String(displayName)
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      )
  };
  const validatePassword = (password) => {
    return String(password)
      .match(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/
      );
  };

  let isError = false;
  let messageError = {
    email: "",
    password: "",
  }

  if (!validateEmail(email)) { isError = true; messageError.email = "Email is not correct, try again." }
  if (!validatePassword(password)) { isError = true; messageError.password = "Password has at least 8 characters, 1 uppercase, 1 lowercase, 1 number and 1 special character" }
  if (!email) { isError = true; messageError.name = "Missing Email"; }
  if (!password) { isError = true; messageError.password = "Missing Password"; }

  if (isError) return res.status(400).json({ success: false, message: messageError })
  return res.json({ success: true, message: "Check info successfully" })
});

authRouter.post('/check-register-info', async (req, res) => {
  const { displayName, password, confirmPassword } = req.body;
  const validateName = (displayName) => {
    return String(displayName).length >= 2
  };
  const validatePassword = (password) => {
    return String(password)
      .match(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/
      );
  };

  let isError = false;
  let messageError = {
    name: "",
    password: "",
    confirmPassword: ""
  }

  if (confirmPassword !== password) { isError = true; messageError.confirmPassword = "The password confirmation does not match" }
  if (!validateName(displayName)) { isError = true; messageError.name = "The length must greater 2 character." }
  if (!validatePassword(password)) { isError = true; messageError.password = "Password has at least 8 characters, 1 uppercase, 1 lowercase, 1 number and 1 special character" }
  if (!validatePassword(confirmPassword)) { isError = true; messageError.confirmPassword = "Confirm Password has at least 8 characters, 1 uppercase, 1 lowercase, 1 number and 1 special character" }
  if (!displayName) { isError = true; messageError.name = "Missing Name"; }
  if (!password) { isError = true; messageError.password = "Missing Password"; }
  if (!confirmPassword) { isError = true; messageError.confirmPassword = "Missing Confirm Password" }

  if (isError) return res.status(400).json({ success: false, message: messageError })
  return res.json({ success: true, message: "Check info successfully" })
});

authRouter.post('/register', async (req, res) => {
  const { email, uid, displayName, photoURL, password } = req.body;
  console.log(uid)
  try {

    const hashedPassword = await argon2.hash(password)
    const newUser = new User({ email, uid, username: displayName, photoURL, password: hashedPassword })
    await newUser.save();

    //Return token
    const accessToken = jwt.sign({ userId: newUser._id }, process.env.ACCESS_TOKEN_SECRET)

    res.json({ success: true, message: "User created successfully", accessToken })
  } catch (err) {
    console.log(err);
    res.status(500).json({ success: false, message: "Internal Serverr Error" })
  }

});

authRouter.post("/login", async (req, res) => {
  const { email, password } = req.body;

  try {
    // check for existing user 
    const user = await User.findOne({ email })
    if (!user) return res.status(400).json({ success: false, message: { password: "Incorrect username and/or password " } });

    //username found
    const passwordValid = await argon2.verify(user.password, password);
    if (!passwordValid) return res.status(400).json({ success: false, message: { password: "Incorrect username and/or password " } });

    //All good at here 
    //Return token
    const accessToken = jwt.sign({ userId: user._id }, process.env.ACCESS_TOKEN_SECRET)

    res.json({ success: true, message: "User logged in successfully", accessToken })
  } catch (err) {
    console.log(err);
    res.status(500).json({ success: false, message: "Internal Server Error" })
  }

})

export default authRouter;
