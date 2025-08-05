// @ts-nocheck
// This directive is used here ONLY for demonstration purposes to allow
// compilation despite intentional errors in the examples.
// DO NOT use @ts-nocheck in your actual production code.

/*
   ===============================================
   TypeScript Features: `public` and `private` Keywords
   ===============================================
*/

/*
   -----------------------------------------------
   1. Access Modifiers in TypeScript
   -----------------------------------------------
   Access modifiers are keywords that control the visibility of a class's
   members (properties, methods, and constructors). TypeScript provides three
   main access modifiers: `public`, `private`, and `protected`.

   These modifiers are a core concept of Object-Oriented Programming (OOP)
   and are enforced at compile time in TypeScript. In the compiled
   JavaScript output, these modifiers are removed, so they don't affect
   runtime behavior (though there are some libraries that add runtime checks
   for private members).

   What they mean: They dictate where a class member can be accessed or
   called from.

   Why use them:
   - Encapsulation: To hide the internal implementation details of a class
     and expose only what's necessary, which is a core principle of OOP.
   - Data Protection: To prevent direct, uncontrolled modification of a
     class's internal state.
   - API Clarity: To clearly define the public "API" of a class that other
     code can safely interact with.
*/


/*
   -----------------------------------------------
   2. `public` Keyword
   -----------------------------------------------
   The `public` keyword is the **default** access modifier for all class
   members in TypeScript. If you don't explicitly specify an access modifier,
   it is assumed to be `public`.

   What it means: A `public` member is accessible from anywhere. This includes
   within the class itself, by instances of the class, and by any child classes.

   When to use it:
   - For members that are part of the class's public interface or "API."
   - For methods or properties that other parts of your application need to
     read or call directly.
*/

// a) Basic `public` example:
class Employee {
  public id: number;         // Public member (explicit)
  name: string;              // Also public (default)
  age: number;               // Also public (default)

  constructor(id: number, name: string, age: number) {
    this.id = id;
    this.name = name;
    this.age = age;
  }

  public getDetails(): string { // Public method (explicit)
    return `ID: ${this.id}, Name: ${this.name}, Age: ${this.age}`;
  }
}

const employee = new Employee(1, "Alice", 30);

// All members are accessible from outside the class:
console.log(employee.id);          // OK, prints 1
console.log(employee.name);        // OK, prints "Alice"
console.log(employee.getDetails());// OK, prints the details string

employee.age = 31; // OK, public members can be modified directly
console.log(`Alice's new age: ${employee.age}`);


/*
   -----------------------------------------------
   3. `private` Keyword
   -----------------------------------------------
   The `private` keyword is used to mark a class member as private.

   What it means: A `private` member is only accessible from **within the class
   where it is defined**. It cannot be accessed by instances of the class,
   or by any child classes that extend it.

   When to use it:
   - For internal data or "state" of the class that should not be exposed.
   - For helper methods that are only used internally by other methods in
     the same class.
   - To enforce the principle of encapsulation and prevent direct manipulation
     of an object's internal workings.
*/

// b) Basic `private` example:
class BankAccount {
  public owner: string;
  private _balance: number; // Convention to use an underscore for private properties

  constructor(owner: string, initialBalance: number) {
    this.owner = owner;
    this._balance = initialBalance;
  }

  public deposit(amount: number) {
    if (amount > 0) {
      this._balance += amount;
      console.log(`Deposited ${amount}. New balance: ${this._balance}`);
    }
  }

  public withdraw(amount: number) {
    if (amount > 0 && amount <= this._balance) {
      this._balance -= amount;
      console.log(`Withdrew ${amount}. New balance: ${this._balance}`);
    } else {
      console.log("Insufficient funds.");
    }
  }

  // A public getter method to safely expose the balance
  public getBalance(): number {
    return this._balance;
  }

  // A private helper method used only internally
  private logTransaction(amount: number, type: string) {
    console.log(`Transaction of type '${type}' for amount ${amount} occurred.`);
  }
}

const account = new BankAccount("Bob", 100);

// Public members are accessible:
console.log(account.owner);      // OK, prints "Bob"
account.deposit(50);             // OK, uses a public method

// Private members are NOT accessible from outside:
// console.log(account._balance); // Error: Property '_balance' is private and only accessible within class 'BankAccount'.
// account._balance = 1000;       // Error: Cannot assign to '_balance' because it is a private property.
// account.logTransaction(10, "deposit"); // Error: Property 'logTransaction' is private and only accessible within class 'BankAccount'.

// Accessing the private member via a public method (the correct way):
console.log(`Current balance: ${account.getBalance()}`);


// c) `private` with Class Constructor:
// A constructor can also be marked as private to prevent direct instantiation
// of a class from outside. This is useful for creating a "Singleton" pattern.
class DatabaseConnection {
  private static instance: DatabaseConnection;

  private constructor() {
    // Private constructor prevents new DatabaseConnection() from being called.
  }

  public static getInstance(): DatabaseConnection {
    if (!DatabaseConnection.instance) {
      DatabaseConnection.instance = new DatabaseConnection();
    }
    return DatabaseConnection.instance;
  }
}

// const conn = new DatabaseConnection(); // Error: Constructor of class 'DatabaseConnection' is private.
const conn1 = DatabaseConnection.getInstance(); // OK
const conn2 = DatabaseConnection.getInstance(); // OK, returns the same instance as conn1

console.log(conn1 === conn2); // Prints `true`


/*
   ===============================================
   Summary
   ===============================================
   - **Access Modifiers**: Keywords (`public`, `private`, `protected`) that
     control visibility and access to class members.
   - **`public`**: The default. Members are accessible from anywhere.
   - **`private`**: Members are accessible ONLY within the class where they
     are defined. Encapsulation is the primary reason to use this.
   - **Best Practice**: Strive to keep class properties `private` and provide
     `public` methods (getters/setters) to control how that data is
     read and modified. This leads to more robust, maintainable, and
     predictable code.
*/