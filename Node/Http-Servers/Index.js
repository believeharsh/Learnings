const http = require("http");
const fs = require("fs");
const url = require("url");
const express = require("express");

const app = express();
app.get("/", (req, res) => {
  return res.send("Hello from Home page");
});
app.get("/about", (req, res) => {
  return res.send("Hello from About Page " + "hey " + req.query.name);
});

app.listen(8000, () => console.log("Server Started")) ; 

// below is the code without express ; 

// const myHandler = (req, res) => {
//   if (req.url === "/fevicon.ico") return res.end();
//   const log = `${Date.now().toString()} : ${req.method } : ${req.url}  new req recieved \n`;
//   const myurl = url.parse(req.url, true);
//   console.log(myurl);
//   fs.appendFile("log.txt", log, (err, data) => {
//     switch (myurl.pathname) {
//       case "/":
//         res.end("HomePage");
//         break;
//       case "/about":
//         const username = myurl.query.myname;
//         res.end(`Hii, ${username}`);
//         break;
//       case "/search":
//         const result = myurl.query.search_query;
//         res.end(`these are you result, ${result}`);
//         break;
//       default:
//         res.end("404 Not Found");
//     }
//   });
// }

// const myServer = http.createServer(app);
// const myServer = http.createServer(myHandler) ;

// myServer.listen(8000, () => console.log("server getting started"));
