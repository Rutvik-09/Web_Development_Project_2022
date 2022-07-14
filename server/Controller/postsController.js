/**
 *   @author : Rushi Patel (B00886157)
 *   @description: postsController handle business logic related to create post, edit post, delete post or view posts.
 */

const postsModel = require("../Models/postsModel");


const createPost= async (req, res)=>{

const postDetails = req.body.postData;
let postId = Math.random().toString().substring(2, 8);

let yourDate = new Date()
let todaysDate = yourDate.toISOString().split('T')[0]

try{

    await postsModel.create({
        _id: postId,
        category: postDetails.category,
        date: todaysDate,
        description: postDetails.description,
        fullname: postDetails.fullname
    });

    res.status(200).json({
        createPost: true,
        message: "Post created succesfully"
    });

    
} catch (err){
    console.log(err);

        res.status(400).json({
            createPost: false,
            message: "Error while creating post"
        });

}

}

const updatePost= async (req,res)=>{
    let yourDate = new Date()
let todaysDate = yourDate.toISOString().split('T')[0]
    try{
        const updatePostDetails = req.body.updatePost;
        let _id = updatePostDetails._id;
        let category = updatePostDetails.category;
        let date = todaysDate;
        let description = updatePostDetails.description;
        
        let doc = await postsModel.findOneAndUpdate({_id}, {category,date,description});

        res.status(200).json({
            updatePost: true,
            message: "Post updated succesfully"
        });
    } catch (err){
        console.log(err);

        res.status(400).json({
            userRegister: false,
            message: "Error while updating post"
        });
    }
}

const deletePost= async (req,res)=>{
    let _id = req.body._id;

    try{
    await postsModel.deleteOne({_id:_id});

    res.status(200).json({
        updatePost: true,
        message: "Post deleted succesfully"
    });
    } catch (err){
        console.log(err);

        res.status(400).json({
            deletePost: false,
            message: "Error while deleting post"
        });
    }
    
}

const viewPosts= async (req,res)=>{

    try{
        const filter = {};
        const all = await postsModel.find(filter);

        res.status(200).json({
            viewPosts: true,
            data: all
        });

    } catch (err){
        console.log(err);

        res.status(400).json({
            deletePost: false,
            message: "Error while deleting post"
        });
    }

    
}


module.exports={createPost,updatePost,deletePost,viewPosts};