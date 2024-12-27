const fs = require('fs') ; 
const { escape } = require('querystring');

// fs.writeFileSync('./test.txt', "Harsh Dahiya") ; 

// const readFile = fs.readFileSync('./test.txt', "utf-8") ; 

// const readFile = fs.readFile('./test.txt' , 'utf-8', (err, res) => {
//     if(err){
//         console.log(err);
//     } else {
//         console.log(res) ; 
//     }
// })

fs.appendFileSync('./test.txt', 'Checking append of node') ; 


