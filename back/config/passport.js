const LocalStrategy = require('passport-local').Strategy;
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

// Load Student model
const Student = require('../models/Student');


module.exports = function(passport) {
  console.log("export accessed");
  
  //var isOwner = false;
  passport.use('client-local',
    new LocalStrategy({usernameField: 'email',passwordField: 'password' }, (email, password, done) => {
        console.log('Student-local accessed');
        
      // Match user
      Student.findOne({
        email: email
      }).then(user => {
        if (!user) {
          console.log('Student not found in the db');
        
          return done(null, false, { message: 'This email is not registered' });
        }
         isStudent=true;
        // Match password
        bcrypt.compare(password, user.password, (err, isMatch) => {
          if (err) throw err;
          if (isMatch) {
            console.log(" Student logged in");
            return done(null, user);
          } else {
            return done(null, false, { message: 'Password incorrect' });
          }
        });
      });
    })
  );


passport.serializeUser(function(user, done) {
  done(null, user.id);
});

passport.deserializeUser(function(id, done) {
      Student.findById(id, function(err, user) {
        done(err, user);
      });
    
  });

}