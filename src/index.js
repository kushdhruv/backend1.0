import dotenv from "dotenv" 
import connectDB from "../db/index.js"

//THIS WILL ALLOW PORT TO EVERY FILE
dotenv.config({
    path:'../env'
})

connectDB()








//ONE APPROACH TO CONNECT WITH DATABASE IS THIS.........BUT IT POLLUTES index.js 
//SO WE WILL WRITE THE CODE OT CONNECT WITH DB IN OTHER FOLDER AND THEN IMPORT IT HERE.........
/*
import mongoose from "mongoose";
import DB_NAME from "../constants";

import express from "express"
const app = express();

;( async()=>{

    try
        {
            //CONNECTING with DATABASE
            await mongoose.connect(`${process.env.MONGODB_URI}/{DB_NAME}`)

            //THIS will THROW ERROR IF  DATABASE IS UNABLE TO CONNECT WITH EXPRESS 
            app.on("error",(error)=>{
                console.log("ERROR : ",error)
                throw error
            })

            app.listen(process.env.PORT, ()=>{
                console.log(`App is listening on PORT ${process.env.PORT}`);
            })
        }

    catch(error)
        {
            console.error("ERROR : ",error)   
            throw err
        }
})()
        */