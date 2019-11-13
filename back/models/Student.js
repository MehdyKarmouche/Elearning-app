var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var StudentSchema = new Schema({
    firstname : {type : String , required : true , max:100},
    lastname : { type : String , required : true , max :100},
    email : { type : String , required : true , max :100},
    password: { type : String , required : true , max :100}
});

module.exports=mongoose.model('Student', StudentSchema);