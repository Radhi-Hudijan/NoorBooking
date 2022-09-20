const express = require("express");
require("dotenv").config();
const mongoose = require("mongoose");

const app = express();

//connect to DB
const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGODB);
    console.log("Connected To MongoDB.");
  } catch (error) {
    throw error;
  }
};

mongoose.connection.on("disconnected", () => {
  console.log("mongoDB disconnected");
});

mongoose.connection.on("connected", () => {
  console.log("mongoDB connected");
});

//connect to server
app.listen(process.env.PORT, () => {
  connect();
  console.log("Connected To Backend. ");
});
