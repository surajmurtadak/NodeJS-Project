const mongoose = require("mongoose");

//user data
const userSchema = new mongoose.Schema({
    name : String,
    password : String,
    gender : String,
    mobileNumber : Number,
    address : String,
    pincode: Number,
    role:String
});
const userCol = new mongoose.model("userCol",userSchema);

//offer data
const offerSchema = new mongoose.Schema({
    title: {
        type:String,
        required: true
    },
    restaurantId: {
        type:String,
        required: true
    },
    quantity : {
        type:Number,
        required: true
    },
    claimedCount: {
        type:Number,
        required: true
    },
    pointesPerOffer: {
        type:Number,
        required: true
    },
    name : {
        type:String,
        required: true
    }
});
const offer = new mongoose.model("offer",offerSchema);

module.exports = {userCol, offer};