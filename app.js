const bodyParser = require("body-parser");
const https=require("https");
const express=require("express");
const request=require("request");
const { parse } = require("path");

const app=express();
app.use(bodyParser.urlencoded({extend:true}));

app.get("/",function(req,res){
    res.sendFile(__dirname+"/index.html");
})

app.post("/",function(req,res){
    var mail=req.body.mail;
    var pass=req.body.pass;
    console.log(mail,pass);

    if(express.response.statusCode === 200){
                res.sendFile(__dirname+"/sucess.html");
            }
            else{
                res.send(__dirname+"/failure.html");
            }
       
})


app.listen(process.env.PORT || 3000,function(){
    console.log("server running");
})