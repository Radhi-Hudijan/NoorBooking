const express = require("express");
const { verifyAdmin } = require("../utils/verifyToken.js");
const {
  createRoom,
  updateRoom,
  deleteRoom,
  getRoom,
  getRooms,
} = require("../controllers/room.js");

const router = express.Router();

//create POST
router.post("/:hotelId", verifyAdmin, createRoom);

//update PUT
router.put("/:id", verifyAdmin, updateRoom);

//delete
router.delete("/:id/:hotelId", verifyAdmin, deleteRoom);

//get
router.get("/:id", getRoom);

//get all
router.get("/", getRooms);

module.exports = router;
