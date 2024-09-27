// How to access object properties 
// In React (and JavaScript in general), both dot notation (.) and bracket notation ([]) are used to access object properties, but there are specific cases where one is preferred over the other.

// ** Dot Notation
// Dot notation is the most common and preferred way to access properties when the property name is known and valid as a variable name (e.g., no spaces, special characters, or numbers at the beginning).

const obj = { name: "Harsh", age: 22 };

// Accessing properties with dot notation
console.log(obj.name); // "Harsh"
console.log(obj.age);  // 22


// ** Bracket Notation
// Bracket notation is useful in situations where:

// The property name is stored in a variable.
// The property name contains special characters or spaces.
// The property name is a number or dynamically computed.


const obj1 = { name: "Harsh", age: 22 };
const propName = "name";

// Accessing properties with bracket notation
console.log(obj1[propName]); // "Harsh"


// Example 2: Special characters or spaces

const obj2 = { "first name": "Harsh", age: 22 };

// Accessing properties with bracket notation
console.log(obj2["first name"]); // "Harsh"


// When to Use Each
// Use dot notation when you know the property name ahead of time and it's a valid identifier.
// Use bracket notation when:
// The property name is dynamic (e.g., stored in a variable).
// The property contains special characters, spaces, or numbers.