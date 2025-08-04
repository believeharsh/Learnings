// @ts-nocheck
// This directive is used here ONLY for demonstration purposes to allow
// compilation despite intentional errors in the examples.
// DO NOT use @ts-nocheck in your actual production code.

/*
   ===============================================
   TypeScript Feature: Union Types (|)
   ===============================================
*/

/*
   -----------------------------------------------
   1. Union Types (`|` - Pipe Symbol)
   -----------------------------------------------
   In TypeScript, a **Union Type** describes a value that can be one of several
   possible types. It's like a logical "OR" operation for types. If you have
   a variable, parameter, or return value that could legitimately be a string
   OR a number (or a boolean, or a custom object, etc.), a union type is
   how you express that.

   You define a union type using the pipe symbol (`|`) between the constituent types.

   What it means: A value of a union type must be compatible with *at least one*
   of the types in the union.

   Why use it:
   - Flexibility: Allows functions and variables to accept or hold different
     but related types of data.
   - Robustness: Enables you to model real-world scenarios where data isn't
     always strictly one type.
   - Better Type Checking: Unlike `any`, union types still provide type safety.
     TypeScript will only allow operations that are valid for *all* types in the union,
     or force you to narrow down the type before performing specific operations.
   - Clear Intent: Explicitly communicates the possible types a value can take,
     improving code readability.
*/

// a) Basic Union of Primitive Types:
type StringOrNumber = string | number;

let id: StringOrNumber = 123;         // Valid: id is a number
console.log(`ID (number): ${id}`);

id = "ABC-456";                       // Valid: id is a string
console.log(`ID (string): ${id}`);

// id = true; // Error: Type 'boolean' is not assignable to type 'StringOrNumber'.


// b) Union in Function Parameters:
// You often use union types for function parameters when they can accept different data forms.
function printId(id: number | string) {
  // TypeScript knows 'id' is either a number OR a string.
  // Operations that are common to both (like 'toString()' or 'typeof') are allowed.
  console.log(`Your ID is: ${id}`);

  // To perform type-specific operations, you need to use "Type Narrowing".
  // This is usually done with 'typeof' checks for primitives, or 'instanceof' for classes,
  // or property checks for objects.
  if (typeof id === "string") {
    // Inside this block, TypeScript knows 'id' is a string.
    console.log(`ID in uppercase: ${id.toUpperCase()}`);
  } else {
    // Inside this block, TypeScript knows 'id' is a number.
    console.log(`ID multiplied by 2: ${id * 2}`);
  }
}

printId(101);      // Output: Your ID is: 101, ID multiplied by 2: 202
printId("202xyz"); // Output: Your ID is: 202xyz, ID in uppercase: 202XYZ
// printId(true); // Error: Argument of type 'boolean' is not assignable to parameter of type 'string | number'.


// c) Union of Custom Object Types/Interfaces:
interface Dog {
  type: "dog"; // A literal type for discrimination
  bark(): void;
}

interface Cat {
  type: "cat"; // A literal type for discrimination
  meow(): void;
}

type Pet = Dog | Cat; // Pet can be either a Dog or a Cat

function makeSound(pet: Pet) {
  // To call specific methods, you need to narrow the type.
  // Using a 'type guard' (checking a specific property, often a literal type) is common here.
  if (pet.type === "dog") {
    pet.bark(); // TypeScript knows 'pet' is a Dog here
  } else {
    pet.meow(); // TypeScript knows 'pet' is a Cat here
  }
}

const myDog: Dog = {
  type: "dog",
  bark: () => console.log("Woof! Woof!")
};

const myCat: Cat = {
  type: "cat",
  meow: () => console.log("Meow!")
};

makeSound(myDog); // Output: Woof! Woof!
makeSound(myCat); // Output: Meow!


// d) Union for Return Types:
// A function can also return different types based on logic.
function getStatusMessage(statusCode: number): string | number {
  if (statusCode === 200) {
    return "OK";
  } else if (statusCode === 404) {
    return "Not Found";
  } else {
    return statusCode; // For other codes, return the number itself
  }
}

let status1 = getStatusMessage(200); // Type of status1 is 'string'
let status2 = getStatusMessage(404); // Type of status2 is 'string'
let status3 = getStatusMessage(500); // Type of status3 is 'number'

console.log(`Status 200: ${status1}`);
console.log(`Status 404: ${status2}`);
console.log(`Status 500: ${status3}`);


// e) Literal Union Types:
// Often used for finite sets of string or number values.
type Direction = "up" | "down" | "left" | "right";

function move(direction: Direction) {
  console.log(`Moving ${direction}`);
}

move("up");
move("down");
// move("forward"); // Error: Argument of type '"forward"' is not assignable to parameter of type 'Direction'.


/*
   -----------------------------------------------
   Key Concept: Type Narrowing with Union Types
   -----------------------------------------------
   When working with union types, TypeScript's compiler needs to know which
   specific type a value has at a given point in your code to allow type-specific
   operations. This process is called **Type Narrowing**.

   Common Type Narrowing Techniques:
   - `typeof` operator: (for primitives like string, number, boolean, symbol, bigint, undefined, function, object)
   - `instanceof` operator: (for classes/objects created with `new`)
   - Property presence checks: (`if ("propertyName" in object)`)
   - Equality checks: (`if (value === "specificLiteral")` or `if (value === null)`)
   - `in` operator: (checking if a property exists on an object)
   - Discriminated Unions: (as shown in the `Pet` example with the `type` property)
*/

// Example of Type Narrowing (revisited from printId):
function processData(data: string | number[]) {
    if (typeof data === 'string') {
        // Here, 'data' is narrowed to 'string'
        console.log(`Processing string: ${data.length} characters`);
    } else {
        // Here, 'data' is narrowed to 'number[]'
        console.log(`Processing array of numbers: ${data.length} elements, first is ${data[0]}`);
    }
}

processData("hello world"); 
processData([10, 20, 30]);


/*
   ===============================================
   Summary
   ===============================================
   - **Union Types (`|`)**: Define a value that can be *one of several* specified types.
     It's a logical "OR".
   - **Benefits**: Enhances flexibility, provides strong type checking where `any`
     would fail, and improves code readability.
   - **Key to Usage**: Often requires **Type Narrowing** to perform operations
     specific to one of the types in the union.
*/