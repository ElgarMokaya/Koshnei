const express = require("express");
const app = express();
const helmet = require("helmet");
const morgan = require("morgan");
const mongoose = require("mongoose");
const activityRouter = require("./src/routes/activity.routes");
const dotenv = require("dotenv");
dotenv.config();
require("./src/db")
app.use(express.json());
app.use(helmet());
app.use(morgan("dev"));
app.use("/api/activity", activityRouter);

app.listen("5000", () => {
  console.log(`Server running successfuly`);
});
