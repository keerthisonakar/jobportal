import express from "express";
import dotenv from "dotenv";
import connectdb from "./db/dbconnect.js";
import userrouter from'./router/userroutes.js';
import jobrouter from './router/jobsroutes.js';
import jobapplicationroutes from './router/jobapplicationroutes.js'

import cors from "cors";
const app = express();
dotenv.config();
connectdb();

//MIDDLEWARES
app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.get('/',(req,res)=>{
    res.status(200).send("server is running fine");
})
app.get('/api/home',(req,res)=>{
    res.status(200).send("home page is route checking");
})
//Routers
app.use('/api',userrouter)
app.use('/api',jobrouter)
app.use('/api',jobapplicationroutes)
let port=process.env.port ||5051;
    app.listen(port,()=>{

    console.log(`server running on http://localhost:${port}`);
});

