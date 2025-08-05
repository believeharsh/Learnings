// @ts-nocheck
// This directive is used here ONLY for demonstration purposes to allow
// compilation despite intentional errors in the examples.
// DO NOT use @ts-nocheck in your actual production code.

/*
   ===============================================
   TypeScript Feature: Enums (Enumerations)
   ===============================================
*/

/*
   -----------------------------------------------
   1. Enums (`enum` keyword)
   -----------------------------------------------
   An **Enum** (short for "enumeration") is a feature that allows a developer
   to define a set of named constants. Using enums can make it easier to
   document intent, or create a set of distinct cases.

   Enums are one of the few features that TypeScript has which is not
   just a type-level extension of JavaScript. Enums are real objects that
   exist at runtime.

   What it means: A variable of an enum type can only be assigned one of the
   named constant values from that enum.

   Why use it:
   - Readability: Replaces "magic numbers" or hard-coded strings with
     meaningful, self-documenting names.
   - Type Safety: Guarantees that a variable will only hold a value from
     a predefined set.
   - Maintainability: If you need to change a value, you only do it in one
     place (the enum definition), and all usages are updated.
   - Autocompletion: IDEs will provide suggestions for the valid enum members.

   There are two main types of enums in TypeScript: Numeric and String.
*/


// -----------------------------------------------
// 2. Numeric Enums
// -----------------------------------------------
// By default, enums are numeric. TypeScript automatically assigns numeric
// values to each member, starting from `0`.

// a) Default Numeric Enum:
enum Direction {
  Up,      // 0
  Down,    // 1
  Left,    // 2
  Right    // 3
}

let userDirection: Direction = Direction.Up;
console.log(`User is moving: ${Direction.Up} (${userDirection})`); // Output: User is moving: 0 (0)

if (userDirection === Direction.Up) {
  console.log("The user is moving up.");
}


// b) Initialized Numeric Enum:
// You can manually set the value of a member. Subsequent members will
// auto-increment from that value.
enum StatusCodes {
  OK = 200,
  BadRequest = 400,
  Unauthorized,    // Auto-increments to 401
  Forbidden,       // Auto-increments to 402
  NotFound = 404
}

let response: StatusCodes = StatusCodes.NotFound;
console.log(`HTTP status code: ${response}`); // Output: HTTP status code: 404

// TypeScript also supports "reverse mapping" for numeric enums at runtime.
// You can get the string name from its numeric value.
let codeName = StatusCodes[401];
console.log(`Code 401 corresponds to: ${codeName}`); // Output: Code 401 corresponds to: Unauthorized


// -----------------------------------------------
// 3. String Enums
// -----------------------------------------------
// String enums are a better choice when the value of the constant is
// important at runtime, as they provide a more readable value. Each member
// must be explicitly initialized with a string literal.

// a) String Enum Definition:
enum HttpMethods {
  GET = "GET",
  POST = "POST",
  PUT = "PUT",
  DELETE = "DELETE"
}

let requestMethod: HttpMethods = HttpMethods.POST;
console.log(`The request method is: ${requestMethod}`); // Output: The request method is: POST

// Using it in a function:
function handleRequest(method: HttpMethods, url: string) {
  console.log(`Handling a ${method} request for ${url}`);
}

handleRequest(HttpMethods.PUT, "/users/123");
// handleRequest("GET", "/posts"); // Error: Argument of type '"GET"' is not assignable to parameter of type 'HttpMethods'.


// -----------------------------------------------
// 4. `const enum`
// -----------------------------------------------
// If you want to use enums purely for type safety and avoid the runtime
// object created by TypeScript, you can use `const enum`. The values are
// inlined by the compiler at compile time, leading to more efficient
// generated JavaScript.

// a) Const Enum Definition:
const enum LogLevel {
  ERROR,
  WARN,
  INFO,
  DEBUG
}

let currentLogLevel = LogLevel.WARN;

// What this looks like in the compiled JavaScript:
// The compiler replaces `LogLevel.WARN` with its literal value `1`.
// `let currentLogLevel = 1;`
// This is more performant as there's no object to look up.


// b) Using a `const enum` in a `switch` statement:
function log(message: string, level: LogLevel) {
  switch (level) {
    case LogLevel.ERROR:
      console.error(`[ERROR] ${message}`);
      break;
    case LogLevel.WARN:
      console.warn(`[WARN] ${message}`);
      break;
    // ...
  }
}

log("This is a test warning.", LogLevel.WARN);


/*
   -----------------------------------------------
   Key Differences & Best Practices
   -----------------------------------------------
   - Numeric Enums: The default. Useful when the underlying value doesn't
     matter but a unique integer is needed. Prone to issues if reordered.
     Supports reverse mapping.

   - String Enums: Preferable for most modern applications. Provides more
     meaningful and debuggable values at runtime. More flexible and less
     error-prone. Does NOT support reverse mapping.

   - `const enum`: The most performant option if you only need the enum
     for type checking and don't need the runtime object (e.g., to iterate
     over it or get keys).

   - **General Rule**: Favor **String Enums** or **Union Types of String
     Literals** (`type Direction = 'up' | 'down';`) over numeric enums
     unless you have a specific reason to use the numbers (e.g., a defined
     API contract).
*/

/*
   ===============================================
   Summary
   ===============================================
   - **Enums**: Define a set of named constants to improve code readability
     and type safety.
   - **Types**:
     - **Numeric Enums**: Default, auto-incrementing integers.
     - **String Enums**: Must be explicitly initialized with strings.
   - **Benefits**: Replaces "magic numbers," enforces valid values, and makes
     code more expressive.
   - **`const enum`**: A compile-time-only enum that gets inlined in the
     JavaScript output for better performance.
*/