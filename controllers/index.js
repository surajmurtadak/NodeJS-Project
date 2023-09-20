const {userCol, offer} = require("../models");

const getUserController = (req,res)=>{
    const {name,password,gender} = req.query;
    res.send(` <h1>User Data</h1> <h6> Name : ${name}</h6> <h6> password : ${password} </h6> <h6> gender : ${gender}</h6>`);
};

const postUserController = (req,res)=>{
    const newUser = new userCol(req.body);
    newUser.save();
    res.send(req.body);
};

const getTwoUserController = (req,res)=>{
    const userData = [
        {
            Name : "Suraj",
            MobileNumber: 9876543210,
            Gender: "Male"
        },
        {
            Name : "Pradip",
            MobileNumber: 9876543111,
            Gender: "Male"
        }
    ];
    res.send(userData);
};

const getOfferController = (req,res)=>{
    // const {name, password} = req.query;
    // userCol.findOne({name:name, password:password,role:"admin"}).then((data)=>{
    //     if(data){
    //         const newOffer = new offer(req.body);
    //         newOffer.save();
    //         res.send(newOffer);
    //     }
    // })
}

const updateOfferController = (req,res)=>{
    const {offerName,name,password} = req.query;
    userCol.findOne({name:name, password:password,role:"admin"}).then((data)=>{
        if(data){

            offer.updateOne({title:offerName},)
            res.send(newOffer);
        }
    })
}


module.exports = {
    getUserController,
    postUserController,
    getTwoUserController,
    getOfferController,
    updateOfferController

};