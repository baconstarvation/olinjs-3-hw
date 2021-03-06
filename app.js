var express = require('express')
	, routes = require('./routes')
	, ingredient = require('./routes/ingredient')
	, order = require('./routes/order')
	, http = require('http')
	, path = require('path')
	, mongoose = require('mongoose');

var app = express();

app.configure(function(){
	app.set('port', process.env.PORT || 3000);
	app.set('views', __dirname + '/views');
	app.set('view engine', 'jade');
	app.use(express.favicon());
	app.use(express.logger('dev'));
	app.use(express.bodyParser());
	app.use(express.methodOverride());
	app.use(app.router);
	app.use(express.static(path.join(__dirname, 'public')));
});

app.configure('development', function(){
	app.use(express.errorHandler());
});

// app.get('/', ?????);
// app.get('/ingredient', ?????)
// app.all('/ingredient/new', ingredient.createIngredient);
app.get('/order/new', order.createOrder);
app.get('/order', order.listOrder);
app.get('/ingredient/new', ingredient.createIngredient);
// app.post('/', ingredient.ingredient_post);
// app.post('/delete/:id', ingredient.ingredient_delete);

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
