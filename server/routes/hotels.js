const express = require("express");
const Hotel = require("../models/Hotel");

const router = express.Router();
//create POST

router.post("/", async (req, res) => {
  const newHotel = new Hotel(req.body);
  try {
    const savedHotel = await newHotel.save();
    res.status(200).json(savedHotel);
  } catch (error) {
    res.status(500).json(error);
  }
});
//update PUT

router.put("/:id", async (req, res) => {
  try {
    const updatedHotel = await Hotel.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );

    console.log(updatedHotel);
    res.status(200).json(updatedHotel);
  } catch (error) {
    res.status(500).json(error);
  }
});

//delete
//get

router.get("/:id", async (req, res) => {
  try {
    const updatedHotel = await Hotel.findById(req.params.id);

    console.log(updatedHotel);
    res.status(200).json(updatedHotel);
  } catch (error) {
    res.status(500).json(error);
  }
});
//get all
module.exports = router;
