//Code has been refered form this url https://nodemailer.com/about/

/**
 *   @author : Vasu Gamdha (B00874162)
 *   @description:Set email configuration to send an email from gmail account
 */

const emailConfig = require("nodemailer");

const emailSender = emailConfig.createTransport({
    service: "gmail",
    auth: {
      user: "patelvivek221996@gmail.com",
      pass: "",
    },
  });

  module.exports=emailSender;