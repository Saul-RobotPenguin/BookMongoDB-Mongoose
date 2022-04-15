require("dotenv").config;
const express = require("express");
const mongoose = require("mongoose");
const bookRouter = require("../routes/bookRoutes");

const app = express();

app.use(express.json());

mongoose.connect(process.env.MONGO_DB_CLUSTER, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.use(bookRouter);
app.listen(3000, () => {
  console.log("Server is running");
});

const db = mongoose.connection;
module.exports = db;
