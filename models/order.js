var mongoose = require('mongoose');
mongoose.connect('mongodb://heroku_app22201226:livkm1ljb359eh8582evn8022i@ds033709.mongolab.com:33709/heroku_app22201226' || 'localhost');

var orderSchema = mongoose.Schema({
	ingredientName: String,
	ingredientCost: Number,
});

var Order = mongoose.model('Order', orderSchema);
module.exports = Order;