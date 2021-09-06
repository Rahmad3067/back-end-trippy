const express = require("express");
const restaurantControler = require('../Controlers/restaurantControler');
const router = express.Router();


router.get("/", restaurantControler.getAllRestaurants);
router.get("/:id", restaurantControler.singleRestaurant);
router.post("/", restaurantControler.addRestaurant);
router.put('/:id', restaurantControler.newRestaurantName)
router.delete('/:id', restaurantControler.deletedRestaurant);

