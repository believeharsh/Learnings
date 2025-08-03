// @ts-nocheck
// This directive is used here ONLY for demonstration purposes to allow
// compilation despite intentional errors in the examples.
// DO NOT use @ts-nocheck in your actual production code.

/*
   ===============================================
   TypeScript Features: readonly, optional (?), &
   ===============================================
*/

/*
   -----------------------------------------------
   1. `readonly` Keyword
   -----------------------------------------------
   The `readonly` keyword in TypeScript is used to mark properties of an object
   (or class) such that they can only be assigned a value during initialization
   or within the constructor of a class. After that, their value cannot be changed.
   It's about immutability.

   What it means: Once a `readonly` property is set, you cannot reassign it.

   Why use it:
   - Immutability: To ensure that certain data remains constant after creation,
     preventing accidental modifications.
   - Predictability: Makes your code easier to reason about, as you know certain
     values won't change unexpectedly.
   - Enforcing Design: Useful when designing APIs or data structures where
     certain fields should be fixed.
*/

// a) Readonly Properties in Object Types/Interfaces:
interface Point {
  readonly x: number;
  readonly y: number;
}

let p1: Point = { x: 10, y: 20 };
// p1.x = 5; // Error: Cannot assign to 'x' because it is a read-only property.
// p1.y = 15; // Error: Cannot assign to 'y' because it is a read-only property.

// Valid: Initialization
const p2: Point = { x: 30, y: 40 };
console.log(`Point p1: (${p1.x}, ${p1.y})`);
console.log(`Point p2: (${p2.x}, ${p2.y})`);


// b) Readonly Array (Type Alias):
// You can also make an entire array `readonly`, meaning you can't add, remove,
// or change its elements after creation.
type ReadOnlyNumbers = readonly number[];

let numbers: ReadOnlyNumbers = [1, 2, 3];
// numbers.push(4); // Error: Property 'push' does not exist on type 'readonly number[]'.
// numbers[0] = 10; // Error: Index signature in type 'readonly number[]' only permits reading.

const immutableArray: ReadOnlyNumbers = [5, 6];
console.log(`Readonly numbers array: ${numbers}`);
console.log(`Immutable array: ${immutableArray}`);


// c) Readonly Class Properties:
class Circle {
  readonly radius: number;
  readonly color: string = "blue"; // Can be initialized directly

  constructor(radius: number) {
    this.radius = radius; // Valid: Assignment in the constructor
    // this.color = "red"; // Also valid here, if uncommented
  }

  setRadius(newRadius: number) {
    // this.radius = newRadius; // Error: Cannot assign to 'radius' because it is a read-only property.
    console.log(`Attempted to set radius to ${newRadius}, but 'radius' is readonly.`);
  }
}

const myCircle = new Circle(10);
console.log(`My circle radius: ${myCircle.radius}, color: ${myCircle.color}`); // 10, blue
// myCircle.radius = 12; // Error: Cannot assign to 'radius' because it is a read-only property.
myCircle.setRadius(15); // Calls method, but internal assignment is an error


/*
   -----------------------------------------------
   2. `optional (?)` Modifier
   -----------------------------------------------
   The `?` (question mark) modifier is used to mark properties (in interfaces
   or type literals) or parameters (in functions) as **optional**. This means
   that they *might* be present, but are not strictly required.

   What it means: A property or parameter marked with `?` can either be present
   with its specified type, or it can be `undefined`.

   Why use it:
   - Flexibility: Allows you to define objects or functions that can accept
     varying sets of data.
   - Common Patterns: Many real-world data structures (like API responses)
     have optional fields.
   - Type Safety: Without `?`, if a property is missing, TypeScript would
     normally throw an error. With `?`, it knows to expect its absence.
*/

// a) Optional Properties in Object Types/Interfaces:
interface UserProfile {
  id: number;
  name: string;
  email?: string; // email is optional
  phone?: string; // phone is optional
}

let user1: UserProfile = {
  id: 1,
  name: "Alice" // email and phone are omitted, which is allowed
};

let user2: UserProfile = {
  id: 2,
  name: "Bob",
  email: "bob@example.com" // email is present
};

let user3: UserProfile = {
  id: 3,
  name: "Charlie",
  phone: "123-456-7890" // phone is present
};

