const express = require("express");
const hotelControler = require('../Controlers/hotelControler');
const router = express.Router();


router.get("/", hotelControler.getAllHotels);
router.get("/:id", hotelControler.singleHotel);
router.post("/", hotelControler.addHotel);
router.put('/:id', hotelControler.newHotelName)
router.delete('/:id', hotelControler.deletedHotel);





module.exports = router;




// const id = req.params.id
//     const name = req.query.name
//     const index = Hotel.findIndex((hotel) => hotel.id === parseInt(id)); 
//     console.log(index);