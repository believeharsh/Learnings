// What is Type Inference?
// You're absolutely right! Type inference is TypeScript's ability to automatically deduce, or "guess," the type of a variable, function return value, or expression based on its initial value or how it's used, without you having to explicitly write the type.

// Examples:

let a = 12;

// TypeScript infers a to be of type number.

let founderName = "Alice";

// TypeScript infers name to be of type string.

let isActive = true;

// TypeScript infers isActive to be of type boolean.

let numbers = [1, 2, 3];

// TypeScript infers numbers to be of type number[] (an array of numbers).

let user = { id: 1, name: "Bob" };

// TypeScript infers user to be of type { id: number; name: string; }.

function add(x: number, y: number) {
  return x + y;
}

// TypeScript infers the return type of add to be number.

// Type inference is incredibly convenient because it allows you to write less code, making TypeScript feel very much like plain JavaScript in many scenarios. It helps keep your code concise and clean.

// Why Do We Still Need to Specify Types (Explicit Type Annotation)?
// This is the "interesting" part! While type inference is great, there are several crucial scenarios where explicit type annotation (manually writing out the type) becomes necessary, beneficial, or even mandatory:

// When a Variable is Declared Without Immediate Initialization:
// If you declare a variable but don't assign it a value immediately, TypeScript can't infer its type. In this case, it will be inferred as any by default (if noImplicitAny is off), which defeats the purpose of type safety.

let username: string; // ✅ TypeScript knows this will be a string
// username = 123; // ❌ Error: Type 'number' is not assignable to type 'string'.
username = "John Doe"; // ✅ OK

let value; // 😬 Inferred as 'any' if noImplicitAny is off. Prone to errors.
value = 10;
value = "hello"; // No error here, which is what we want to avoid.

// Function Parameters:
// TypeScript cannot infer the types of function parameters. It doesn't know what types of arguments a function expects solely from the parameter names. This is where explicit types are mandatory for type safety within functions.

// function greet(name) { // ❌ Error: Parameter 'name' implicitly has an 'any' type. (if noImplicitAny is on)
//     console.log(`Hello, ${name}`);
// }

function greet(name: string): void {
  // ✅ Explicitly define parameter and return types
  console.log(`Hello, ${name}`);
}

greet("Alice"); // ✅ OK
// greet(123); // ❌ Error: Argument of type 'number' is not assignable to parameter of type 'string'.

// Function Return Types (Clarity and Preventing Bugs):
// While TypeScript can infer return types (as seen with add above), explicitly annotating them is often a good practice for:

// Clarity: It makes the function's contract clear at a glance.

// Preventing Regression Bugs: If you accidentally change the logic inside the function in a way that changes the return type, TypeScript will immediately flag it.

function calculateArea(width: number, height: number): number {
  // Explicit return type
  // Imagine complex logic here...
  // if (width < 0 || height < 0) return "Invalid"; // ❌ Error: Type '"Invalid"' is not assignable to type 'number'.
  return width * height;
}

// Complex Object Shapes (Interfaces, Type Aliases):
// When dealing with complex data structures, especially those that come from APIs or are shared across multiple parts of your application, defining an interface or type alias and then explicitly using it provides immense clarity and maintainability.

interface User {
  id: number;
  name: string;
  email?: string; // Optional property
}

let newUser: User = {
  // Explicitly specifying that newUser must conform to the User interface
  id: 1,
  name: "Jane Doe",
  // email: 123 // ❌ Error
};

// let anotherUser = { id: 2, name: "Mark", age: 30 }; // Type inference would create a new anonymous type.
// This is fine, but if 'anotherUser' should also be a 'User', you need to say so.
let anotherUser: User = { id: 2, name: "Mark" }; // OK

// Union Types, Intersection Types, and Literal Types:
// When you want a variable to be one of several possible types, or a very specific literal value, you must use explicit annotation.

// let status: "pending" | "success" | "error"; // Union of string literals

// status = "pending"; // ✅

// status = "done"; // ❌ Error

let id: string | number; // Can be a string OR a number
id = "abc-123"; // ✅
id = 456; // ✅
// id = true; // ❌ Error
// any and unknown Types:
// When you genuinely don't know the type, or when dealing with external data, you might use any (to opt out of type checking) or unknown (a safer alternative that requires type checks before use). These must be explicitly declared.

// let data: any = JSON.parse(someApiResponse); // Opting out of type checking
// let unknownData: unknown = fetchData(); // Safer, requires narrowing

// The Balance: When to Infer vs. When to Annotate
// The general best practice is:

// Rely on type inference whenever possible and when it provides enough clarity. This keeps your code concise.

// Use explicit type annotations when inference is not sufficient, when clarity is paramount, or when you want to enforce a specific contract (like with interfaces or function signatures).

// TypeScript is designed to give you the best of both worlds: the conciseness of dynamically typed languages where appropriate, and the safety and tooling benefits of statically typed languages where it truly matters for robustness and maintainability.

// It's a powerful tool that, once you get the hang of it, will significantly improve your development experience, especially on larger projects.

//  In summary:

// For simple initializations where the type is immediately obvious (like a string literal, number literal, boolean literal, or straightforward array/object literal), let TypeScript infer the type. This leads to more concise and clean code.

// For function signatures, complex data structures (interfaces), union types, or variables declared without initial values, explicitly define the type. This adds crucial clarity and ensures robust type checking where it matters most.

// let bontinue: string = "theharshdahiyaone";
// let bontinue = "theharshdahiyaone";
