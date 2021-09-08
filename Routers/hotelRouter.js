const express = require("express");
const hotelControler = require('../Controlers/hotelControler');
const router = express.Router();

router.post("/", hotelControler.getAllHotels);
router.get("/:id", hotelControler.singleHotel);
router.get("/", hotelControler.showAllHotels);
router.put('/:id', hotelControler.newHotelName)
router.delete('/:id', hotelControler.deletedHotel);

module.exports = router;
