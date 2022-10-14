import express from "express";
import { getUser, checkEmail, createUser } from "../controllers/auth.js";
const authRouter = express.Router();

authRouter.get("/", getUser);
authRouter.post("/check-email", checkEmail);
authRouter.post("/create-user", createUser);

export default authRouter;
