const express = require("express")
const app = express();
// const Restaurant =  require ("./Restaurant.json")
// const Hotel =  require ("./Hotel.json")
const hotelRouter = require("./Routers/hotelRouter")
const restaurantRouter = require("./Routers/restaurantRouter")
const dotenv = require("dotenv");
dotenv.config({
    path: "./config.env"
});
const mongoose = require("mongoose");

mongoose.connect(process.env.DB, {
    useNewUrlParser: true,
})
.then(() => {
    console.log("Connected to MongoDB !");
});
app.use(express.json());

app.use("/hotels", hotelRouter);
// app.use("/restaurants", restaurantRouter);


app.listen(process.env.PORT, () => {
	console.log("Server started, listening on port");
});
