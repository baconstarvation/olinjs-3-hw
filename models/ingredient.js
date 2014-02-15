var mongoose = require('mongoose');
mongoose.connect('mongodb://heroku_app22201226:livkm1ljb359eh8582evn8022i@ds033709.mongolab.com:33709/heroku_app22201226' || 'localhost');

var ingredientSchema = mongoose.Schema({
	ingredientName: String,
	ingredientCost: Number,
});

var Ingredient = mongoose.model('Ingredient', orderSchema);
module.exports = Ingredient;
