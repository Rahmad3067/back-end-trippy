const Hotel = require('../Hotel.json');


const getAllHotels = (req, res) => {
    res.json({
        status: 'Ok',
        message: "All hotels",
        data: Hotel,
    })
};

const singleHotel = ( req, res ) => {
    const param = req.params.id;
    res.json({
        status: "Ok",
        message: "Hotel by id",
        data: Hotel[ param - 1],
    })
};

const addHotel = ( req, res ) => {
    const newHotel = req.body;
    console.log(newHotel);
    Hotel.push(newHotel);
    res.json({
        status: 'Ok',
        message: 'New Hotel Added...',
        data: Hotel,
    })
}

const newHotelName = ( req, res ) => {
    // First add the id that we added in the adress
    const id = req.params.id
    // Then we take the name from query parameters
    const name = req.query.name
    // After that we find the id and number of the Object we want to modify 
    const index = Hotel.findIndex((hotel) => hotel.id === parseInt(id));
    // Then we create an elemen that is our Hotel's id number
    const element = Hotel[index];
    // Then our element name is our query parameter's name that we want to add
    element.name = name;
    // And at last we add that name inside our Hotels name and replace the name 
    Hotel.splice(index, 1, element);

    
    console.log(element);
    res.json({
        status: "ok",
        message: "New Hotel's name",
        data: element,
    })
}

const deletedHotel = (req, res) => {
    const id = req.params.id
    // We can use filter to delete every hotel with the id that we enter in address and postman
    let newHotel = Hotel.filter(hotel => {
        return (
            // Here we see the Hotels without the hotel that we entered the id 
            hotel.id !== parseInt(id)
        )
    });
    console.log(newHotel)
    res.json({
        status: "ok",
        message: "Hotel deleted",
        data: newHotel,
    })
}
module.exports = {
	getAllHotels: getAllHotels,
    singleHotel: singleHotel,
    addHotel: addHotel,
    newHotelName: newHotelName,
    deletedHotel: deletedHotel,
	
};