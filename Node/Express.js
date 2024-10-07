import express from "express" ; 
const app = express() ; 
const port = 3000 ; 
app.get('/', (req, res) => {
    res.send("Hello Harsh Dahiya") ; 
})

app.listen(port , () => {
    console.log("express serever is listening at the port : 3000")
})