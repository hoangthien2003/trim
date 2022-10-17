require("dotenv").config()
const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
const authRouter = require("./routes/authRouter.js");
const projectRouter = require("./routes/projectRouter.js");
// const bodyParser = require("body-parser");
const PORT = process.env.PORT;
const MONGODB_CONNECT = process.env.MONGODB_CONNECT;

app.use(cors());
// app.use(bodyParser.json({ limit: "30mb" }));
// app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.json())

mongoose
  .connect(MONGODB_CONNECT, { useUnifiedTopology: true, useNewUrlParser: true })
  .then(() => {
    console.log("Connected to DB");
    app.use("/api/auth", authRouter);
    app.use("/api/project", projectRouter);
  })
  .catch((error) => console.log(error));

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
