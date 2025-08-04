// @ts-nocheck
// This directive is used here ONLY for demonstration purposes to allow
// compilation despite intentional errors in the examples.
// DO NOT use @ts-nocheck in your actual production code.

/*
   ===============================================
   TypeScript Feature: Tuples
   ===============================================
*/

/*
   -----------------------------------------------
   1. Tuples
   -----------------------------------------------
   In TypeScript, a **Tuple** is a special type of array that expresses an array
   with a **fixed number of elements**, where the type of each element is known,
   but **can be different**.

   Think of it as a fixed-size, ordered list where each position has a specific type.
   It's like a highly structured array.

   Syntax: Tuples are defined by listing the types of their elements within square
   brackets, separated by commas: `[type1, type2, type3, ...]`

   What it means:
   - Fixed Length: The number of elements in the tuple is predefined.
   - Ordered Types: The type of the element at each specific index is fixed.

   Why use it:
   - Structured Data: Ideal for representing records where you know exactly how
     many pieces of information there are and what type each piece is, and their
     order is significant (e.g., a coordinate pair, an RGB color, a user record).
   - Return Multiple Values: Functions can effectively "return" multiple values
     with distinct types as a single tuple.
   - Clear Intent: Clearly communicates the expected structure and types of a
     fixed-length list of items.
*/

// a) Basic Tuple Definition and Usage:
// Example: A coordinate pair (x, y)
type Coordinate = [number, number];

const point1: Coordinate = [10, 20];
console.log(`Point 1: x = ${point1[0]}, y = ${point1[1]}`);

// point1[0] = "hello"; // Error: Type 'string' is not assignable to type 'number'.
// const point2: Coordinate = [5]; // Error: Source has 1 element(s) but target requires 2.
// const point3: Coordinate = [1, 2, 3]; // Error: Source has 3 element(s) but target requires 2.


// Example: An RGB color value (red, green, blue)
type RGBColor = [number, number, number];

const red: RGBColor = [255, 0, 0];
const green: RGBColor = [0, 255, 0];
console.log(`Red color: ${red}`);
console.log(`Green color: ${green}`);


// Example: User information (id, name, isActive)
type UserRecord = [number, string, boolean];

const userA: UserRecord = [1, "Alice", true];
const userB: UserRecord = [2, "Bob", false];
console.log(`User A: ID=${userA[0]}, Name=${userA[1]}, Active=${userA[2]}`);
console.log(`User B: ID=${userB[0]}, Name=${userB[1]}, Active=${userB[2]}`);

// Accessing elements by index
const userId = userA[0];      // Type is number
const userName = userA[1];    // Type is string
const userActive = userA[2];  // Type is boolean

console.log(`Extracted: User ID: ${userId}, User Name: ${userName}`);


// b) Tuples as Function Return Values:
// Functions can return tuples to give back multiple related pieces of data.
function getUserDetails(id: number): [string, boolean, number] {
  if (id === 1) {
    return ["Alice", true, 30]; // name, isActive, age
  } else if (id === 2) {
    return ["Bob", false, 25];
  }
  return ["Guest", false, 0]; // Default
}

const [name, isActive, age] = getUserDetails(1);
console.log(`Details for User 1: Name=${name}, Active=${isActive}, Age=${age}`);

const bobDetails = getUserDetails(2);
console.log(`Details for User 2: Name=${bobDetails[0]}, Active=${bobDetails[1]}, Age=${bobDetails[2]}`);


// c) Optional Tuple Elements (TypeScript 3.0+):
// You can mark the last element(s) of a tuple as optional with `?`.
// This means the tuple can have either the full length or a shorter length without the optional elements.
type ContactInfo = [string, number?]; // name, optional phone number

const person1: ContactInfo = ["Alice"]; // Valid: [string]
const person2: ContactInfo = ["Bob", 1234567890]; // Valid: [string, number]

console.log(`Person 1 contact: ${person1}`);
console.log(`Person 2 contact: ${person2}`);


// d) Rest Elements in Tuples (TypeScript 3.0+):
// You can have a rest element at the end of a tuple to indicate that it can
// have an arbitrary number of additional elements of a certain type.
type StringAndNumbers = [string, ...number[]]; // A string followed by any number of numbers

const list1: StringAndNumbers = ["start", 1, 2, 3];
const list2: StringAndNumbers = ["only string"];
const list3: StringAndNumbers = ["another", 10, 20, 30, 40, 50];

console.log(`List 1: ${list1}`);
console.log(`List 2: ${list2}`);
console.log(`List 3: ${list3}`);


// e) Readonly Tuples:
// Just like arrays, tuples can be made readonly, preventing modification after creation.
type ReadonlyPoint = readonly [number, number];

const fixedPoint: ReadonlyPoint = [5, 10];
// fixedPoint[0] = 7; // Error: Index signature in type 'readonly [number, number]' only permits reading.


/*
   -----------------------------------------------
   Tuples vs. Arrays: Key Differences
   -----------------------------------------------
   - Arrays: Variable length, all elements are generally of the same type (or a union).
     Example: `number[]` (an array of any number of numbers)
     Example: `(string | number)[]` (an array of any number of strings or numbers)

   - Tuples: Fixed length, elements at specific positions can have different types.
     Example: `[number, string]` (exactly two elements: first is number, second is string)

   When to choose a Tuple:
   - When the *order* and *count* of elements are significant.
   - When elements at different positions have *different* meanings and types.
   - When you're representing a record or a fixed structure.

   When to choose an Array:
   - When you have a collection of items of the *same type*.
   - When the *length* of the collection is *variable*.
*/

/*
   ===============================================
   Summary
   ===============================================
   - **Tuples**: Fixed-length arrays where each element has a known and
     potentially different type, and the order matters.
   - **Syntax**: Defined using `[type1, type2, ...]`.
   - **Benefits**: Provides strong type checking for structured, ordered data,
     improves clarity, and enables functions to return multiple typed values.
   - **Distinction from Arrays**: Arrays have variable length and typically
     homogeneous element types, while tuples have fixed length and potentially
     heterogeneous element types at specific positions.
*/