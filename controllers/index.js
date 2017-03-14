
var express= require('express');
var router = express.Router();
var controller = {}

controller.home     = home; 
module.exports = controller;

function home (req,res) {
	res.render('index');
}
