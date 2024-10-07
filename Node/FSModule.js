const fs = require('fs') ; 
// const a = fs.readFile('file.txt', 'utf-8', (err, data ) => {
//     console.log(err, data) ; 
// })

// console.log(a)
// console.log("Hello Bhai Kya haal chal"); 


const b = fs.readFileSync('file.txt'); 
console.log("Harsh Dahiya"); 
console.log(b.toString()); 

