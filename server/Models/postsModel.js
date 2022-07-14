/**
 *   @author : Rushi Patel (B00886157)
 */

/**
 *   @description : a posts model to define the structure of the posts information.
 */

const mongoose = require("mongoose")

 const collection = mongoose.Schema({
    _id: { type: String },
    category: { type: String, required: true },
    date: { type: Date, required: true },
    description: { type: String, required: true },
    name: {type:String, required: true }
  });

  const postsModel = mongoose.model("postsModel", collection);
  
  module.exports = postsModel;