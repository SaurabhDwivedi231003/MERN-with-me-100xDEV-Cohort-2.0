# Interview Preparation and Practice Notes for TypeScript

## Basic Information

In this document, we'll cover the basics of TypeScript, focusing on type annotations, function types, and practical examples to illustrate these concepts.

### Setting Up TypeScript

To set up TypeScript, follow these steps:

1. Install TypeScript globally:
    ``` npm install -g typescript ```
2. Create a Folder 
 ``` example.ts```
 3. Write some code TypeScript code.
4. Initialize/run  your TypeScript project:
   ```
   tsc -b
   ```
 5. A seperate/corresponding JS file will be created automatically
   ```example.js``` 
6. Run the file ```example.js``` using ```node .\example.js```
 
  
## Type Annotations in Functions
   
### Problem 1: How to give types to arguments of a function.

#### Solution

Use type annotation.

#### TypeScript Example

```typescript
"use strict";
function greet(firstName: string, lastName: string) {
    console.log("Hello " + firstName + " " + lastName);
}
greet("Saurabh", "Dwivedi");
```

#### JavaScript Example

```javascript
"use strict";
function greet(firstName, lastName) {
    console.log("Hello " + firstName + " " + lastName);
}
greet("Saurabh", "Dwivedi");
```

**Output**:  
Both TypeScript and JavaScript output the same result:  
```
Hello Saurabh Dwivedi
```

### Problem 2: Creating a sum function to add two numbers with return type annotation.

#### Solution

Explicitly specify the return type.

#### TypeScript Example

```typescript
"use strict";
function sum(a: number, b: number): number {
    return a + b;
}
let value = sum(4, 6);
console.log(value);
```

#### JavaScript Equivalent

```javascript
"use strict";
function sum(a, b) {
    return a + b;
}
let value = sum(4, 6);
console.log(value);
```

**Output**:  
Both TypeScript and JavaScript output the same result:  
```
10
```

### Problem 3: Returning true or false based on if the user is 18+.

#### Solution

Define a function with a boolean return type.

#### TypeScript Example

```typescript
"use strict";
function checkAge(age: number): boolean {
    return age >= 18;
}
let result = checkAge(20);
console.log(result);
```

#### JavaScript Equivalent

```javascript
"use strict";
function checkAge(age) {
    return age >= 18;
}
let result = checkAge(20);
console.log(result);
```

**Output**:  
Both TypeScript and JavaScript output the same result:  
```
true
```


### Problem 4: Create a function that takes another function as input and runs it after 1 second.
***( Callbacks )***

#### TypeScript Example

```typescript
"use strict";
function runAfter(fn: () => number) {
    setTimeout(fn, 1000);
}
runAfter(function() {
    console.log("Inside function");
    return 10;
});
```

#### JavaScript Equivalent

```javascript
"use strict";
function runAfter(fn) {
    setTimeout(fn, 1000);
}
runAfter(function() {
    console.log("Inside function");
    return 10;
});
```

**Output**:  
Both TypeScript and JavaScript output the same result, executing the function after 1 second and logging "Inside function".



### Problem 5: Assigning a type to an object using interfaces

#### TypeScript Example

```typescript
interface User {
    firstName: string;
    lastName: string;
    email: string;
    age: number;
}

function isLegal(user: User): boolean {
    return user.age >= 18;
}

const user = {
    firstName: "Saurabh",
    lastName: "Dwivedi",
    email: "saurabh@gmail.com",
    age: 20
};

console.log(isLegal(user));
```

**Output**:  
```
true
```

### Problem 6: Using union types for function arguments

#### TypeScript Example

```typescript
type GreetArt = number | string | boolean;
function greeting(id: GreetArt) {
    console.log(id);
}

greeting(1);
greeting("1");
greeting(true);
```

**Output**:  
```
1
"1"
true
```

### Problem 7: Using intersection types

#### TypeScript Example

```typescript
type Employee = {
    name: string;
    startDate: Date;
}

interface Manager {
    name: string;
    department: string;
}

type TechLead = Employee & Manager;
const techLead: TechLead = {
    name: "Seenu",
    startDate: new Date(),
    department: "Engineering"
};

console.log(techLead);
```

**Output**:  
```
{ name: 'Seenu', startDate: [current date], department: 'Engineering' }
```

### Problem 8: Creating an array type and finding the maximum value

#### TypeScript Example

```typescript
type NumberArr = number[];
function maxValue(arr: NumberArr): number {
    let max = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > max) { max = arr[i]; }
    }
    return max;
}

console.log(maxValue([1, 2, 4, 9]));
```

**Output**:  
```
9
```


These examples illustrate the similarities and differences between TypeScript and JavaScript, particularly in terms of type annotations and syntax. Practice them to solidify your understanding.

## Interview Questions and Answers

### Q1: What are the benefits of using TypeScript over JavaScript?

**A1**: TypeScript offers benefits such as static typing, which helps catch errors during development, improved code maintainability and scalability, and better IDE support with features like IntelliSense.

### Q2: How do you define types for function arguments and return values in TypeScript?

**A2**: Types for function arguments and return values are defined using type annotations. For example:
```typescript
function greet(firstName: string, lastName: string): void {
    console.log("Hello " + firstName + " " + lastName);
}
```

### Q3: Explain the concept of type inference in TypeScript.

**A3**: Type inference is TypeScript's ability to deduce the types of variables, parameters, and return values based on their usage. This allows developers to write cleaner code without explicitly specifying types in every instance.

### Q4: What is a callback function, and how is it used in JavaScript/TypeScript?

