const {userCol} = require("../models/user");
const bcrypt = require('bcrypt');
const jwt = require("jsonwebtoken");
require("dotenv").config();
const saltRounds = Number(process.env.SALT_ROUNDS);

//API for signup route 

module.exports.signUpController = async(req,res) =>{

    const { name, username, password, gender, mobileNumber, address, pincode, role } = req.body;

    const existedUser = await userCol.findOne({username});

    if(!existedUser){

        bcrypt.hash(password,saltRounds,(err,hashedPass)=>{

            if(err){
                res.send(err);
            }
            else{
                const newUser = new userCol({
                    name,
                    username,
                    password:hashedPass,
                    gender,
                    mobileNumber,
                    address,
                    pincode,
                    role
                });

                newUser.save()
                .then((data)=>{
                    res.json({
                        message:"successfully Registered",
                        data
                    });
                })
                .catch((err)=>{
                    res.status(400).send(`${err}`);
                });
    
            }
        });

    }
    else{
        res.status(409).json({ message: "The username is already associated with an existing account, use different username."});
    }
}

// API to login user.

module.exports.loginController = async(req,res) =>{

    const {username, password} = req.body;

    const user = await userCol.findOne({username});

    if(user){

        bcrypt
        .compare(password,user.password)
        .then((result)=>{

            if(result){
                const payload = {...user};
                const secret_key = process.env.SECRET_KEY;
                const token = jwt.sign(payload,secret_key,{expiresIn : '1d'});

                res.json({success: true, token: token});
            }
            else{
                return res.status(401).json({message: " Incorrect password"});
            }
        })
        .catch((error)=>{
            res.status(401).json({error: `${error}`});
        });
    }
}

// get all user 

module.exports.getAllUserController = async(req,res) =>{

    const allUser = await userCol.find({});
    res.json({allUser});
}



// GET API to read user by query string.

module.exports.getUserByQueryController = async(req,res)=>{
    const {username} = req.query;
    const user = await userCol.findOne({username});
    if(user){
        res.json({
            user:user.name,
            password: user.password,
            gender: user.gender
        });
    }
    else{
        res.status(404).json({message:"User not found"});
    }
    
};

// POST API to read user details from params.

module.exports.getUserByParamController = async(req,res)=>{
    const {username} = req.params;
    const user = await userCol.findOne({username});
    if(user){
        res.send(user);
    }
    else{
        res.status(404).json({message: "user not foud"});
    }
};

// API to read user details from query string.

module.exports.postUserController = (req,res)=>{
    const {username} = req.query;
    const user = userCol.findOne({name:userName});
    if(user){
        res.send(user);
    }
    else{
        res.status("404").json({message: "user not foud"});
    }
};

//Create a GET API which will be having an array with 2 users details.

module.exports.getTwoUserController = (req,res)=>{
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

