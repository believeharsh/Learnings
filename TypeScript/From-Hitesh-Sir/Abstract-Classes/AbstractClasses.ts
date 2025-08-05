// @ts-nocheck
// This directive is used here ONLY for demonstration purposes to allow
// compilation despite intentional errors in the examples.
// DO NOT use @ts-nocheck in your actual production code.

/*
   ===============================================
   TypeScript Feature: `abstract class`
   ===============================================
*/

/*
   -----------------------------------------------
   1. Abstract Classes (`abstract` keyword)
   -----------------------------------------------
   An **abstract class** is a special type of class that serves as a blueprint
   for other classes. It cannot be instantiated directly; it can only be
   extended (subclassed) by other classes.

   Abstract classes are designed to be a base class that provides a common
   structure and some shared implementation, while delegating certain
   methods to its child classes for specific implementation.

   What it means: An abstract class can contain both concrete (implemented)
   methods and properties, as well as **abstract methods** and properties,
   which are declared without an implementation.

   Why use it:
   - Enforce a Contract: It forces child classes to implement specific methods
     and properties, guaranteeing a consistent API across a family of related objects.
   - Code Reusability: It can provide shared, reusable code in its concrete
     methods, reducing duplication in child classes.
   - Design Pattern: It is a core part of many design patterns, such as the
     Template Method pattern, where the abstract class defines the algorithm
     and the child classes fill in the specific steps.
   - Type Safety: It provides strong type checking for a family of related
     classes at compile time.
*/


// -----------------------------------------------
// 2. Defining and Using an Abstract Class
// -----------------------------------------------

// a) Abstract Class and Abstract Method:
// The `abstract` keyword is used for the class itself and for any
// methods or properties that are left unimplemented.

abstract class Vehicle {
  // A concrete property that all child classes will have.
  public manufacturer: string;

  // A concrete constructor that can be called by child classes.
  constructor(manufacturer: string) {
    this.manufacturer = manufacturer;
  }

  // A concrete method with an implementation that child classes can use.
  public honk(): void {
    console.log("Honk honk!");
  }

  // An abstract method without an implementation.
  // Any class that extends `Vehicle` MUST implement this method.
  public abstract drive(): void;

  // An abstract method with a required parameter.
  public abstract startEngine(key: string): boolean;
}

// b) Rules of Abstract Classes:
// - You cannot create an instance of an abstract class.
// const myVehicle = new Vehicle("Tesla"); // Error: Cannot create an instance of an abstract class.


// -----------------------------------------------
// 3. Extending an Abstract Class
// -----------------------------------------------
// A "concrete" (non-abstract) child class must provide an implementation for
// all the abstract members of its parent.

class Car extends Vehicle {
  // The child class must call the parent's constructor using `super()`.
  constructor(manufacturer: string) {
    super(manufacturer);
  }

  // We MUST implement the `drive()` method from the abstract parent class.
  public drive(): void {
    console.log(`The ${this.manufacturer} car is now driving.`);
  }

  // We MUST also implement `startEngine()`.
  public startEngine(key: string): boolean {
    console.log(`Starting the ${this.manufacturer} car with key: ${key}`);
    return true;
  }

  // We can also have new methods specific to the child class.
  public lockDoors(): void {
    console.log("Doors are now locked.");
  }
}

// c) Using the Concrete Class:
const myCar = new Car("Ford");
myCar.honk();         // Calls the concrete method from the parent class.
myCar.drive();        // Calls the implemented method from the child class.
myCar.lockDoors();    // Calls the specific method from the child class.


// -----------------------------------------------
// 4. Abstract Classes vs. Interfaces
// -----------------------------------------------
// While both abstract classes and interfaces define a contract, they have key differences.

// | Feature                      | Abstract Class                                    | Interface                                      |
// |------------------------------|---------------------------------------------------|------------------------------------------------|
// | **Instantiation** | Cannot be instantiated.                           | Cannot be instantiated.                        |
// | **Implementation** | Can contain both abstract (no impl.) and concrete (with impl.) methods/properties. | Can only contain method/property declarations (no implementation). |
// | **Inheritance** | A class can `extend` only **one** abstract class. | A class can `implement` **multiple** interfaces. |
// | **Access Modifiers** | Can define `public`, `private`, and `protected` members. | Cannot define access modifiers. All members are public by default. |
// | **Constructors** | Can have a constructor.                           | Cannot have a constructor.                     |

// When to choose an Abstract Class:
// - When you have a strong "is-a" relationship (e.g., a `Car` is a `Vehicle`).
// - When you want to share common implementation details and properties among
//   a group of related classes.
// - When you need to use access modifiers like `protected` to share members
//   with child classes but not the public.

// When to choose an Interface:
// - When you want to define a contract for an unrelated group of classes.
//   (e.g., a `Car` and a `Boat` can both implement a `Drivable` interface).
// - When you need to implement multiple contracts on a single class.
// - When you are defining a contract for objects that may not even be
//   classes (e.g., a plain object literal).


/*
   ===============================================
   Summary
   ===============================================
   - **Abstract Class**: A base class that cannot be instantiated, designed
     to be extended by child classes.
   - **Key Features**: Can contain both implemented methods and `abstract`
     methods that must be implemented by child classes.
   - **Benefits**: Enforces a consistent API, promotes code reuse, and provides
     a clear inheritance hierarchy.
   - **Distinction from Interface**: Abstract classes can contain implementation
     and a constructor, and a class can only extend one. Interfaces contain
     only declarations, but a class can implement many.
*/