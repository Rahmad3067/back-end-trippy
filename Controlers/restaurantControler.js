const restaurant = require("../Restaurant.json");



const getAllRestaurants = (req, res) => {
    res.json({
        status: 'Ok',
        message: "All Restaurants",
        data: restaurant,
    })
};


const singleRestaurant = ( req, res ) => {
    const param = req.params.id;
    res.json({
        status: "Ok",
        message: "Restaurant by id",
        data: restaurant[ param - 1],
    })
};


const addRestaurant = ( req, res ) => {
    const newRestaurant = req.body;
    console.log(newRestaurant);
    Hotel.push(newRestaurant);
    res.json({
        status: 'Ok',
        message: 'New Restaurant Added...',
        data: restaurant,
    })
};
const newRestaurantName = ( req, res ) => {
    const id = req.params.id
    const name = req.query.name
    const index = restaurant.findIndex((Restaurant) => Restaurant.id === parseInt(id));
    const element = restaurant[index];
    element.name = name;
    restaurant.splice(index, 1, element);

    
    console.log(element);
    res.json({
        status: "ok",
        message: "New Restaurant's name",
        data: element,
    })
};

const deletedRestaurant = (req, res) => {
    const id = req.params.id
    let newBigRestaurant = restaurant.filter(Restaurant => {
        return (
            Restaurant.id !== parseInt(id)
        )
    });
    console.log(newBigRestaurant)
    res.json({
        status: "ok",
        message: "Restaurant deleted",
        data: newBigRestaurant,
    })
}



module.exports = {
	getAllRestaurants: getAllRestaurants,
    singleRestaurant: singleRestaurant,
    addRestaurant: addRestaurant,
    newRestaurantName: newRestaurantName,
    deletedRestaurant: deletedRestaurant,
	
};