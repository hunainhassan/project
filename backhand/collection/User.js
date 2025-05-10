let mongoose= require('mongoose');
 let user_collection = mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    gender:{
        type:String,
        required:true
    },
    age:{
        type:Number,
        required:true
    },
    contact:{
        type:Number,
        required:true
    },
    height:{
        type:Number,
        required:true
    },
    weight:{
        type:Number,
        required:true
    },
    bmi_index:{
        type:Number,
        required:true
    },
    ganretic_disease:{
        type:String,
        required:true
    },
    bp:{
        type:Number,
        required:true
    },
    suger:{
        type:Number,
        required:true
    },
    diabites:{
        type:Number,
        required:true
    },
    target_weight:{
        type:Number,
        required:true
    },
  
    record_at:{
        type:Date,
        default:Date.now
    }

 })

 module.exports = mongoose.model("User_tbl", user_collection)