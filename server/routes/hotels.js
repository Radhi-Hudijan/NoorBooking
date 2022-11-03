const express = require("express");
const {
  createHotel,
  updateHotel,
  deleteHotel,
  getHotel,
  getHotels,
} = require("../controllers/hotel.js");

const router = express.Router();

//create POST
router.post("/", createHotel);

//update PUT
router.put("/:id", updateHotel);

//delete
router.delete("/:id", deleteHotel);

//get
router.get("/:id", getHotel);

//get all
router.get("/", getHotels);

module.exports = router;
