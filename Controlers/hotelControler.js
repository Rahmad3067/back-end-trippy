// const Hotel = require('../Hotel.json');
const express = require('express');
const Hotel = require("../hotel/hotel")
const app = express();
// const getAllHotels = (req, res) => {
//     res.json({
//         status: 'Ok',
//         message: "All hotels",
//         data: Hotel,
//     })
// };

const getAllHotels = async (req, res) => {
    await Hotel.create(req.body);
    res.json({
        message:"Heroes Created and Added...",
    })
}




const singleHotel = async (req, res) => {
    const oneHotel = await Hotel.findById(req.params.id);
    res.json({
        status: 'Ok',
        messgage: "Hotel By Id",
        data: oneHotel.name
    })
}
const showAllHotels = async (req, res) => {
    const allHotels = await Hotel.find();
    res.json({
        message: "All Existing Hotels",
        data: allHotels,
    })
}

const newHotelName = async ( req, res) => {
    const id = req.params.id
    const name = req.query.name
    // For updating a name only in one object we can use the findOneAndUpdate method and the first paramater is to seatrch what we want to change and second one is the element we want to change
    const index = await Hotel.findOneAndUpdate({_id : id}, {name : name});
    res.json({
        message: "Name changed",
        date: index,
    })};
// const newHotelName = ( req, res ) => {
    // First add the id that we added in the adress
    // const id = req.params.id
    // Then we take the name from query parameters
    // const name = req.query.name
    // After that we find the id and number of the Object we want to modify 
    // const index = Hotel.findIndex((hotel) => hotel.id === parseInt(id));
    // Then we create an elemen that is our Hotel's id number
    // const element = Hotel[index];
    // Then our element name is our query parameter's name that we want to add
    // element.name = name;
    // And at last we add that name inside our Hotels name and replace the name 
    // Hotel.splice(index, 1, element);

    
//     console.log(element);
//     res.json({
//         status: "ok",
//         message: "New Hotel's name",
//         data: element,
//     })
// }

const deletedHotel = async( req, res ) => {
    const id = req.params.id;
    const bigHotels = await Hotel.findByIdAndDelete(id)
    res.json({
        message: "Hotel Deleted",
        data: bigHotels,
    })
}
// We can use filter to delete every hotel with the id that we enter in address and postman
// Here we see the Hotels without the hotel that we entered the id 
// const deletedHotel = (req, res) => {
//     const id = req.params.id
//     let newHotel = Hotel.filter(hotel => {
//         return (
//             hotel.id !== parseInt(id)
//         )
//     });
//     console.log(newHotel)
//     res.json({
//         status: "ok",
//         message: "Hotel deleted",
//         data: newHotel,
//     })
// };



module.exports = {
	getAllHotels: getAllHotels,
    singleHotel: singleHotel,
    showAllHotels: showAllHotels,
    newHotelName: newHotelName,
    deletedHotel: deletedHotel,
	
};