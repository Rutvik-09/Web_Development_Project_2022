/**
 *   @author : Rushi Patel (B00886157)
 *   @description: messagingController handles business logic related to sending email to the owner of the product.
 */

 const composeEmail = require("../mail/notificationMail.json");
 const emailSender = require("../mail/emailConfig");
 

const sendEmailToOwner= async (req, res)=>{
    const emailData = req.body.data;
    //emailData= toEmail,ccEmail,Subject,Description

    try{
        composeEmail.to = emailData.toEmail;
        composeEmail.cc = emailData.ccEmail;
        composeEmail.subject = emailData.subject;
        composeEmail.html = emailData.description;

        emailSender.sendMail(composeEmail, function (err, info) {

            if (err) {

                console.log(err);
                res.status(400).json({
                    sendMessage: false,
                    message: "Error while sending message to owner"
                });
            } else {

                res.status(200).json({
                    sendMessage: true,
                    message: "Email sent sucessfully to the owner"
                });
            }

        });



    } catch (err){
        console.log(err);

        res.status(400).json({
            sendMessage: false,
            message: "Error while sending message to the owner"
        });
    }
}


module.exports={sendEmailToOwner};