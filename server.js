const express = require("express");
const data = express();

// middleware one

const middleware1 = function(req , res , next) {
	console.log("Middleware one")
	next()
}

// middleware two 

const middleware2 = function(req , res , next) {
	console.log(" Middleware two ")
	next()
}

data.use(middleware2);


data.get("/",middleware1, (req , res) => {
	res.send("<h1> MIDDLEWARE one in NODE JS </h1>")
})

data.get("/one",middleware1, (req , res) => {
	res.send("<h1> MIDDLEWARE one in NODE JS </h1>")
})

data.get("/two", (req , res) => {
	res.send("<h1> MIDDLEWARE two in NODE JS </h1>")
})
data.get("/three", (req , res) => {
	res.send("<h1> MIDDLEWARE two in NODE JS </h1>")
})

data.get("/four", (req , res) => {
	res.send("<h1> MIDDLEWARE two in NODE JS </h1>")
})
data.get("/five", (req , res) => {
	res.send("<h1> MIDDLEWARE two in NODE JS </h1>")
})


data.listen(5000);