**A4**: A callback function is a function passed as an argument to another function, which is then invoked inside the outer function. Callbacks are commonly used for asynchronous operations, event handling, and functional programming paradigms.

### Q5: How does TypeScript help in catching errors early in the development process?

**A5**: TypeScript's static typing allows for type checking at compile time, which helps catch errors such as type mismatches, missing properties, and function arity issues before runtime, leading to more robust and reliable code.


### Advanced Interview Questions and Answers

### Q6: What are the differences between interfaces and abstract classes in TypeScript?

**A6**: 
- **Interfaces**: Interfaces are used to define contracts for objects. They can only declare the shape of an object but cannot contain any implementation. Interfaces are purely a compile-time construct and do not generate any JavaScript code.
  
- **Abstract Classes**: Abstract classes can contain both method signatures (like interfaces) and method implementations. They can also have constructors and member variables. Abstract classes are partially implemented and can provide default behavior for derived classes to override. Unlike interfaces, abstract classes generate JavaScript code.

### Q7: Explain the concept of generics in TypeScript and provide an example.

**A7**: Generics allow you to create reusable components that can work with a variety of data types. They enable you to create functions, classes, and interfaces that can work with any data type rather than a specific one.

Example:
```typescript
function identity<T>(arg: T): T {
    return arg;
}

let output = identity<string>("hello");
console.log(output); // Output: hello
```

### Q8: How does TypeScript support asynchronous programming, and what are some common approaches?

**A8**: TypeScript supports asynchronous programming using promises, async/await syntax, and callbacks.
- **Promises**: Promises represent a value that might be available now, or in the future, or never. They allow you to handle asynchronous operations in a more readable and manageable way.
- **Async/Await**: Async functions in TypeScript allow you to write asynchronous code that looks synchronous. The `await` keyword is used to wait for a promise to resolve before proceeding further.
- **Callbacks**: Callbacks are a traditional way of handling asynchronous operations in JavaScript/TypeScript, but they can lead to callback hell or difficult-to-read code.

### Q9: Discuss the benefits and limitations of using decorators in TypeScript.

**A9**: 
- **Benefits**: Decorators provide a way to add metadata and modify the behavior of classes, methods, and properties at design time. They enable cleaner and more modular code by separating concerns such as logging, authentication, and validation from the core business logic.
  
- **Limitations**: Decorators are experimental and may not be suitable for production use in all scenarios. They can make code harder to understand and debug, especially when used excessively. Decorators also have limited support for some use cases, such as decorators on function expressions and variable declarations.

### Q10: How does TypeScript handle type compatibility, and what are the differences between structural typing and nominal typing?

**A10**: 
- **Type Compatibility**: TypeScript uses a structural type system, where types are based on the shape of objects rather than their names or explicit declarations. This allows TypeScript to infer types and check for compatibility based on the members that the types have.
  
- **Structural Typing**: In structural typing, types are considered compatible if their members are compatible. This means that TypeScript focuses on the shape of objects rather than their names or explicit declarations.
  
- **Nominal Typing**: Nominal typing, on the other hand, relies on the explicit declaration of types. Types are considered compatible only if they have the same name or explicit declaration, regardless of their structure.

### Q11: Discuss the concept of intersection and union types in TypeScript. Provide examples.

**A11**: 
- **Intersection Types**: Intersection types allow you to combine multiple types into one. They represent a type that has all the properties of each of its constituent types.

Example:
```typescript
type A = { foo: number };
type B = { bar: string };
type C = A & B; // Intersection type
let obj: C = { foo: 123, bar: "hello" };
console.log(obj); // Output: { foo: 123, bar: "hello" }
```

- **Union Types**: Union types allow you to specify that a value can be of one of several types. They represent a type that can be one of several types.

Example:
```typescript
type MyType = string | number;
let value: MyType;
value = "hello"; // Valid
value = 123;     // Valid
```

### Q12: What are mapped types in TypeScript? Provide an example.

**A12**: Mapped types allow you to create new types by transforming each property of an existing type in a specific way. They are useful for creating new types based on existing ones.

Example:
```typescript
type Readonly<T> = {
    readonly [P in keyof T]: T[P];
};

interface Person {
    name: string;
    age: number;
}

const readOnlyPerson: Readonly<Person> = { name: "John", age: 30 };
readOnlyPerson.name = "Jane"; // Error: Cannot assign to 'name' because it is a read-only property
```

### Q13: Explain the concept of module resolution in TypeScript and discuss the differences between `Classic` and `Node` module resolution strategies.

**A13**: Module resolution in TypeScript refers to how TypeScript compiler resolves module dependencies in your project. There are two main strategies:
- **Classic**: In the classic strategy, TypeScript looks for modules using a combination of relative and non-relative paths. It starts from the file making the import and searches up the directory tree, looking for matching file names in `node_modules`.
- **Node**: The Node strategy mimics the module resolution behavior of Node.js. It searches for modules using Node's module resolution algorithm, which includes `node_modules` directories and the `NODE_PATH` environment variable.

### Q14: Discuss the concept of declaration merging in TypeScript and provide an example.

**A14**: Declaration merging allows you to combine multiple declarations with the same name into a single definition. It is particularly useful for extending interfaces or types across multiple files.

Example:
```typescript
interface Animal {
    name: string;
}

interface Animal {
    age: number;
}

let pet: Animal;
pet = { name: "Dog", age: 5 };
```

In this example, TypeScript merges both interface declarations into a single `Animal` interface with properties `name` and `age`.
