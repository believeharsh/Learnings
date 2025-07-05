// What is enum in TypeScript?
// An enum (short for "enumeration") is a way to define a set of named constants. It allows you to create a collection of related values that are more readable and type-safe than just using magic numbers or strings.

// Think of it as creating your own custom data type where the possible values are limited to a predefined set.

// Key characteristics of enum:

// Readability: Instead of using arbitrary numbers or strings (e.g., if (status === 0)), you can use meaningful names (e.g., if (status === OrderStatus.Pending)), making your code much easier to understand.

// Type Safety: When you define a variable with an enum type, TypeScript will ensure that you can only assign one of the predefined enum members to it. This prevents errors from typos or invalid values.

// Self-documenting: The enum itself acts as documentation, clearly stating the possible states or options for a particular concept.

// How enum works and its types:
// TypeScript enums can be numeric, string-based, or a mix.

// 1. Numeric Enums (Default)
// By default, enums are numeric. The first member is initialized with 0, and subsequent members are auto-incremented.



enum Direction_Numeric {
    Up,      // 0
    Down,    // 1
    Left,    // 2
    Right    // 3
}

let playerDirection: Direction_Numeric = Direction_Numeric.Up;
console.log(playerDirection); // Output: 0

if (playerDirection === Direction_Numeric.Up) {
    console.log("Player is moving up.");
}

// You can also manually initialize numeric enums:


enum HttpStatusCode {
    OK = 200,
    BadRequest = 400,
    NotFound = 404,
    InternalServerError = 500
}

let responseStatus : HttpStatusCode ; 

responseStatus = HttpStatusCode.NotFound;

console.log(responseStatus); // Output: 200

if (responseStatus === HttpStatusCode.NotFound) { // This comparison now makes sense
    console.log("Resource not found."); // This will now execute
}

// 2. String Enums
// String enums are often more readable and don't suffer from the "magic number" problem. Each member must be initialized with a string literal.


enum UserRole_string {
    Admin = "ADMIN",
    Editor = "EDITOR",
    Viewer = "VIEWER"
}

let currentUserRole :  UserRole_string.Admin;
currentUserRole = UserRole_string.Admin ; 
console.log(currentUserRole); // Output: "ADMIN"

// important Note : Typescript help us to not write the code that will never be executed. so typescript already check the value of if condition, whether this will be true or false, if false then it will immediatly throw an error, so that we can resolve an issue. 

if (currentUserRole ===  UserRole_string.Admin) {
    console.log("User has editor privileges.");
}

// 3. Heterogeneous Enums (Less Common)
// You can mix numeric and string enum members, though this is generally discouraged for clarity.


enum Mixed {
    No = 0,
    Yes = "YES"
}

console.log(Mixed.No);  // Output: 0
console.log(Mixed.Yes); // Output: "YES"


// Is enum just a way of writing an object in TS?
// No, it's not just "a way of writing an object in TS," although it compiles to something that resembles an object in JavaScript.

// Here's the crucial distinction:

// TypeScript enum: At the TypeScript level, enum introduces a new type that has a fixed, predefined set of members. Its primary purpose is to provide type safety and readability for a collection of related named constants.

// TypeScript object / JavaScript object literal: These are general-purpose data structures that can hold arbitrary key-value pairs. Their structure is not typically constrained to a specific set of named constants unless you explicitly define an interface or type alias for them.

// What happens when TypeScript enum compiles to JavaScript?

// When compiled, a numeric enum typically becomes a JavaScript object that allows for both forward and reverse mapping (mapping name to value and value to name). A string enum compiles to an object with only forward mapping.

// Example (Numeric Enum Compilation):



// TypeScript:
enum Direction_random {
    Up,
    Down
}
// compiles to:

// JavaScript

// JavaScript:

// var  Direction_random ;
// (function (Direction) {
//     Direction[Direction["Up"] = 0] = "Up";
//     Direction[Direction["Down"] = 1] = "Down";
// })(Direction || (Direction = {}));

// As you can see,  Direction_random  becomes a JavaScript object with properties like Direction.Up (value 0) and Direction[0] (value "Up").

// Example (String Enum Compilation):

// TypeScript

// TypeScript:
enum UserRole {
    Admin = "ADMIN"
}
// compiles to:

// JavaScript

// JavaScript:
// var UserRole;
// (function (UserRole) {
//     UserRole["Admin"] = "ADMIN";
// })(UserRole || (UserRole = {}));

// Here, UserRole becomes a simple JavaScript object like { Admin: "ADMIN" }.

// Why this matters:

// Even though the compiled JavaScript might look like an object, the TypeScript enum provides strong type-checking guarantees before compilation. You can't accidentally assign an invalid number or string to an enum-typed variable, which is a key benefit that a plain JavaScript object or a general TypeScript object wouldn't inherently provide without extra manual validation.

// In summary:

// enum is a powerful TypeScript feature designed for scenarios where you need a fixed set of distinct, named values. It enhances code clarity, maintainability, and most importantly, provides compile-time type safety for these specific constant sets, going beyond what a general object could offer for this particular use case.