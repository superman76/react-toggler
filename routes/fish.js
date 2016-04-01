var express = require('express');
var router = express.Router();
var Fish = require('../models/fish');

// this goes to api/fish
router.route('/')
	// GET ALL FISH FROM /api/fish
	.get(function(req, res){
		// res.json({message: "API hooked up correctly"});
		Fish.find(function(err, fish){
			if(err) {
				res.send(err)
			} else {
				res.json(fish)
			}
		})
	})
	// POST FISH to /api/fish
	.post(function(req, res){
		// CREATE NEW FISH
		var fish = new Fish({
			name: 		  req.body.name,
			color: 		  req.body.color,
			people_eater: req.body.people_eater,
			length: 	  req.body.length,
			img:   		  req.body.img,	
		})
		// save fish with node style callback
		fish.save(function(err, fish){
			if(err) {
				res.status(500).send("Something Broke!");
			} else {
				res.json(fish)
			}
		})
	});
// 
router.route('/one_fish/:fish_id')
	// GET ONE FISH FROM /API/FISH/oneFish/ID_NUMBER
	.get(function(req, res){
		Fish.findById(req.params.fish_id, function(err, fish){
			if(err){
				res.status(500).send("Something Broke!");
			} else {
				res.json(fish);
			}
		})
	});

// /api/fish/man_eater
router.route('/man_eater')
	.get(function(req, res){
		Fish.find({ people_eater: true }, function(err, fish){
			if(err){
				res.status(500).send("Something Ate a Human!");
			} else {
				res.json(fish);
			}
		});
	});

module.exports = router;


// router.route('/todos/:todo_id')
// // the colon above tell us it is a param
// 	.get(function(req, res){
// 		Todo.findById(req.params.todo_id, function(err, todo) {
// //params tells us to look in the url vs.  
// // function(err, todo) is the callback.  Is taking 2 parameter
// // 1st parameter is requesting the todos id from your url
// // the call back is the function and what to do with it.
// // If we didn't do the callback it would go find the todo but never
// // tell us.  Ordering coffee analogy - todo.findbyid is ordering 
// // coffee, req.params.todo_id is the type of coffee, function(err,
// // todo) is requesting that you tell me, the if/else is saying
// // to tell me if you screwed up, or if it is done.
// 			if(err){
// 				console.log(err);
// 			} else {
// 				res.json(todo);
// 			}
// 		})
// 	})


// 	.put(function(req, res){
// 		Todo.findById(req.params.todo_id, function(err, todo){
// 		  if(err){
// 		  	console.log(err)
// 		  } else {
// 		  	todo.name = req.body.name ? req.body.name : todo.name;
// 		  	todo.dueDate = req.body.dueDate ? req.body.dueDate : todo.dueDate;
// 		  	todo.description = req.body.description ? req.body.description : todo.description;
		  	
// 		  	todo.save(function(err){
// 		  		if(err){
// 		  			console.log(err)
// 		  		} else {
// 		  			res.json({title: "todo updated"});
// 		  		}
// 		  	})
// 		  }
// 		})
// 	})
// 	.delete(function(req, res){
// 		Todo.remove({_id: req.params.todo_id}, function(err, todo){
// 			if(err){
// 				console.log(err)
// 			} else {
// 				res.json({title: "todo deleted"});
// 			}
// 		})
// 	})


// // if we have an error then console log the error, or put out 
// // the new todo (res.json)
// 	.get(function(req, res) {
// 		Todo.find(function(err, todos){
// 			if(err) {
// 				console.log(err)
// 			} else {
// 				res.json(todos)
// 			}
// 		})
// 	});
// // returns the entire collection (all todos).  
// // 
// router.route('/todos/:todo_id')
// // the colon above tell us it is a param
// 	.get(function(req, res){
// 		Todo.findById(req.params.todo_id, function(err, todo) {
// //params tells us to look in the url vs.  
// // function(err, todo) is the callback.  Is taking 2 parameter
// // 1st parameter is requesting the todos id from your url
// // the call back is the function and what to do with it.
// // If we didn't do the callback it would go find the todo but never
// // tell us.  Ordering coffee analogy - todo.findbyid is ordering 
// // coffee, req.params.todo_id is the type of coffee, function(err,
// // todo) is requesting that you tell me, the if/else is saying
// // to tell me if you screwed up, or if it is done.
// 			if(err){
// 				console.log(err);
// 			} else {
// 				res.json(todo);
// 			}
// 		})
// 	})
// 	.put(function(req, res){
// 		Todo.findById(req.params.todo_id, function(err, todo){
// 		  if(err){
// 		  	console.log(err)
// 		  } else {
// 		  	todo.name = req.body.name ? req.body.name : todo.name;
// 		  	todo.dueDate = req.body.dueDate ? req.body.dueDate : todo.dueDate;
// 		  	todo.description = req.body.description ? req.body.description : todo.description;
		  	
// 		  	todo.save(function(err){
// 		  		if(err){
// 		  			console.log(err)
// 		  		} else {
// 		  			res.json({title: "todo updated"});
// 		  		}
// 		  	})
// 		  }
// 		})
// 	})
// 	.delete(function(req, res){
// 		Todo.remove({_id: req.params.todo_id}, function(err, todo){
// 			if(err){
// 				console.log(err)
// 			} else {
// 				res.json({title: "todo deleted"});
// 			}
// 		})
// 	})
















