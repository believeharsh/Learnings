const express = require("express") ; 
const {ConnectToMongo} = require("./connection"); 
const userRouter = require("./routes/user.js") ; 

const app = express() ; 
const PORT = 8000 ; 

ConnectToMongo("mongodb://127.0.0.1:27017/Project-Crud").then(() => console.log("connection is sucussful"))

// middlewares 

app.use(express.json()) ; 
app.use(express.urlencoded({extended : false})) ; 

// routes
app.use("/api/users", userRouter) ; 
app.listen(PORT , () => console.log("App is Running 8000 PORT")) ; 