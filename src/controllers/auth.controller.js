require("dotenv").config();

const jwt= require("jsonwebtoken");

const User = require("../models/user.model");

const token= (user)=>{
    return jwt.sign({user:user},process.env);
}