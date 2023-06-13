const exp = require('express');
const userApp = exp.Router();
const expressAsyncHandler = require("express-async-handler")
const bcryptjs = require("bcryptjs");
const jwt=require("jsonwebtoken");
require('dotenv').config();
userApp.use(exp.json());

userApp.get('/getusers',expressAsyncHandler(async(request,response)=>{
    let usercollectionobj=request.app.get("usercollectionobj")
    let users=await usercollectionobj.find().toArray();
    response.send({message:"users list",payload:users})
}));

userApp.post('/login',expressAsyncHandler(async(request,response)=>{
    let usercollectionobj=request.app.get("usercollectionobj");
    let usercredobj=request.body;
    let userofdb=await usercollectionobj.findOne({username:usercredobj.username})
    if(userofdb==null){
        response.send({message:"invalid user"})
    }
    else{
        let status=await bcryptjs.compare(usercredobj.password,userofdb.password)
        if(status==false){
            response.send({message:"invalid password"})
        }
        else{
            let token=jwt.sign({username:userofdb.username},process.env.SECRET_KEY,{expiresIn:60})
            response.send({message:"login success",payload:token,userobj:userofdb})
        }
    }
}));

userApp.post('/createuser', expressAsyncHandler(async (request, response) => {
    let usercollectionobj = request.app.get("usercollectionobj");
    let newuserobj = request.body;
    let userofdb = await usercollectionobj.findOne({ username: newuserobj.username })
    if (userofdb !== null) {
        response.send({ message: "Username is already taken" })
    }
    else {
        let hashedpassword = await bcryptjs.hash(newuserobj.password, 6);
        newuserobj.password = hashedpassword;
        await usercollectionobj.insertOne(newuserobj);
        response.send({ message: "New user created" })
    }
}))

module.exports = userApp;