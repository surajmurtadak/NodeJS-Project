const express = require("express");
const { signUpController, loginController, getAllUserController, getUserByQueryController, getUserByParamController, getTwoUserController, uploadPictureController, upload, getProfilePicture } = require("../controllers/user");
const userRouter = express.Router();
const {verifyToken} = require("../middleware/verifyToken");

//user routes

userRouter.post("/signup",signUpController);

userRouter.post("/login",loginController);

userRouter.get("/alluser",verifyToken,getAllUserController);

userRouter.get("/userbyquery",verifyToken,getUserByQueryController);

userRouter.get("/userbyparam/:username",verifyToken,getUserByParamController);

userRouter.get("/gettwouser",verifyToken,getTwoUserController);

userRouter.put("/upload", verifyToken, upload.single("image"), uploadPictureController);
userRouter.get("/profilepicture",verifyToken,getProfilePicture);

module.exports = userRouter;