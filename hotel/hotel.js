const mongoose = require("mongoose");

const hotelSchema = new mongoose.Schema({
    name: String,
    address: String,
    city: String,
    country : String,
    starts : Number,
    hasSpa: Boolean,
    hasPool: Boolean,
    priceCategory: Number,
});
const Hotel = mongoose.model("hotel", hotelSchema);


module.exports= Hotel;