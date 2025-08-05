// @ts-nocheck
// This directive is used here ONLY for demonstration purposes to allow
// compilation despite intentional errors in the examples.
// DO NOT use @ts-nocheck in your actual production code.

/*
   ===============================================
   TypeScript Feature: `protected` Keyword
   ===============================================
*/

/*
   -----------------------------------------------
   1. The `protected` Keyword
   -----------------------------------------------
   The `protected` keyword is another access modifier that controls the
   visibility of class members. It sits between `public` and `private` in
   terms of accessibility.

   What it means: A `protected` member is accessible from **within the class
   where it is defined, and also from within any classes that extend (inherit from)
   that class**. It is **not** accessible from an instance of the class itself
   (or an instance of a child class).

   Why use it:
   - Hierarchical Encapsulation: It allows a parent class to expose certain
     members to its children for specialized behavior, without exposing them to
     the outside world.
   - Code Reusability: It promotes the "inheritance" principle of OOP by
     allowing child classes to access and build upon the protected
     implementation details of their parent.
   - Controlled Access: It provides a more controlled form of access than `public`,
     but is more flexible than `private`, which is too restrictive for inheritance.
*/

// a) `protected` in a Base Class and Child Class:
// This is the core use case for the `protected` keyword.

class Animal {
  public name: string;
  protected species: string; // Accessible in Animal and any child classes.
  private age: number;       // Only accessible within the Animal class.

  constructor(name: string, species: string, age: number) {
    this.name = name;
    this.species = species;
    this.age = age;
  }

  public getSpecies(): string {
    // We can access 'this.species' here because we are inside the parent class.
    return this.species;
  }

  protected getAge(): number {
    // This method is protected, so it can be called by child classes,
    // but not by instances from the outside.
    return this.age;
  }
}

class Dog extends Animal {
  constructor(name: string, age: number) {
    // Calling the parent class's constructor.
    super(name, "Canis familiaris", age);
  }

  public speak() {
    // We can access the protected member `this.species` from the parent
    // class here, as Dog is a child of Animal.
    console.log(`My name is ${this.name}, and I am a ${this.species}.`);
    // The `this.age` property is private in the parent, so we cannot access it here.
    // console.log(this.age); // Error: Property 'age' is private.

    // We can, however, call the protected method from the parent class.
    console.log(`My age is ${this.getAge()}.`);
  }
}

const animal = new Animal("Generic Animal", "Unknown", 5);
const dog = new Dog("Fido", 3);

// Accessing members from an instance:
console.log(animal.name); // OK, `name` is public.
console.log(dog.name);    // OK, `name` is public.

// Accessing a protected member from an instance is an error:
// console.log(animal.species); // Error: Property 'species' is protected.
// console.log(dog.species);    // Error: Property 'species' is protected.

dog.speak(); // OK, this method is public and uses the protected properties internally.


// b) `protected` Constructor:
// A protected constructor is a pattern for creating a base class that cannot
// be instantiated directly, but can be extended by a child class.

abstract class BaseLogger {
  protected logMessage: string;

  // The constructor is protected, so you can't create `new BaseLogger()`.
  protected constructor(message: string) {
    this.logMessage = message;
  }
}

class FileLogger extends BaseLogger {
  constructor(message: string) {
    // Must call `super()` to initialize the protected parent constructor.
    super(message);
    console.log("FileLogger created.");
  }

  public logToFile() {
    // We can access `this.logMessage` because it's protected in the parent.
    console.log(`Logging to file: ${this.logMessage}`);
  }
}

// const base = new BaseLogger("hello"); // Error: Constructor of class 'BaseLogger' is protected.
const fileLogger = new FileLogger("This is a log message."); // OK
fileLogger.logToFile();


/*
   ===============================================
   2. Summary of Access Modifiers
   ===============================================
   | Access Modifier | Accessibility                                          |
   |-----------------|--------------------------------------------------------|
   | **`public`** | **Anywhere.** From the defining class, child classes, and instances. |
   | **`protected`** | **From the defining class and its child classes.** |
   | **`private`** | **Only from the defining class itself.** |

   **Choosing the right modifier:**
   - Use `public` for members that form the public API of a class.
   - Use `private` for members that are internal implementation details
     and should never be touched by external code, including child classes.
   - Use `protected` for members that are part of the class's internal
     implementation but are intended to be shared with and possibly
     customized by child classes.
*/