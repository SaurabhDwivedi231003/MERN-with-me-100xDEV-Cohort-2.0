# Basic Types in TypeScript

This document covers the basics of TypeScript, focusing on type annotations, function types, and practical examples to illustrate these concepts.

## Type Annotations

### Problem 1: How to give types to arguments of a function
#### Solution: Use type annotation

**TypeScript Example**
```typescript
function greet(firstName: string, lastName: string): void {  
    console.log("Hello " + firstName + " " + lastName);
}
greet("Saurabh", "Dwivedi"); 
```

### Problem 2: Create a function to add two numbers with a return type
#### Solution: Explicitly specify the return type

**TypeScript Example**
```typescript
function sum(a: number, b: number): number { 
    return a + b;
}
let value = sum(4, 6);
console.log(value); // Output: 10
```

### Problem 3: Return true or false based on if the user is 18+
**TypeScript Example**
```typescript
function checkAge(age: number): boolean {
    return age >= 18;
}   
let result = checkAge(20);
console.log(result); // Output: true
```

## Callbacks

### Problem 4: Create a function that takes another function as an input and runs it after 1 second
**TypeScript Example**
```typescript
function runAfter(fn: () => number): void {
    setTimeout(fn, 1000);
}
runAfter(() => {
    console.log("Inside function");
    return 10;
});
```

## Interfaces

### Assigning a type to an object using interfaces

#### Problem: Create a function that returns true or false if the user is 18+
**Solution**: Use an interface

**TypeScript Example**
```typescript
interface User {   
    firstName: string,
    lastName: string,
    age: number
}

function isLegal(user: User): boolean {
    return user.age >= 18;
}

console.log(isLegal({
    firstName: "Saurabh",
    lastName: "Dwivedi",
    age: 19
})); // Output: true
```

## Union Types

### Problem: Define a function that accepts multiple types
**TypeScript Example**
```typescript
type GreetArt = number | string | boolean;

function greeting(id: GreetArt): void {
    console.log(id);
}

greeting(1);       // Output: 1
greeting("1");     // Output: "1"
greeting(true);    // Output: true
```

## Intersection Types

### Problem: Create a type that combines properties of multiple types/interfaces

**TypeScript Example**
```typescript
type Employee = {
    name: string,
    startDate: Date
}

interface Manager {
    name: string,
    department: string
}

type TechLead = Employee & Manager;

const t: TechLead = {
    name: "Seenu",
    startDate: new Date(),
    department: "Engineering"
}
console.log(t); // Output: { name: 'Seenu', startDate: <current date>, department: 'Engineering' }
```

### Note: Difference between Interface and Type
- **Interfaces** can be extended in a class.
- **Types** allow for union (|) and intersection (&).

## Arrays

### Problem: Find the maximum value in an array
**TypeScript Example**
```typescript
type NumberArr = number[];

function maxValue(arr: NumberArr): number {  
    let max = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > max) { max = arr[i]; }
    }
    return max;
}

console.log(maxValue([1, 2, 4, 9])); // Output: 9
```

## Summary

- **Type Annotations**: Use to specify the types of function arguments and return values.
- **Callbacks**: Functions can take other functions as arguments and execute them later.
- **Interfaces**: Define the shape of an object and can be reused.
- **Union Types**: Allow variables to have multiple types.
- **Intersection Types**: Combine multiple types into one.
- **Arrays**: Typed arrays ensure consistency and allow for operations like finding the maximum value.

These concepts help in writing cleaner, more maintainable, and error-free TypeScript code.