console.log(`User 1 email: ${user1.email}`); // undefined (no error)

// When accessing optional properties, you often need to check for existence
if (user2.email) {
  console.log(`User 2 email (uppercase): ${user2.email.toUpperCase()}`); // Safe to use .toUpperCase()
}

// If you access without checking, and it's undefined, it will be a runtime error
// console.log(user1.email.toUpperCase()); // Will cause runtime error if run: Cannot read properties of undefined (reading 'toUpperCase')


// b) Optional Function Parameters:
function greet(name: string, greeting?: string) {
  if (greeting) {
    console.log(`${greeting}, ${name}!`);
  } else {
    console.log(`Hello, ${name}!`); // Default behavior if greeting is not provided
  }
}

greet("Alice");           // Output: Hello, Alice!
greet("Bob", "Hi");       // Output: Hi, Bob!


/*
   -----------------------------------------------
   3. Intersection Type `&` (Ampersand)
   -----------------------------------------------
   The `&` symbol is used to create an **intersection type**. An intersection
   type combines multiple types into a **single new type that has all the
   properties of all the combined types.** It's like a logical "AND".

   What it means: A value of an intersection type must satisfy *all* the
   requirements of *all* the types it intersects.

   Why use it:
   - Composition: Allows you to build new types by combining existing ones,
     promoting reusability.
   - Extending Types: A powerful way to "extend" object types without using
     inheritance (especially with type aliases).
   - Mixins: Useful in advanced scenarios like implementing mixins.
*/

// a) Combining Object Shapes:
interface HasId {
  id: number;
}

interface HasName {
  name: string;
}

interface HasEmail {
  email: string;
}

// UserProfile now has id, name, AND email
type CompleteUserProfile = HasId & HasName & HasEmail;

const completeUser: CompleteUserProfile = {
  id: 1,
  name: "Alice",
  email: "alice@example.com"
};
console.log(`Complete User: ${completeUser.name}, ${completeUser.email}`);

// Error: Property 'email' is missing in type '{ id: number; name: string; }' but required in type 'HasEmail'.
// const incompleteUser: CompleteUserProfile = {
//   id: 2,
//   name: "Bob"
// };
// console.log(incompleteUser); // This line would not run due to compilation error above

// Combining with a new property
type AdminUser = CompleteUserProfile & {
  isAdmin: boolean;
};

const admin: AdminUser = {
  id: 101,
  name: "Admin Bob",
  email: "admin@example.com",
  isAdmin: true
};
console.log(`Admin User: ${admin.name}, Is Admin: ${admin.isAdmin}`);


// b) Combining Union Types (less common, but possible):
// When used with primitive union types, it often results in 'never'
// unless there's an overlapping type.
type TypeA = string | number;
type TypeB = number | boolean;

type IntersectedType = TypeA & TypeB; // IntersectedType will be 'number' because only 'number' exists in both A AND B.

let valueC: IntersectedType = 10;
// let valueC2: IntersectedType = "hello"; // Error: Type '"hello"' is not assignable to type 'number'.
console.log(`Intersection of string|number and number|boolean is: ${valueC}`);


// c) With Function Signatures:
type LogFunction = (message: string) => void;
type ErrorHandler = (error: Error) => void;

// Combined function must accept both types of arguments (though this specific example is less practical)
type CombinedLogger = LogFunction & ErrorHandler;

// This means a function satisfying CombinedLogger must be callable with a string AND with an Error object.
// In practice, you'd usually have separate functions or an overloaded signature for this.
const myCombinedLogger: CombinedLogger = (arg: string | Error) => {
    if (typeof arg === 'string') {
        console.log(`Log: ${arg}`);
    } else {
        console.error(`Error: ${arg.message}`);
    }
};

myCombinedLogger("This is a log message.");
myCombinedLogger(new Error("Something went wrong!"));


/*
   ===============================================
   Summary
   ===============================================
   - `readonly`: Ensures a property cannot be reassigned after initialization.
                 Focuses on immutability.
   - `?` (Optional): Indicates a property or parameter might be absent
                     (or `undefined`). Focuses on flexibility and partial data.
   - `&` (Intersection): Creates a new type by combining all properties from
                         multiple types. Focuses on composition and "AND" logic.
*/