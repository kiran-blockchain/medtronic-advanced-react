const mongoose =require('mongoose')
const { CONNECTION_STRING } = require('../constants')
module.exports.ConnectDatabase =async()=>{
// Create Instance of MongoClient for mongodb
 try{
    await mongoose.connect(CONNECTION_STRING);
    console.log("Connected to datbase");
    require("../schema/users")
 }
 catch(ex){
    console.log("Erorr in connecting db")
 }
};