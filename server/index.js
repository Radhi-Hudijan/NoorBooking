const express = require("express");
require("dotenv").config();
const mongoose = require("mongoose");
const authRoute = require("./routes/auth.js");
const usersRoute = require("./routes/users.js");
const hotelsRoute = require("./routes/hotels.js");
const roomsRoute = require("./routes/rooms.js");

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

//middleware
app.use(express.json());
app.use("/api/auth", authRoute);
app.use("/api/users", usersRoute);
app.use("/api/hotels", hotelsRoute);
app.use("/api/rooms", roomsRoute);

//connect to server
app.listen(process.env.PORT, () => {
  connect();
  console.log("Connected To Backend. ");
});
