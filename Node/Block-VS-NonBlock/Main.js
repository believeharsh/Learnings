const fs = require('fs') ; 
const os = require('os') ; 

console.log(os.cpus().length) ; 

// Blocking code 
// console.log(1) ; 
// const result = fs.readFileSync('test.txt', 'utf-8') ; 
// console.log(2) ; 
// console.log(result) ; 