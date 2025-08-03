function addTwo(num : number) {
    // num.toLowerCase() ; 
    return num ; 
}

addTwo(1) ; 

const loginUser = (name : string, email : string, isPaid : boolean = false) => {
      console.log(name, email, isPaid) ; 
}

loginUser("harsh", "harsh@123") ; // here we accept three arguments but passing two that's why getting error here, 
// but if we assgin the default value in the function arguments as well then it will not give an error . 