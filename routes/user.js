const express = require("express");
const { signUpController, loginController, getAllUserController, getUserByQueryController, getUserByParamController, getTwoUserController } = require("../controllers/user");
const userRouter = express.Router();
const {verifyToken} = require("../middleware/verifyToken");

//user routes

userRouter.post("/signup",signUpController);

userRouter.post("/login",loginController);

userRouter.get("/alluser",verifyToken,getAllUserController);

userRouter.get("/userbyquery",verifyToken,getUserByQueryController);

userRouter.get("/userbyparam/:username",verifyToken,getUserByParamController);

userRouter.get("/gettwouser",verifyToken,getTwoUserController);

module.exports = userRouter;