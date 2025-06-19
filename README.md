# JavaScript Important Questions and Answers

This README provides a collection of important JavaScript questions and answers for interview preparation and revision. It includes detailed explanations on key JavaScript concepts, with extra focus on callback functions, promises, async/await, loops, and recursion.

---

## Table of Contents

1. [Basic Concepts](#basic-concepts)
2. [Callback Functions](#callback-functions)
3. [Promises](#promises)
4. [Async/Await](#asyncawait)
5. [Loops](#loops)
6. [Recursion](#recursion)
7. [More Questions](#more-questions)

---

## Basic Concepts

**Q1: What is JavaScript?**  
A: JavaScript is a high-level, interpreted scripting language used primarily for web development to add interactivity to websites.

**Q2: What are the different data types in JavaScript?**  
A: String, Number, Boolean, Undefined, Null, Object, Symbol, and BigInt.

**Q3: What is the difference between `let`, `const`, and `var`?**  
A:  
- `var` is function-scoped and can be re-declared.  
- `let` and `const` are block-scoped.  
- `let` can be reassigned, `const` cannot.

---

## Callback Functions

**Q4: What is a Callback Function in JavaScript?**  
A: A callback function is a function passed as an argument to another function, to be executed later.

**Detailed Explanation:**

Callbacks are essential for handling asynchronous operations (like API calls, reading files, etc.).  
Example:

```javascript
function fetchData(callback) {
  setTimeout(() => {
    const data = "Hello World";
    callback(data);
  }, 1000);
}

fetchData(function(result) {
  console.log(result); // "Hello World" (after 1 second)
});
```

**Problems with Callbacks:**  
- Callback Hell: Many nested callbacks can make code hard to read and maintain.
- Error Handling: Managing errors across multiple callbacks can be tricky.

---

## Promises

**Q5: What is a Promise in JavaScript?**  
A: A Promise is an object representing the eventual completion (or failure) of an asynchronous operation.

**Detailed Explanation:**

A promise has three states:
- Pending
- Fulfilled (resolved)
- Rejected

Example:

```javascript
const myPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('Success!');
  }, 1000);
});

myPromise.then(result => console.log(result)); // "Success!" after 1 second
```

**Chaining Promises:**  
Promises can be chained for sequential asynchronous operations.

```javascript
myPromise
  .then(result => result + " More data")
  .then(finalResult => console.log(finalResult)); // "Success! More data"
```

---

## Async/Await

**Q6: What is async/await in JavaScript?**  
A: `async` and `await` are keywords that simplify working with Promises, making asynchronous code look synchronous.

**Detailed Explanation:**

- An `async` function always returns a Promise.
- The `await` keyword can only be used inside an `async` function. It waits for the promise to resolve.

Example:

```javascript
async function fetchData() {
  try {
    let result = await myPromise;
    console.log(result);
  } catch (error) {
    console.error(error);
  }
}
fetchData();
```

**Benefits:**
- Cleaner, more readable code.
- Easier error handling using try/catch.

---

## Loops

**Q7: What are the different types of loops in JavaScript?**  
A:
- `for` loop
- `while` loop
- `do...while` loop
- `for...of` loop (for iterables)
- `for...in` loop (for object properties)

**Examples:**

```javascript
// for loop
for(let i = 0; i < 5; i++) {
  console.log(i);
}

// while loop
let i = 0;
while(i < 5) {
  console.log(i);
  i++;
}

// for...of loop
const arr = [1,2,3];
for (const item of arr) {
  console.log(item);
}
```

**When to use which?**
- Use `for` when you know the number of iterations.
- Use `while` when you don't know how many times to loop.
- Use `for...of` for arrays and iterable objects.
- Use `for...in` for object properties.

---

## Recursion

**Q8: What is recursion? How is it used in JavaScript?**  
A: Recursion is a process where a function calls itself directly or indirectly.

**Example: Factorial using recursion**

```javascript
function factorial(n) {
  if(n === 0) return 1;
  return n * factorial(n - 1);
}

console.log(factorial(5)); // 120
```

**Key Points:**
- Recursive functions must have a base case to prevent infinite loops.
- Useful for tasks like traversing trees, solving puzzles, etc.

---

## More Questions

**Q9: What is hoisting in JavaScript?**  
A: Hoisting is JavaScript's default behavior of moving declarations to the top of the current scope.

**Q10: What is event delegation?**  
A: Event delegation is a technique where a single event listener is added to a parent element to handle events for multiple child elements.

**Q11: What is the difference between `==` and `===`?**  
A:  
- `==` checks for value equality with type coercion.
- `===` checks for value and type equality.

**Q12: What are closures?**  
A: A closure is a function that has access to its outer function scope even after the outer function has returned.

```javascript
function outer() {
  let count = 0;
  return function() {
    count++;
    return count;
  }
}

const counter = outer();
console.log(counter()); // 1
console.log(counter()); // 2
```

**Q13: Explain the event loop.**  
A: The event loop is a mechanism that allows JavaScript to perform non-blocking asynchronous operations by putting them in a queue to be executed after the current call stack is empty.

---

## Contributing

Feel free to add more questions and answers!

---
