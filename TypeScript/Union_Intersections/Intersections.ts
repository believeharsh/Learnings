// if union types (|) are like an "OR" for types, then Intersection Types (&) are like an "AND" for types.

// What is an Intersection Type?
// An intersection type combines multiple types into a single new type that has all the properties of the combined types.

// Think of it like an "AND" condition for types, or merging objects.

// Example:


type Draggable = {
    drag: () => void;
};

type Resizable = {
    resize: () => void;
};

type DraggableResizable = Draggable & Resizable;
// In this example, DraggableResizable is a new type that must have both the drag method from Draggable and the resize method from Resizable.

// Why do we need Intersection Types?
// Intersection types are incredibly useful for:

// Composing types: You can build complex types by combining smaller, more focused types. This promotes modularity and reusability of type definitions.

// Adding functionality/properties to existing types: Imagine you have a base User type, and you want to define an AdminUser type that has all the properties of User plus some additional admin-specific properties.

// Mixing in utility types: You often see this pattern with utility types or higher-order components in React, where you're combining props.

// Creating "mixins" or "traits" with types: Mimicking patterns from other languages where you can "mix in" behavior.

// How to Use Intersection Types
// Let's look at some examples:

// 1. Combining Interfaces/Type Aliases (Most Common Use)
// TypeScript

// Define base interfaces
interface Person {
    name: string;
    age: number;
}

interface Employee {
    employeeId: string;
    department: string;
}

// Create an intersection type
type FullTimeEmployee = Person & Employee;

const john: FullTimeEmployee = {
    name: "John Doe",
    age: 35,
    employeeId: "EMP001",
    department: "Sales"
};

console.log(john.name);         // Output: John Doe
console.log(john.employeeId);   // Output: EMP001

// const jane: FullTimeEmployee = { name: "Jane" }; // Error: Property 'age' is missing... and 'employeeId', 'department'
// Here, FullTimeEmployee must have all the properties of both Person and Employee.

// 2. Adding Specific Properties to a Base Type
// TypeScript

interface Product {
    id: number;
    name: string;
    price: number;
}

type DiscountedProduct = Product & {
    discountPercentage: number;
    finalPrice: number;
};

const laptop: DiscountedProduct = {
    id: 101,
    name: "Gaming Laptop",
    price: 1500,
    discountPercentage: 10,
    finalPrice: 1350
};

// const anotherProduct: DiscountedProduct = { id: 102, name: "Mouse", price: 25 };
// Error: Property 'discountPercentage' is missing... and 'finalPrice'
// 3. Handling Conflicts in Properties
// What happens if the combined types have properties with the same name but different types?

// TypeScript

interface A {
    value: number;
}

interface B {
    value: string;
}

type Conflicting = A & B;

// const obj: Conflicting = { value: 10 }; // Error: Type 'number' is not assignable to type 'never'.
// const obj2: Conflicting = { value: "hello" }; // Error: Type 'string' is not assignable to type 'never'.

// The 'value' property here would be of type 'never', meaning it can never be assigned any value.
// This is because a value cannot be *both* a number and a string simultaneously.
// TypeScript correctly identifies this as an impossible type, making it 'never'.
// This is a safety mechanism to prevent logical errors.

// If properties have the same name and compatible types (e.g., both are `string`),
// then the resulting property will simply be that compatible type.
interface C {
    id: number;
}
interface D {
    id: number;
    description: string;
}
type Compatible = C & D; // id will still be number, description will be string

const item: Compatible = {
    id: 1,
    description: "Item description"
};
// 4. Intersection with Literal Types
// You can intersect with literal types, which is often used in advanced scenarios like "exact types" or specific constraints.

// TypeScript

type Status = "success" | "error";
type DataResult = { data: any };

type SuccessResponse = Status & DataResult & { status: "success" };

const goodResponse: SuccessResponse = {
    status: "success", // Must be "success"
    data: { message: "Operation completed" }, 
    
};

// const badResponse: SuccessResponse = { status: "error", data: {} };
// Error: Type '"error"' is not assignable to type '"success"'.

// Intersection vs. Union - Key Difference
// | Feature           | Union (|)                                     | Intersection (&)                                   |
// | :---------------- | :-------------------------------------------- | :------------------------------------------------- |

// | Meaning           | "OR" - one of these types                     | "AND" - all of these types                         |
// | Properties        | Has properties of any one of the types        | Has all properties of all combined types           |
// | Use Case          | When a value can be different shapes/types    | When a value must conform to multiple shapes/types |
// | Compiler Check    | Requires type narrowing before specific ops   | Ensures all properties are present and compatible  |

// Both union and intersection types are powerful tools that allow you to model complex data structures and relationships with high precision in TypeScript, leading to more robust and maintainable codebases.