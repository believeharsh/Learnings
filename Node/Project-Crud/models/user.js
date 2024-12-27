const mongoose = require("mongoose") ; 

const userSchema = mongoose.Schema({
    name : {
        type : String,
        required : true
    },
    email : {
        type : String,
        required : true
    }
}, {timestamps : true}) ; 

const userMongo = mongoose.model("users" , userSchema) ; 

module.exports = userMongo ; 