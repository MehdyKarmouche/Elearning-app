var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/logouttest', function(req, res, next) {
  res.send('You are logged out');
});
router.get('/', function(req, res, next) {
  res.send('Incorrect cridentals');
});

router.post('/', function(req, res, next) {
  res.send("not Logged!")
});

module.exports = router;
