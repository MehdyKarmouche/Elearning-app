var express = require('express');
var router = express.Router();
const { check } = require('express-validator');
const { validationResult } = require('express-validator');
const bcrypt = require('bcryptjs');
var passport = require('passport');
var Student = require('../models/Student');
const { ensureAuthenticated } = require('../config/secureContent');
var email;

router.post('/', (req, res, next) => {
  email = req.body.email;
  console.log("post accessed");
  passport.authenticate('client-local', {
    successRedirect: 'http://localhost:8100/dash',
    failureRedirect: '/index'
  })(req, res, next);
});

router.get('/logged',ensureAuthenticated, (req, res, next)=>{
  res.render('index',{email:email});

});

router.get('/logout', (req, res) => {
  req.logout();
  res.redirect('http://localhost:8100/login');
});


module.exports = router;