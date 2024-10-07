import http from "http" ; 
const port = process.env.PORT ; 
const server = http.createServer((req, res) => {
    res.statusCode = 200 ; 
})