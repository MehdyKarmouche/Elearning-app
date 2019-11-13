var express = require('express');
var router = express.Router();
const { check } = require('express-validator');
const { validationResult } = require('express-validator');
const bcrypt = require('bcryptjs');
var Student = require('../models/Student');

router.get('/', function(req, res, next) {
    res.send('wahya');
});

router.post('/',[
    check('firstname').isLength({min:2}).withMessage('The first name must be entered'),
    check('lastname').isLength({min:2}).withMessage('The last name must be entered'),
    check('email').isEmail().withMessage('The username should be formatted as an email'),
    check('password').isLength({min:6}).withMessage('Password should be at least 6 characters'),
    check('password2').isLength({min:2}).withMessage('Re enter the password')
    ],
    (req,res,next)=>{
        console.log(req.body);
        errma = validationResult(req);
        if (!errma.isEmpty()) {
            console.log("errs is not empty");
          return res.status(422).json({ errma: errma.array()});
        }
        else{
            let errors=[];
            firstname = req.body.firstname;
            lastname = req.body.lastname;
            email = req.body.email;
            password = req.body.password;
            password2 = req.body.password2;
            console.log(firstname);
            if(password !=password2){
                errors.push({msg:'password dont match'});
            }
            else{
                Student.findOne({email:email}).then(user =>{
                    if(user){
                        errors.push({msg:'Student already exists'});
                        console.log('passwords dont match');
                    }
                    else{
                        const newStudent = Student({
                            firstname,
                            lastname,
                            email,
                            password
                        });
                        console.log("Student created!");

                        bcrypt.genSalt(10, (err, salt) => {
                            bcrypt.hash(newStudent.password, salt, (err, hash) => {
                              if (err) throw err;
                              newStudent.password = hash;
                              newStudent
                                .save()
                                .then(user => {
                                  res.redirect('/index');
                                })
                                .catch(err => console.log(err));
                            });
                          });

                    }
                })

            }
        }
        

    }

);
module.exports = router;
