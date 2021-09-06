const express = require("express")
const app = express();
const Restaurant =  require ("./Restaurant.json")
const Hotel =  require ("./Hotel.json")
const hotelRouter = require("./Routers/hotelRouter")
const restaurantRouter = require("./Routers/restaurantRouter")
const PORT = 5000;
app.use(express.json());




app.use("/hotels", hotelRouter);
app.use("/restaurants", restaurantRouter)










app.listen(PORT, () => {
    console.log(`Port is listening on ${PORT}`);
})
