const jwt = require('jsonwebtoken');
const secret_key = process.env.SECRET_KEY;
module.exports.verifyToken = (req,res,next) =>{

    const token = req.headers.authorization;

    if(token){

        jwt.verify(token, secret_key, (err,authData)=>{

            if(err){
                res.status(401).json({message:"Invalid Token"});
            }
            else{
                req.authData = authData;
                next();
            }
        })
    }
    else{
        res.status(401).json({message: "Invalid Token"})
    }

}