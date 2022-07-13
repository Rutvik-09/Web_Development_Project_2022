/**
 *   @author : Vivekkumar Patel (B00874162)
 *   @description: userController handle business logic related to verify user account, save user details 
 *                  and preference 
 *   https://docs.nestjs.com/security/encryption-and-hashing
 * https://www.loginradius.com/blog/engineering/hashing-user-passwords-using-bcryptjs/
 */

const userModel = require("../Models/userModel.js");
const json = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const composeEmail = require("../mail/mailFormat.json");
const emailSender = require("../mail/emailConfig");

const registerUser = async (req, res) => {

    const userDetails = req.body.userdata;

    console.log(userDetails);

    //business logic comes here to register user
    let userid = Math.random().toString().substring(2, 8);
    const payload=userid+userDetails.email;

    const verifiCode = json.sign({
        payload
    }, "unitedrental");

    try {

        await userModel.create({
            useId: userid,
            firstName: userDetails.firstName,
            lastName: userDetails.lastName,
            emailAddress: userDetails.email,
            mobileNo: userDetails.mobileNo,
            pswd: userDetails.pswd,
            address: userDetails.address,
            isAccountVerified: false,
            codeToVerify: verifiCode,
            userPreference: "",
            profileImage: null
        });


        //Send verification email 
        composeEmail.from = "unitedrental@gmail.com";
        composeEmail.to = userDetails.email;
        composeEmail.subject = "United Rental Account Verification";
        composeEmail.html = `Your account registered succesfully.Please verify your email using this link <a href=http://localhost:3000/verifyaccount/${verifiCode}>Click here</a>`
       
        console.log(composeEmail);
       
       //Send an email
        emailSender.sendMail(composeEmail, function (err, info) {

            if (err) {

                console.log(err);
                res.status(400).json({
                    userRegister: true,
                    message: "Error while sending verification email"
                });
            } else {

                res.status(200).json({
                    userRegister: true,
                    message: "User registered succesfully"
                });
            }

        });


    } catch (err) {

        console.log(err);

        res.status(400).json({
            userRegister: false,
            message: "Error while registering user"
        });
    }

};


const checkUserRegistered = async (req, res) => {

    const emailAddress = req.body.email;

    const isUserExist = await userModel.findOne({
        emailAddress:emailAddress
    });

    console.log("Is user exist");
    console.log(isUserExist);

    if (isUserExist) {
        
        console.log("inside if");    
        res.status(200).json({
            userexist: true
        });

        

    } else {
        console.log("inside else");    
        res.status(200).json({
            userexist: false
        });


    }
};




const verifyUserAccount = async (req, res) => {

    //business logic comes here to verify user account
    const dataToBeVerified = req.body.verificationData;

    
    const isUserExist = await userModel.findOne({
        emailAddress:dataToBeVerified.email,
        codeToVerify:dataToBeVerified.tokenString
    });

    

    if(isUserExist){
        console.log("Inside if");
        isUserExist.isAccountVerified=true;
        await isUserExist.save();
        res.status(200).json({
            userVerified: true,
            message:"User account verified succesfully."
        });

    }else{
        res.status(200).json({
            userVerified: false,
            message:"User email does not exist for given token"
        });
    }

};


module.exports = {
    registerUser,
    verifyUserAccount,
    checkUserRegistered
};