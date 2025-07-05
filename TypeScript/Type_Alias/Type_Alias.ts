// A Type Alias in TypeScript allows you to create a new name for any existing type. It's essentially a way to give a custom name to a type, whether that type is a primitive (like string or number), a union type, an intersection type, a complex object shape, or even a function signature.

// we define a type alias using the type keyword.

// Syntax:

// TypeScript

// type NewTypeName = ExistingType;
// Why Use Type Aliases? (Benefits)
// Readability and Clarity: Complex types can be hard to read. A type alias gives them a descriptive name, making your code much easier to understand at a glance.

// TypeScript

// Without type alias:

function displayUser_one(user: { id: number; name: string; email?: string; isActive: boolean }) {
    // ...
}

// With type alias:
type UserProfile = {
    id: number;
    name: string;
    email?: string;
    isActive: boolean;
};
function displayUser(user: UserProfile) {
    // ...
}
// Reusability: Once you define a type alias, you can reuse it across your entire codebase, avoiding repetition and ensuring consistency.

// TypeScript

type ID = string | number;

let userId: ID = "abc-123";
let productId: ID = 456;

function findItem(id: ID) {
    // ...
}
// Refactoring: If a complex type needs to change, you only need to update its definition in one place (the type alias), and all instances where it's used will automatically update. This significantly reduces the risk of errors during refactoring.

// Shorthand for Complex Types: They are excellent for creating concise names for union types, intersection types, tuple types, and function types.

// TypeScript

// For a union type
type StringOrNumber = string | number;
// let value: StringOrNumber = 10;

// For a tuple type
type Point = [number, number];
// let origin: Point = [0, 0];

// For a function type
type GreeterFunction = (name: string) => string;
const sayHello: GreeterFunction = (name) => `Hello, ${name}!`;
// How Type Aliases Differ from Interfaces (A Common Question)
// This is probably the most frequently asked question about type aliases. While they often seem to do similar things, especially for defining object shapes, there are key differences:

// Feature

// Type Alias (type)

// Interface (interface)

// Declaration

// type MyType = ...

// interface MyInterface { ... }

// Can Name Any Type

// Yes (primitives, unions, intersections, tuples, functions, objects)

// Primarily for object shapes (and classes)

// Declaration Merging

// No. If you declare type MyType = ... twice, it's an error.

// Yes. Interfaces with the same name merge their members.

// Extending/Implementing

// Can "extend" via intersection (&)

// Can extend other interfaces/classes; can be implemented by classes

// Self-Referencing

// Can sometimes be more flexible for recursive types

// Can be used for recursive types


// Export to Sheets
// Example of Declaration Merging (Interface only):

// TypeScript

// Interface
interface User {
    id: number;
}

interface User { // This will merge with the above 'User' interface
    name: string;
}

const u: User = { id: 1, name: "Alice" }; // Valid, 'User' now has both 'id' and 'name'
// TypeScript

// Type Alias
// type Product = {
//     productId: string;
// };

// type Product = { name: string }; // Error: Duplicate identifier 'Product'.
// Example of Extending/Implementing:

// TypeScript

// With Interfaces
interface Animal {
    name: string;
}
interface Dog extends Animal { // Interfaces can extend interfaces
    breed: string;
}

// class Labrador implements Dog { // Classes can implement interfaces
//     name: "Buddy";
//     breed: "Labrador";
//     constructor(name: string) { this.name = name; this.breed = "Labrador"; }
// }


// With Type Aliases (using intersection for 'extension')
type Vehicle = {
    make: string;
};
type Car = Vehicle & { // Using intersection to "extend"
    model: string;
};
const myCar: Car = { make: "Toyota", model: "Camry" };

// Type aliases *cannot* be implemented by classes directly like interfaces
// class ElectricCar implements Car { // Error: A class can only implement an object type or intersection of object types with call or construct signatures.
//     make: "Tesla";
//     model: "Model 3";
// }


// When to Use Type Aliases vs. Interfaces
// The choice often comes down to personal preference or team conventions, but here's a general guideline:

// Use interface for defining the shape of objects (and classes) when you might want to use declaration merging (e.g., for extending global types, or libraries). They are slightly more performant in some edge cases.

// Use type for defining anything else, especially:

// Union types (string | number)

// Intersection types (TypeA & TypeB)

// Tuple types ([string, number])

// Primitive aliases (type Milliseconds = number;)

// Function signatures (type Callback = (data: any) => void;)

// When you need to define types that are computed or recursive in complex ways.

// Many modern codebases lean towards using type more broadly because of its versatility, but interface still has its place, especially for object-oriented patterns and library augmentation.