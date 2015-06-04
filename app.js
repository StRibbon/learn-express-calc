//bring in the express module
var express = require("express");
//call the express function, return an object
var app = express();

app.set("view engine", "ejs");
//root
app.get("/", function(req,res){
//client requests, server responds 
  // res.send("HELLO WORLD");
  var name = "Stephen";
  res.render("index", {personName:name});
});

app.get("/person/:name", function(req,res){
  var person = req.params.name;
  res.render("person", {specificPerson:person});
});

app.get("/add/:num1/:num2", function(req,res){
	var sum = Number(req.params.num1) + Number(req.params.num2);
	res.render("math", {number:sum});
});
app.get("/sub/:num1/:num2", function(req,res){
	var sum = Number(req.params.num1) - Number(req.params.num2);
	res.render("math", {number:sum});
});
app.get("/mult/:num1/:num2", function(req,res){
	var sum = Number(req.params.num1) * Number(req.params.num2);
	res.render("math", {number:sum});
});
app.get("/div/:num1/:num2", function(req,res){
	var sum = Number(req.params.num1) / Number(req.params.num2);
	res.render("math", {number:sum});
});
// localhost:3000/ listening to this port
app.listen(3000, function(){
  console.log("Server starting on port 3000");
});