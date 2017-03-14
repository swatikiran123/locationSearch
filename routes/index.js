var express = require('express');
var router = express.Router();
/*home page*/
var main 							= require('../controllers/index');

router.get('/', main.home);
module.exports =router;