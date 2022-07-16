/**
 *   @author : Vivekkumar Patel (B00874162) C\
 *   @description : Node js backend application main file which map http request with the associated 
 *    routes to process request.I have created base architecture of the application.
 */

const express = require("express");
const cors = require("cors");
const app = express();
const dbConnection=require("./DbConnection/dbconnection.js");
const userRouter=require("./Routes/userRoutes.js");
const postsRoutes=require("./Routes/postsRoutes.js")
const messagingRoutes=require("./Routes/messagingRoutes.js")
const PORT = process.env.PORT || 8080;


const reviewsRouter = require('./Routes/reviews');
const productsRouter = require('./Routes/products');




app.use(express.json());
app.use(cors());

dbConnection();

const appParent="/unitedrental/";

app.use(appParent + "userdetails", userRouter);
app.use(appParent, postsRoutes);
app.use(appParent, messagingRoutes);
app.use(appParent+'review', reviewsRouter);
app.use(appParent+'product', productsRouter);


app.get("/", (req, res) => {
    res.send("Application is up successfully");
  });

app.listen(PORT, () => {
    console.log("Backend running on port " + PORT);
  });