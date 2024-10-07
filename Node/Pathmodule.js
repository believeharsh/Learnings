const path = require('path') ; 
const a = path.basename('/foo/bar/baz/asdf/harsh.html');
console.log(a) ; 


// What is the path module and what is the usecase of that?
// The path module in Node.js provides utilities for working with file and directory paths. It's used to handle and transform file paths efficiently in a cross-platform way, ensuring compatibility across different operating systems (e.g., Windows and Linux) where path separators may differ (\ vs /).