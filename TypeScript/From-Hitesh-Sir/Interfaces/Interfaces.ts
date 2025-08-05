// @ts-nocheck
// This directive is used here ONLY for demonstration purposes to allow
// compilation despite intentional errors in the examples.
// DO NOT use @ts-nocheck in your actual production code.

/*
   ===============================================
   TypeScript Feature: Interfaces
   ===============================================
*/

/*
   -----------------------------------------------
   1. Interfaces (`interface` keyword)
   -----------------------------------------------
   An **Interface** in TypeScript is a powerful feature used to define the
   "shape" of an object. It's a contract that an object must adhere to,
   specifying what properties it must have, their names, and their types.
   Interfaces are a core concept of static typing and object-oriented
   programming.

   What it means: An object is considered compatible with an interface if it
   has all the properties and methods required by that interface, with the
   correct types. This is known as "structural typing" or "duck typing."

   Why use it:
   - Consistency: Ensures that objects used in your application have a
     consistent structure.
   - Code Documentation: Interfaces are self-documenting; they clearly define
     the expected data structure.
   - Type Safety: TypeScript will throw a compile-time error if an object
     doesn't conform to its declared interface, catching bugs early.
   - Decoupling: They allow you to define the contract without writing the
     implementation, promoting loose coupling between different parts of your code.
   - Class Contracts: A class can `implement` an interface, guaranteeing it
     adheres to that specific contract.
*/

// a) Basic Interface Definition:
interface User {
  id: number;
  name: string;
  email?: string; // Optional property
  readonly registeredDate: Date; // Readonly property
}

const alice: User = {
  id: 1,
  name: "Alice",
  registeredDate: new Date()
};

const bob: User = {
  id: 2,
  name: "Bob",
  email: "bob@example.com",
  registeredDate: new Date()
};

// alice.id = 3; // OK, can reassign
// alice.registeredDate = new Date(); // Error: Cannot assign to 'registeredDate' because it is a read-only property.

// Using interfaces as function parameters:
function greetUser(user: User) {
  console.log(`Hello, ${user.name}!`);
  if (user.email) {
    console.log(`Email: ${user.email}`);
  }
}

greetUser(alice);
greetUser(bob);

// An object that doesn't match the interface will cause an error:
// const charlie = { id: 3, username: "Charlie" };
// greetUser(charlie); // Error: Argument of type '{ id: number; username: string; }' is not assignable to parameter of type 'User'.


// b) Interface for Function Types:
// You can also define the shape of a function signature with an interface.
interface GreetFunction {
  (name: string): string;
}

const sayHello: GreetFunction = (name) => {
  return `Hello, ${name}`;
};

const sayGoodbye: GreetFunction = (name) => {
  return `Goodbye, ${name}`;
};

console.log(sayHello("Alice"));
console.log(sayGoodbye("Bob"));


// c) Interface Extension and Implementation:
// Interfaces can extend one another, inheriting their properties.
interface Person {
  name: string;
  age: number;
}

interface Employee extends Person {
  employeeId: number;
  department: string;
}

const employee: Employee = {
  name: "Charlie",
  age: 45,
  employeeId: 101,
  department: "IT"
};

console.log(`Employee: ${employee.name} is in the ${employee.department} department.`);

// Classes can also implement interfaces to enforce a contract.
interface Car {
  start(): void;
  drive(distance: number): void;
}

class MyCar implements Car {
  start() {
    console.log("Car started.");
  }

  drive(distance: number) {
    console.log(`Driving ${distance} miles.`);
  }

  // The class must implement all methods defined in the interface.
  // Not having `drive` would cause a compilation error.
}

const myCar = new MyCar();
myCar.start();
myCar.drive(10);


/*
   ===============================================
   2. Type vs. Interface: The Key Differences
   ===============================================
   This is a very common question, and for many basic object shapes,
   `type` and `interface` are functionally interchangeable. However, there
   are specific differences that influence which one you should choose.

   | Feature                      | `interface`                                      | `type`                                           |
   |------------------------------|--------------------------------------------------|--------------------------------------------------|
   | **Defining an Object Shape** | Yes, this is their primary use case.             | Yes, often with a similar syntax.                |
   | **Extending** | Uses the `extends` keyword. Can extend other interfaces and classes. | Uses the `&` (intersection) operator. Can extend any type. |
   | **Declaration Merging** | **YES.** Two interfaces with the same name will be merged. This is a key difference. | **NO.** A type alias cannot be declared more than once. Will cause a compiler error. |
   | **Unions/Intersections** | Cannot define a union directly. Can be part of a union/intersection type. | **YES.** Can define complex types like `string | number` or `TypeA & TypeB`. |
   | **Primitives/Tuples/Literals** | Cannot be used for these types directly.         | **YES.** Can alias any type, e.e. `type ID = string | number`, `type Point = [number, number]`. |
   | **Class Implementation** | A class can `implement` an interface.            | A class can `implement` a type alias with an object shape. |
   | **Readability** | Often preferred for object-oriented design and public APIs due to clear intent. | More concise for complex combinations of types. |

   **When to Use `interface`:**
   - When defining the shape of an object.
   - When a class needs to implement a contract (`implements`).
   - When you need **Declaration Merging**, a useful feature for library
     authors who want to augment existing types.

   **When to Use `type`:**
   - When you need to define a union or intersection type (`string | number`).
   - When you need to alias a primitive type, tuple, or literal type.
   - When you need to use more advanced type features like mapped types or
     conditional types.

   **General Best Practice:**
   A common recommendation from the TypeScript team and the community is to **use `interface` for public APIs and object shapes, and use `type` for everything else.** This gives you the best of both worlds, leveraging the unique features of each while maintaining a consistent coding style.
*/

/*
   ===============================================
   Summary
   ===============================================
   - **Interfaces**: Define the shape/contract for an object. They are a
     cornerstone of structural typing and class-based programming.
   - **Type Aliases**: Can be used for object shapes, but are more versatile
     for creating aliases for any kind of type, especially unions and tuples.
   - **Key Distinction**: The main difference is that `interface` supports
     declaration merging, while `type` does not. Choose `interface` for
     objects and classes, and `type` for everything else.
*/