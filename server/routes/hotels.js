const express = require("express");
const {
  createHotel,
  updateHotel,
  deleteHotel,
  getHotel,
  getHotels,
} = require("../controllers/hotel.js");
const { verifyAdmin } = require("../utils/verifyToken.js");

const router = express.Router();

//create POST
router.post("/", verifyAdmin, createHotel);

//update PUT
router.put("/:id", verifyAdmin, updateHotel);

//delete
router.delete("/:id", verifyAdmin, deleteHotel);

//get
router.get("/:id", getHotel);

//get all
router.get("/", getHotels);

module.exports = router;
