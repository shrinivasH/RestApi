//const express= require("express")
// To make use of import statment we need to change at pacakge json add following line type:module
import express from 'express';
const app= express();
const PORT=5111;
app.all("/",(request,response)=>{
    console.log("Request",request);
    console.log("Response",response)
    response.send(`I am Up!`)
})
app.listen(PORT,()=>{
    console.log(`Server is running at ${PORT}`)
})