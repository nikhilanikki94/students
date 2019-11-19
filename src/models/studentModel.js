var mongoose=require('mongoose');
 var studentModel=mongoose.model('student',{        
    sname:String,
    admno:Number,
    rollno:Number,
    college:String
})
module.exports={studentModel}