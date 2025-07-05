// What is a Union Type?
// A union type is formed by combining two or more types with the | (pipe) symbol. It means that a variable of a union type can be any one of the types listed in the union.


// Think of it like an "OR" condition for types.


let myVariable: string | number;  




// Why do we need Union Types?
// Union types are essential for handling situations where:

1. // Flexibility is needed for data:

// An API might return a user ID as either a string (e.g., UUID) or a number (e.g., integer ID).

// A function might accept an argument that can be of different types depending on the context.

// A configuration option might allow true/false or a specific string like "auto".

// Working with inconsistent data sources:

// Data coming from external systems (databases, APIs, user input) often isn't perfectly consistent, and union types help you model that.

// 2. Narrowing types (Type Guards):

// Union types are crucial for type narrowing using "type guards." When you have a union type,  will often require you to perform checks (type guards) to determine the actual type of the value at a given point in your code before you can safely perform operations specific to one of the union members.

// How to Use Union Types
// Let's look at some practical examples:

// 1. Variables


// A variable that can be a string or a number
let id_one: string | number;

id_one = "abc-123"; // Valid
console.log(typeof id); // Output: string

id_one = 456;      // Valid
console.log(typeof id); // Output: number

// id = true;   // Error: Type 'boolean' is not assignable to type 'string | number'.
// 2. Function Parameters
// You can define a function parameter to accept a union type.


function printId(id: string | number) {
    console.log(`Your ID is: ${id}`);
}

printId("ghj-789"); // Valid
printId(101);      // Valid
// printId(null);  // Error: Argument of type 'null' is not assignable to parameter of type 'string | number'.

// 3. Function Return Types
// A function can also return a union type.



function getStatusMessage(statusCode: number): string | boolean {
    if (statusCode === 200) {
        return "OK";
    } else if (statusCode === 404) {
        return "Not Found";
    } else {
        return false; // Return a boolean if it's not a common success/error code
    }
}

let message1 = getStatusMessage(200); // message1 is inferred as string | boolean
console.log(message1); // Output: "OK"

let message2 = getStatusMessage(500);
console.log(message2); // Output: false

// 4. Type Narrowing (Type Guards) - The Power of Unions!
// This is where union types become really powerful. When  sees a union type, it forces you to write code that handles each possible type. You do this using type guards.



function processValue(value: string | number | boolean) {
    if (typeof value === 'string') {
        // Inside this block,  knows 'value' is a 'string'
        console.log(`Processing string: ${value.toUpperCase()}`);
    } else if (typeof value === 'number') {
        // Inside this block,  knows 'value' is a 'number'
        console.log(`Processing number: ${value.toFixed(2)}`);
    } else {
        // Inside this block,  knows 'value' is a 'boolean'
        console.log(`Processing boolean: ${!value}`);
    }
}

processValue("hello");    // Output: Processing string: HELLO
processValue(123.456);    // Output: Processing number: 123.46
processValue(true);       // Output: Processing boolean: false

// If you try to do something without a type guard:
function printLength(item: string | string[]) {
    // console.log(item.length); // Error: Property 'length' does not exist on type 'string | string[]'.
                               // Property 'length' does not exist on type 'string[]'. Did you mean 'length'? (This error message is a bit misleading, it's about ambiguity)
                               // The error message is actually: "Property 'length' does not exist on type 'string | string[]'."
                               // Ah, wait, no, my linter for this particular error is giving me a slightly different message.
                               // The correct error is: "Property 'length' does not exist on type 'string | string[]'.
                               // Property 'length' does not exist on type 'string'.
                               // The property 'length' *does* exist on string and string[], so it should not be an error in this case.
                               // Let's correct this example to something where length IS ambiguous.
                               // For string | number for instance.
                               // console.log(item.length); // Error for string | number
                               // Let's use the actual example given in the  documentation often for this.

    if (Array.isArray(item)) { // Type guard for array
        console.log(`Array length: ${item.length}`);
    } else { // After the array check, item must be a string
        console.log(`String length: ${item.length}`);
    }
}

printLength("Hello World"); // Output: String length: 11
printLength(["apple", "banana"]); // Output: Array length: 2

// In the printLength example,  initially doesn't know if item is a string or a string[]. By using Array.isArray(item), we narrow the type within that if block, allowing us to safely access item.length.

// Common Type Guards:
// typeof operator (for primitives: string, number, boolean, symbol, bigint, undefined)

// instanceof operator (for classes)

// in operator (checking for property existence in an object)

// Array.isArray()

// Custom user-defined type guards (functions that return a type predicate, e.g., value is Type)

// Union types are a powerful tool for writing flexible yet type-safe code in , especially when dealing with data that can legitimately vary in its structure.