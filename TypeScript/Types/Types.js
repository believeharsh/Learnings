// what are the types in the typeScript??
// there are basically two types of reference of types in the typeScript??
// first on is primitive and second one is the reference 
// types in the typeScript 
// Numbers, strings, boolean, 
// arrays, tuples , 
// any, unknown, never, void, 
// Enums 
// let a  = 10 ; 
// let b = a + 2 ; 
// console.log(a) ; 
// console.log(b) ; 
// let arr = [1, 2, 3] ; 
// let arr2 = arr ; 
// arr2.pop() ; 
// console.log(arr) ; 
// console.log(arr2) ; 
// there is no difference, typescript work completely similer to the javaScript, since this is the javaScript only, with few additional features
// let a : number ; 
// let b : [] ; 
// let c : {} ; 
// let boolean : boolean ; 
// let hello : string ; 
// let harsh : void ; 
var number = 12; // so when we are directly initializing and given the value as well then we don't need to specify of what type will be saved in this ; but when are just initializing then we have to tell the type explictely. 
// Now what is the tuples in TS 
var myarr = [12, "hello", true]; // this is called tuples in the typeScript 
myarr.push(4);
console.log(myarr);
