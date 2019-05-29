var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/Restaurants', {useFindAndModify: false});

var ReviewSchema = new mongoose.Schema({
    name: {type: String, required: true, minlength: 3},
    stars: {type: Number, required: true, min:1, max:5 },
    review : {type: String, required: true, minlength: 3}
})

var RestaurantSchema = new mongoose.Schema({
    name: {type: String, required: true, minlength:3},
    cuisine: {type: String, required: true, minlength:3},
    reviews : {type: [ReviewSchema]}
})

mongoose.model('Restaurant', RestaurantSchema);
var Restaurant = mongoose.model('Restaurant');

module.exports = Restaurant;