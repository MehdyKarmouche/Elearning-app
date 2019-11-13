var express = require('express');
var router = express.Router();
//var Signup = require('../test/src/pages');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});
router.get('/hamid', function(req, res, next) {
  res.send("You are logged in");
});
router.post('/', function(req, res, next) {
  res.send("walou");
});
module.exports = router;
