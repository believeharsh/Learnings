// @ts-nocheck
// This directive is used here ONLY for demonstration purposes to allow
// compilation despite intentional errors in the examples.
// DO NOT use @ts-nocheck in your actual production code.

/*
   ===============================================
   TypeScript Feature: Generics
   ===============================================
*/

/*
   -----------------------------------------------
   1. Generics (`<T>`)
   -----------------------------------------------
   **Generics** are a tool in TypeScript that allow you to create reusable
   components that can work with a variety of types, rather than being
   limited to a single one. Generics give you a way to create components
   that are both type-safe and flexible.

   The most common syntax involves using a type variable, typically `<T>`,
   to represent a type that will be passed into the component.

   What it means: Generics provide a placeholder for a type. When you use
   a generic component (like a function or a class), you specify what that
   placeholder type should be for that specific use case.

   Why use it:
   - Reusability: You can write one function or class that works with many types,
     instead of writing separate versions for each type.
   - Type Safety: It ensures that the types are consistent. The type of the input
     is linked to the type of the output, preventing errors.
   - Flexibility: It allows components to work with a wide range of data types.
   - Reduced `any` Usage: Generics are the preferred alternative to using `any`,
     as they provide type safety while retaining flexibility.
*/


// -----------------------------------------------
// 2. Generic Functions
// -----------------------------------------------
// The most common use case is a function that returns a value of the same
// type as its input. Without generics, you would have to use `any` and lose
// type safety.

// a) A Simple Generic Function:
function identity<T>(arg: T): T {
  return arg;
}

// When you call it, TypeScript can infer the type of `T` from the argument.
let output1 = identity("myString"); // Type of `T` is inferred as `string`.
console.log(output1);
console.log(`Type of output1: ${typeof output1}`);

// You can also explicitly specify the type.
let output2 = identity<number>(100); // Type of `T` is explicitly set to `number`.
console.log(output2);
console.log(`Type of output2: ${typeof output2}`);

// b) Generic Function with Multiple Type Variables:
// You can use multiple type variables, for example, to create a function
// that takes two arguments of potentially different types.
function pair<T, U>(first: T, second: U): [T, U] {
  return [first, second];
}

let myPair = pair("hello", 42); // Type is inferred as `[string, number]`.
console.log(`My pair: ${myPair}`);

// let myOtherPair = pair(1, "hello"); // Also valid. Type is `[number, string]`.


// -----------------------------------------------
// 3. Generic Interfaces
// -----------------------------------------------
// Interfaces can also be made generic to work with different types of data.

interface Box<T> {
  value: T;
}

let stringBox: Box<string> = { value: "Hello World" };
let numberBox: Box<number> = { value: 123 };

console.log(`String in box: ${stringBox.value}`);
console.log(`Number in box: ${numberBox.value}`);


// -----------------------------------------------
// 4. Generic Classes
// -----------------------------------------------
// You can define a generic class to create reusable data structures like
// queues, stacks, or linked lists.

class Container<T> {
  private items: T[] = [];

  addItem(item: T): void {
    this.items.push(item);
  }

  getItems(): T[] {
    return this.items;
  }
}

let numberContainer = new Container<number>();
numberContainer.addItem(10);
numberContainer.addItem(20);
// numberContainer.addItem("string"); // Error: Argument of type 'string' is not assignable to parameter of type 'number'.
console.log(`Numbers in container: ${numberContainer.getItems()}`);

let stringContainer = new Container<string>();
stringContainer.addItem("first");
stringContainer.addItem("second");
console.log(`Strings in container: ${stringContainer.getItems()}`);


// -----------------------------------------------
// 5. Generic Constraints
// -----------------------------------------------
// Sometimes you want to write a generic function that operates on a certain
// type of data, but not all types. You can use a generic constraint to
// limit the types that can be passed in.

// We use the `extends` keyword to define a constraint.
interface Lengthwise {
  length: number;
}

// This function now only accepts types that have a `length` property.
function getLength<T extends Lengthwise>(arg: T): number {
  return arg.length;
}

// These are valid because they have a `.length` property.
console.log(`Length of string: ${getLength("hello")}`);
console.log(`Length of array: ${getLength([1, 2, 3])}`);

// let obj = { count: 10 };
// getLength(obj); // Error: Argument of type '{ count: number; }' is not assignable to parameter of type 'Lengthwise'.


/*
   ===============================================
   Summary
   ===============================================
   - **Generics**: A way to create flexible and type-safe components
     that can work with any type.
   - **Syntax**: Uses angle brackets `<T>` to define a type variable (or
     a placeholder for a type).
   - **Benefits**: Promotes code reuse, provides compile-time type safety,
     and reduces the need for the `any` keyword.
   - **Common Uses**: Functions, interfaces, and classes where the logic
     is the same regardless of the data type.
   - **Constraints**: Use `extends` to restrict a generic to types that
     have a certain shape or property.
*/