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



const number = 12 ; // so when we are directly initializing and given the value as well then we don't need to specify of what type will be saved in this ; but when are just initializing then we have to tell the type explictely. 


// Now what is the tuples in TS 
let myarr : [number, string, boolean] = [12, "hello", true] ; // this is called tuples in the typeScript 


myarr.push(4) ;
console.log(myarr) ; 

let any_Type_example : any ; 
any_Type_example = 12 ; 
any_Type_example = "HarshDahiya" ;  // so we can give any data to variable who's assgined the type called any 


let unknown_example : unknown ; 
unknown_example = 12 ; 
unknown_example = "HarshDahiya" ; // this is completely similar to the any but there are some differece between them 

// let never_example : never ;
 // so this is not going to used in the programming, but any codo that is going to be run infinite times, then we should define it. 

 function never_example_func() : never {
    while(true) {
        "hey this is the never type function that will run infinite" ; 
    }
 }

//  never_example_func() ; 
 console.log("hello, there is there code id coming till this line or not")



function void_types_example() : void {
    return ; // so this is bascailly same as java, where i have to define what this function will return that's it ; 
}
