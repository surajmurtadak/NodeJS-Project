const mongoose = require("mongoose");

//user schema
const userSchema = new mongoose.Schema({
    name : {
        type:String,
        required: true
    },
    username : {
        type:String,
        unique : true,
        required: true
    },
    password : {
        type:String,
        required: true
    },
    gender : {
        type:String,
        required: true
    },
    mobileNumber : {
        type:Number,
        required: true
    },
    address : {
        type:String,
        required: true
    },
    pincode: {
        type:Number,
        required: true
    },
    role:{
        type:String,
        enum: ['employee', 'admin'],
        required: true
    }
});
module.exports.userCol = new mongoose.model("userCol",userSchema);

