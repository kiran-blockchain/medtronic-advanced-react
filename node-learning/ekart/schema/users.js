const { default: mongoose } = require("mongoose")

const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    password:String,
    hobbies:[]
})

module.exports.User=mongoose.model('user', userSchema);