import "dotenv/config";
import express from "express";
const app = express();
import cors from "cors";
import mongoose from "mongoose";
import authRouter from "./routes/authRouter.js";
import bodyParser from "body-parser";
const PORT = process.env.PORT;
const MONGODB_CONNECT = process.env.MONGODB_CONNECT;

app.use(cors());
app.use(bodyParser.json({ limit: "30mb" }));
app.use(bodyParser.urlencoded({ extended: false }));

mongoose
  .connect(MONGODB_CONNECT, { useUnifiedTopology: true, useNewUrlParser: true })
  .then(() => {
    console.log("Connected to DB");
    app.use("/api/auth", authRouter);
  })
  .catch((error) => console.log(error));

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
