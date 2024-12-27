const mongoose = require("mongoose") ;
const ConnectToMongo = async (url) =>  {
    try {
        await mongoose.connect(url) ; 
        console.log("mongoDb Connected") ; 
    }catch(error){
        console.log(`error occured ${error}`) ; 
    }
}

module.exports = {
    ConnectToMongo,
}