const mongoose = require('mongoose');

//offer schema
const offerSchema = new mongoose.Schema({
    offerId: {
        type:String,
        unique: true,
        required: true
    },
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
    pointsPerOffer: {
        type:Number,
        required: true
    },
    name : {
        type:String,
        required: true
    }
});
module.exports.offer = new mongoose.model("offer",offerSchema);
