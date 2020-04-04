var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var StorySchema = new Schema({
    title : {type : String , required : true , max:100},
    preview : { type : String , required : true , max :100},
    content : { type : String , required : true , max :100},
    questions: [
        {
          question: "",
          options: [
            
          ],
          answer: "Akbar"
        }
      ]
});

module.exports=mongoose.model('Story', StudentSchema);