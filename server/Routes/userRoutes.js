/**
 *   @author : Vivekkumar Patel (B00874162)
 *   @description : routes to map application http request.
 */


const express=require("express");

const authenticateUser=require("../Middleware/authenticate.js");
const {registerUser,verifyUserAccount,checkUserRegistered}=require("../Controller/userController.js");

const userRouter = express.Router();

//HTTP post request to register user map to registerUser function.
userRouter.post('/registerUser', registerUser);
userRouter.post('/verifyAccount', verifyUserAccount);
userRouter.post('/isUserRegistered', checkUserRegistered);


module.exports=userRouter;