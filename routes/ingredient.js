
// reminder: create subsequent model and view.

var todos = [];

// routes
exports.createIngredient = function(req, res) {
	res.render('enter in an ingredient', {
		title: 'Create an Ingredient' {
		todos: todos
	});
};

exports.ingredient_post = function (req, res) {
	todos.push(req.body.todo);
	res.redirect('/');
};

exports.ingredient_delete = function (req, res) {
	todos.splice(parseInt(req.params.id), 1);
	res.redirect('/');
};


// var hodor = new Ingredient({ /* logic for creating an order */});

// error notification
// hodor.save(function (err) {
//	if (err)
//		return console.log('error. hodor dropped bran');
//	res.render('ingredient saved!');
// });


/*
var todos = [];

exports.index = function (req, res) {
  res.render('index', {
    title: 'Todo list',
    todos: todos
  });
};

exports.index_post = function (req, res) {
  todos.push(req.body.todo);
  res.redirect('/');
};

exports.index_delete = function (req, res) {
  todos.splice(parseInt(req.params.id), 1);
  res.redirect('/');
};
*/



/*
exports.newCat = function(req, res) {
	
	var ageArray = [23,5,3,6,11,14,15,18,9,8];
	var colorArray = ["blue","black","brown","purple","white","grey","gray","orange","red","magenta"];
	var nameArray = ["peyton","tom","bill","russell","troy","pete","jim","john","lovie","colin"];
	
	var ageArrayRandom = ageArray[Math.floor(Math.random() * ageArray.length)];
	var colorArrayRandom = colorArray[Math.floor(Math.random() * colorArray.length)];
	var nameArrayRandom = nameArray[Math.floor(Math.random() * nameArray.length)];
	
	var kitty = new Cats({ age: ageArrayRandom, color: colorArrayRandom, name: nameArrayRandom});
	kitty.save(function (err) {
		if (err)
			return console.log("error we couldn't save kitty");
		res.render('new', {title: 'Cat added', cats: kitty });
		//res.redirect('/cats');
	});
};
*/