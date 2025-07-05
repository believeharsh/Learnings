// What is an Interface? (The Blueprint Analogy)
// In TypeScript, an interface is like that blueprint for an object.

// It describes the shape an object must have.

// It specifies what properties (data) an object should have, and what methods (functions) it should have.

// It doesn't contain any implementation details (like how a function works or what value a property holds). It just defines the names and types of those properties and methods.

// Example Blueprint (Interface):

// Let's say you want to build a "Car" object. What essential things does every car have?



interface CarBlueprint {
    // Every car MUST have a 'make' which is a string
    make: string;

    // Every car MUST have a 'model' which is a string
    model: string;

    // Every car MUST have a 'year' which is a number
    year: number;

    // Every car MIGHT have a 'color' which is a string (optional)
    color?: string; // The '?' makes it optional

    // Every car MUST have a 'start' method that takes no arguments and returns nothing (void)
    start(): void;

    // Every car MUST have a 'drive' method that takes a number (speed) and returns nothing (void)
    drive(speed: number): void;
}

// Why Do We Need Interfaces?
// Enforce Consistency (Quality Control):

// Just like a blueprint ensures all houses built from it have a kitchen, bedrooms, etc., an interface ensures all objects claiming to be of that type have the required properties and methods.

// This prevents you from accidentally creating a "Car" object that's missing a make or doesn't have a start() method.

// Improve Readability and Documentation:

// When you see function buildCar(blueprint: CarBlueprint), you immediately know what kind of data the buildCar function expects and what capabilities that data should have. It's self-documenting.

// Catch Errors Early (Before Your Code Runs!):

// TypeScript (your smart construction foreman) uses the interface to check your code before you even run it.

// If you try to create a Car object and forget to give it a model, TypeScript will yell at you right away in your code editor, saving you from bugs later.

// Define Contracts:

// Interfaces are great for defining "contracts" between different parts of your code, or even between your code and an external API.

// "If this API sends me a 'User' object, I expect it to have an id (number) and a name (string)."

// How Do You Use an Interface?
// You use an interface in two primary ways:

// 1. As a Type for Variables/Objects:
// You declare a variable and say, "This variable mySedan must follow the CarBlueprint interface."



// Here, we're building an actual car object based on the blueprint
let mySedan: CarBlueprint = {
    make: "Honda",
    model: "Civic",
    year: 2023,
    color: "Blue", // Optional property can be included or omitted
    start() {
        console.log("Engine started.");
    },
    drive(speed: number) {
        console.log(`Driving at ${speed} mph.`);
    }
};

mySedan.start();        // Output: Engine started.
mySedan.drive(60);      // Output: Driving at 60 mph.
console.log(mySedan.model); // Output: Civic

// --- What if we mess up? ---
/*
let invalidCar: CarBlueprint = {
    make: "Ford",
    year: 2020 // ERROR! Property 'model' is missing in type '{ make: string; year: number; }'
               // but required in type 'CarBlueprint'.
};

*/
// 2. With Classes (Implementing an Interface):
// Classes are like the "actual builders" that promise to follow the blueprint. When a class implements an interface, it must provide all the properties and methods defined in that interface.


class ElectricCar implements CarBlueprint {
    make: string;
    model: string;
    year: number;
    // color is optional, so we don't *have* to declare it here
    batteryCapacity: number; // Can have additional properties not in the interface

    constructor(make: string, model: string, year: number, capacity: number) {
        this.make = make;
        this.model = model;
        this.year = year;
        this.batteryCapacity = capacity;
    }

    start(): void {
        console.log("Electric motor hums to life.");
    }

    drive(speed: number): void {
        console.log(`Silently cruising at ${speed} km/h.`);
    }

    charge(): void {
        console.log("Charging battery...");
    }
}

let tesla: ElectricCar = new ElectricCar("Tesla", "Model S", 2024, 100);
tesla.start();
tesla.charge();

// In short, an interface is a structural contract that an object or class promises to fulfill. It's one of TypeScript's core features for building robust, scalable, and understandable codebases.


// Best Practices / Guidelines:
// Name your interfaces clearly: Use descriptive names, often starting with a capital letter (PascalCase).

// Use interface for object shapes and class contracts: This is its primary and most idiomatic use. For other types (unions, primitives aliases, etc.), type aliases are generally more appropriate.

// Favor interfaces over type aliases for object types when declaration merging is beneficial: If you anticipate that your type definition might need to be extended by external libraries or other parts of your application via declaration merging, use an interface.

// Keep interfaces focused: Design interfaces to describe specific, logical units of data or behavior. Don't create overly large or "God" interfaces.

// Documentation: Add comments to your interface members to explain their purpose, especially for complex or less obvious ones.

// By following these rules and guidelines, you'll be able to leverage TypeScript interfaces effectively to create robust, well-structured, and maintainable applications.