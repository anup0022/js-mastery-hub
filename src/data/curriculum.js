// Complete JavaScript curriculum from Zero to Hero
// Each topic includes: title, description, content, code examples, quiz, and Code with Harry video

const curriculum = [
  // ============ MODULE 1: BASICS ============
  {
    id: 1,
    language: "javascript",
    module: "Getting Started",
    title: "Introduction to JavaScript",
    difficulty: "beginner",
    description: "What is JavaScript, its history, and where it runs.",
    videoId: "ER9SspLe4Hg",
    videoTitle: "Introduction to JavaScript | JavaScript Tutorial in Hindi #1",
    content: `JavaScript is the world's most popular programming language. It was created by Brendan Eich in 1995 in just 10 days while working at Netscape.

**What is JavaScript?**
- A high-level, interpreted programming language
- The language of the web — runs in every browser
- Can be used for frontend, backend (Node.js), mobile apps, and more
- Dynamically typed and prototype-based

**Where does JavaScript run?**
1. **Browser** — Chrome, Firefox, Safari all have JS engines
2. **Server** — Node.js lets you run JS on the server
3. **Mobile** — React Native, Ionic for mobile apps
4. **Desktop** — Electron for desktop apps

**Why Learn JavaScript?**
- #1 language on GitHub
- Required for all web development
- Huge ecosystem and community
- High demand in job market`,
    codeExamples: [
      {
        title: "Your First JavaScript",
        code: `// This is a comment - JavaScript ignores this
console.log("Hello, World!");
console.log("Welcome to JavaScript!");

// JavaScript can do math
console.log(2 + 3);     // 5
console.log(10 * 5);    // 50

// JavaScript can manipulate text
console.log("Hello" + " " + "World");`,
        explanation: "console.log() prints output. We can print text (strings) and do arithmetic."
      },
      {
        title: "JavaScript in HTML",
        code: `<!-- Method 1: Inline Script -->
<script>
  alert("Hello from JavaScript!");
</script>

<!-- Method 2: External File -->
<script src="app.js"></script>

<!-- Method 3: In HTML events -->
<button onclick="alert('Clicked!')">Click Me</button>`,
        explanation: "JavaScript can be embedded in HTML using <script> tags or loaded from external files."
      }
    ],
    quiz: [
      { question: "Who created JavaScript?", options: ["Brendan Eich", "James Gosling", "Guido van Rossum", "Dennis Ritchie"], answer: 0 },
      { question: "What year was JavaScript created?", options: ["1991", "1995", "2000", "1989"], answer: 1 },
      { question: "Which method prints to the console?", options: ["print()", "echo()", "console.log()", "write()"], answer: 2 }
    ],
    interviewQuestions: [
      { q: "What is JavaScript?", a: "JavaScript is a high-level, interpreted, dynamically typed programming language primarily used for web development. It supports event-driven, functional, and prototype-based programming styles." },
      { q: "Is JavaScript single-threaded or multi-threaded?", a: "JavaScript is single-threaded, meaning it executes one operation at a time. However, it uses an event loop with a callback queue to handle asynchronous operations, giving the appearance of concurrency." }
    ]
  },
  {
    id: 2,
    language: "javascript",
    module: "Getting Started",
    title: "Variables — var, let, const",
    difficulty: "beginner",
    description: "Declaring variables with var, let, and const. Understanding scope and hoisting.",
    videoId: "ER9SspLe4Hg",
    videoTitle: "Variables in JavaScript | JavaScript Tutorial in Hindi #2",
    content: `Variables are containers for storing data values. JavaScript has three ways to declare variables.

**var** — The old way (ES5)
- Function-scoped
- Can be re-declared and updated
- Hoisted to the top of its scope

**let** — The modern way (ES6)
- Block-scoped (inside { })
- Can be updated but NOT re-declared in the same scope
- Not hoisted in the same way as var

**const** — For constants (ES6)
- Block-scoped
- Cannot be updated OR re-declared
- Must be initialized at declaration
- Objects/arrays declared with const CAN have their contents modified

**Naming Rules:**
- Must start with a letter, underscore (_), or dollar sign ($)
- Case-sensitive (myVar ≠ myvar)
- Cannot use reserved words (let, class, return, etc.)
- Use camelCase by convention`,
    codeExamples: [
      {
        title: "Declaring Variables",
        code: `// Using var (old way - avoid in modern code)
var name = "Anup";
var name = "Singh"; // OK - var allows re-declaration
console.log(name); // "Singh"

// Using let (modern way)
let age = 25;
age = 26; // OK - can update
// let age = 30; // ERROR - cannot re-declare

// Using const (for constants)
const PI = 3.14159;
// PI = 3.14; // ERROR - cannot update

const user = { name: "Anup" };
user.name = "Singh"; // OK! Object contents can change
console.log(user); // { name: "Singh" }`,
        explanation: "var is function-scoped and can be re-declared. let is block-scoped and can be updated. const is block-scoped and cannot be reassigned."
      },
      {
        title: "Scope Differences",
        code: `// var is function-scoped
function testVar() {
  if (true) {
    var x = 10;
  }
  console.log(x); // 10 - accessible outside if block!
}
testVar();

// let is block-scoped
function testLet() {
  if (true) {
    let y = 20;
    console.log(y); // 20
  }
  // console.log(y); // ERROR - y is not defined
}
testLet();

// Hoisting demonstration
console.log(a); // undefined (var is hoisted)
var a = 5;

// console.log(b); // ERROR (let is NOT hoisted)
let b = 10;`,
        explanation: "var leaks out of blocks (if, for, etc.) while let and const are confined to their block."
      }
    ],
    quiz: [
      { question: "Which keyword creates a block-scoped variable?", options: ["var", "let", "function", "global"], answer: 1 },
      { question: "Can you reassign a const variable?", options: ["Yes", "No", "Only objects", "Only in strict mode"], answer: 1 },
      { question: "What happens when you access a var before declaration?", options: ["Error", "undefined", "null", "0"], answer: 1 }
    ],
    interviewQuestions: [
      { q: "What are the differences between var, let, and const?", a: "var is function-scoped, hoisted, and can be re-declared. let is block-scoped, not hoisted in the same way, and cannot be re-declared. const is like let but cannot be reassigned after initialization." },
      { q: "What is hoisting?", a: "Hoisting is JavaScript's behavior of moving declarations to the top of their scope during compilation. var declarations are hoisted and initialized with undefined, while let/const are hoisted but not initialized (temporal dead zone)." }
    ]
  },
  {
    id: 3,
    language: "javascript",
    module: "Getting Started",
    title: "Data Types in JavaScript",
    difficulty: "beginner",
    description: "Primitive and reference types, typeof operator, and type coercion.",
    videoId: "ER9SspLe4Hg",
    videoTitle: "Data Types in JavaScript | JavaScript Tutorial in Hindi #3",
    content: `JavaScript has 8 data types — 7 primitives and 1 non-primitive.

**Primitive Types (immutable):**
1. **String** — Text: "Hello", 'World', \`Template\`
2. **Number** — Integers & decimals: 42, 3.14
3. **BigInt** — Large integers: 9007199254740991n
4. **Boolean** — true or false
5. **undefined** — Variable declared but not assigned
6. **null** — Intentional absence of value
7. **Symbol** — Unique identifier (ES6)

**Non-Primitive (Reference Type):**
8. **Object** — Collections of key-value pairs (includes arrays, functions, dates, etc.)

**Dynamic Typing:**
JavaScript variables can hold any type and change type at any time.

**Type Coercion:**
JavaScript automatically converts types in certain operations. This can lead to surprising results!`,
    codeExamples: [
      {
        title: "All Data Types",
        code: `// String
let name = "JavaScript";
let greeting = 'Hello';
let template = \`Hi \${name}\`; // Template literal

// Number
let integer = 42;
let decimal = 3.14;
let negative = -10;
let infinity = Infinity;
let notANumber = NaN;

// BigInt
let bigNumber = 9007199254740991n;

// Boolean
let isLearning = true;
let isExpert = false;

// Undefined
let unknown;
console.log(unknown); // undefined

// Null
let empty = null;

// Symbol
let id = Symbol("unique");

// Object
let person = { name: "Anup", age: 25 };
let colors = ["red", "green", "blue"];

// Check types
console.log(typeof name);       // "string"
console.log(typeof integer);    // "number"
console.log(typeof isLearning); // "boolean"
console.log(typeof unknown);    // "undefined"
console.log(typeof null);       // "object" (JS bug!)
console.log(typeof person);     // "object"
console.log(typeof colors);     // "object"`,
        explanation: "JavaScript has 7 primitive types and objects. typeof reveals the type, except for null which incorrectly shows 'object'."
      },
      {
        title: "Type Coercion Gotchas",
        code: `// String coercion
console.log("5" + 3);     // "53" (number becomes string)
console.log("5" - 3);     // 2  (string becomes number!)
console.log("5" * "2");   // 10 (both become numbers)

// Boolean coercion
console.log(true + 1);    // 2  (true becomes 1)
console.log(false + 1);   // 1  (false becomes 0)

// Falsy values (evaluate to false)
console.log(Boolean(0));         // false
console.log(Boolean(""));        // false
console.log(Boolean(null));      // false
console.log(Boolean(undefined)); // false
console.log(Boolean(NaN));       // false

// Truthy values (evaluate to true)
console.log(Boolean("hello"));   // true
console.log(Boolean(42));        // true
console.log(Boolean([]));        // true (empty array!)
console.log(Boolean({}));        // true (empty object!)

// Equality gotchas
console.log(0 == false);    // true (loose equality)
console.log(0 === false);   // false (strict equality)
console.log("" == false);   // true
console.log("" === false);  // false`,
        explanation: "JavaScript coerces types automatically. Always use === for comparisons to avoid unexpected behavior."
      }
    ],
    quiz: [
      { question: "How many primitive data types does JavaScript have?", options: ["5", "6", "7", "8"], answer: 2 },
      { question: 'What is typeof null?', options: ['"null"', '"undefined"', '"object"', '"boolean"'], answer: 2 },
      { question: 'What does "5" + 3 return?', options: ["8", '"53"', "53", "Error"], answer: 1 }
    ],
    interviewQuestions: [
      { q: "What is the difference between null and undefined?", a: "undefined means a variable has been declared but not assigned a value. null is an intentional assignment representing 'no value'. typeof undefined is 'undefined', while typeof null is 'object' (a known JavaScript bug)." },
      { q: "What is type coercion in JavaScript?", a: "Type coercion is the automatic conversion of values from one type to another. JavaScript performs implicit coercion in operations like '5' + 3 = '53' (string coercion) or '5' - 3 = 2 (number coercion)." }
    ]
  },
  {
    id: 4,
    language: "javascript",
    module: "Getting Started",
    title: "Operators in JavaScript",
    difficulty: "beginner",
    description: "Arithmetic, assignment, comparison, logical, and other operators.",
    videoId: "ER9SspLe4Hg",
    videoTitle: "Operators in JavaScript | JavaScript Tutorial in Hindi #4",
    content: `Operators perform operations on values and variables.

**Arithmetic Operators:** +, -, *, /, %, ** (power)
**Assignment Operators:** =, +=, -=, *=, /=, %=
**Comparison Operators:** ==, ===, !=, !==, >, <, >=, <=
**Logical Operators:** && (AND), || (OR), ! (NOT)
**Ternary Operator:** condition ? valueIfTrue : valueIfFalse
**Nullish Coalescing:** ?? (returns right if left is null/undefined)
**Optional Chaining:** ?. (safely access nested properties)`,
    codeExamples: [
      {
        title: "All Operators",
        code: `// Arithmetic
console.log(10 + 3);  // 13
console.log(10 - 3);  // 7
console.log(10 * 3);  // 30
console.log(10 / 3);  // 3.333...
console.log(10 % 3);  // 1 (remainder)
console.log(2 ** 3);  // 8 (power)

// Assignment
let x = 10;
x += 5;  // x = x + 5 → 15
x -= 3;  // x = x - 3 → 12
x *= 2;  // x = x * 2 → 24

// Comparison
console.log(5 == "5");   // true (loose - type coercion)
console.log(5 === "5");  // false (strict - no coercion)
console.log(5 != "5");   // false
console.log(5 !== "5");  // true

// Logical
console.log(true && false);  // false
console.log(true || false);  // true
console.log(!true);          // false

// Ternary
let age = 20;
let status = age >= 18 ? "Adult" : "Minor";
console.log(status); // "Adult"

// Nullish coalescing
let user = null;
console.log(user ?? "Guest"); // "Guest"

// Optional chaining
let obj = { a: { b: 42 } };
console.log(obj?.a?.b);    // 42
console.log(obj?.c?.d);    // undefined (no error!)`,
        explanation: "JavaScript has a rich set of operators. Use === over == and leverage modern operators like ?? and ?. for cleaner code."
      }
    ],
    quiz: [
      { question: "What does === check?", options: ["Value only", "Type only", "Value and type", "Reference"], answer: 2 },
      { question: "What does the ?? operator do?", options: ["Logical AND", "Logical OR", "Returns right if left is null/undefined", "Throws error"], answer: 2 },
      { question: "What is 10 % 3?", options: ["3", "1", "3.33", "0"], answer: 1 }
    ],
    interviewQuestions: [
      { q: "What is the difference between == and ===?", a: "== (loose equality) compares values after type coercion, so '5' == 5 is true. === (strict equality) compares both value and type without coercion, so '5' === 5 is false. Always prefer === for predictable behavior." },
      { q: "Explain the nullish coalescing operator (??)", a: "The ?? operator returns the right-hand operand when the left-hand is null or undefined. Unlike ||, it doesn't treat 0, '', or false as nullish. Example: 0 ?? 'default' returns 0, but 0 || 'default' returns 'default'." }
    ]
  },
  {
    id: 5,
    language: "javascript",
    module: "Control Flow",
    title: "Conditionals — if, else, switch",
    difficulty: "beginner",
    description: "Decision making with if-else statements and switch cases.",
    videoId: "ER9SspLe4Hg",
    videoTitle: "Conditional Statements | JavaScript Tutorial in Hindi #5",
    content: `Conditionals let your code make decisions based on conditions.

**if statement** — Execute code if condition is true
**else if** — Check additional conditions
**else** — Execute when no condition is true
**switch** — Match a value against multiple cases
**Ternary** — Short form of if-else`,
    codeExamples: [
      {
        title: "if-else & switch",
        code: `// Basic if-else
let score = 85;

if (score >= 90) {
  console.log("Grade: A");
} else if (score >= 80) {
  console.log("Grade: B"); // This runs
} else if (score >= 70) {
  console.log("Grade: C");
} else {
  console.log("Grade: F");
}

// Switch statement
let day = "Monday";

switch (day) {
  case "Monday":
    console.log("Start of the week");
    break;
  case "Friday":
    console.log("TGIF!");
    break;
  case "Saturday":
  case "Sunday":
    console.log("Weekend!");
    break;
  default:
    console.log("Midweek");
}

// Nested conditions
let age = 25;
let hasLicense = true;

if (age >= 18) {
  if (hasLicense) {
    console.log("You can drive!");
  } else {
    console.log("Get a license first.");
  }
} else {
  console.log("Too young to drive.");
}`,
        explanation: "if-else handles branching logic. switch is cleaner when comparing one value against many options. Don't forget break in switch!"
      }
    ],
    quiz: [
      { question: "What happens if you forget 'break' in switch?", options: ["Error", "Falls through to next case", "Returns undefined", "Skips to default"], answer: 1 },
      { question: "Which value is falsy?", options: ["\"0\"", "[]", "0", "{}"], answer: 2 }
    ],
    interviewQuestions: [
      { q: "When would you use switch over if-else?", a: "Use switch when comparing a single variable against multiple discrete values. It's more readable and sometimes faster than long if-else chains. Use if-else for range comparisons or complex conditions." }
    ]
  },
  {
    id: 6,
    language: "javascript",
    module: "Control Flow",
    title: "Loops — for, while, do-while",
    difficulty: "beginner",
    description: "Iterating with for, while, do-while, for...of, and for...in loops.",
    videoId: "ER9SspLe4Hg",
    videoTitle: "Loops in JavaScript | JavaScript Tutorial in Hindi #6",
    content: `Loops repeat a block of code multiple times.

**for** — When you know the number of iterations
**while** — When the condition controls the loop
**do...while** — Runs at least once
**for...of** — Iterate over iterable values (arrays, strings)
**for...in** — Iterate over object keys
**break** — Exit the loop
**continue** — Skip to next iteration`,
    codeExamples: [
      {
        title: "All Loop Types",
        code: `// for loop
for (let i = 0; i < 5; i++) {
  console.log("Count:", i); // 0, 1, 2, 3, 4
}

// while loop
let count = 0;
while (count < 3) {
  console.log("While:", count);
  count++;
}

// do...while (runs at least once)
let num = 10;
do {
  console.log("Do-while:", num); // Prints 10
  num++;
} while (num < 5); // Condition false, but ran once

// for...of (arrays, strings)
let fruits = ["apple", "banana", "cherry"];
for (let fruit of fruits) {
  console.log(fruit);
}

// for...in (object keys)
let person = { name: "Anup", age: 25, city: "Toronto" };
for (let key in person) {
  console.log(key + ": " + person[key]);
}

// break and continue
for (let i = 0; i < 10; i++) {
  if (i === 3) continue; // Skip 3
  if (i === 7) break;    // Stop at 7
  console.log(i); // 0, 1, 2, 4, 5, 6
}`,
        explanation: "Choose the right loop for the job: for when you know iterations, for...of for arrays, for...in for objects."
      }
    ],
    quiz: [
      { question: "Which loop always runs at least once?", options: ["for", "while", "do...while", "for...of"], answer: 2 },
      { question: "What does 'continue' do?", options: ["Exits loop", "Skips current iteration", "Pauses loop", "Restarts loop"], answer: 1 },
      { question: "Which loop is best for iterating object keys?", options: ["for", "for...of", "for...in", "while"], answer: 2 }
    ],
    interviewQuestions: [
      { q: "What is the difference between for...in and for...of?", a: "for...in iterates over enumerable property keys of an object (including inherited ones). for...of iterates over values of iterable objects like arrays, strings, Maps, and Sets. Use for...in for objects, for...of for arrays." }
    ]
  },
  {
    id: 7,
    language: "javascript",
    module: "Functions",
    title: "Functions — Declaration, Expression, Arrow",
    difficulty: "beginner",
    description: "Creating functions, parameters, return values, and arrow functions.",
    videoId: "ER9SspLe4Hg",
    videoTitle: "Functions in JavaScript | JavaScript Tutorial in Hindi #7",
    content: `Functions are reusable blocks of code that perform a specific task.

**Function Declaration** — Named function, hoisted
**Function Expression** — Assigned to a variable, not hoisted
**Arrow Function** — Concise syntax (ES6), no own 'this'
**IIFE** — Immediately Invoked Function Expression
**Default Parameters** — Fallback values for parameters
**Rest Parameters** — Collect remaining arguments`,
    codeExamples: [
      {
        title: "Function Types",
        code: `// Function Declaration (hoisted)
function greet(name) {
  return "Hello, " + name + "!";
}
console.log(greet("Anup")); // "Hello, Anup!"

// Function Expression (NOT hoisted)
const add = function(a, b) {
  return a + b;
};
console.log(add(3, 5)); // 8

// Arrow Function (ES6)
const multiply = (a, b) => a * b;
console.log(multiply(4, 5)); // 20

// Arrow with body
const getUser = (name, age) => {
  return { name, age };
};

// Default Parameters
function welcome(name = "Guest") {
  console.log("Welcome, " + name);
}
welcome();       // "Welcome, Guest"
welcome("Anup"); // "Welcome, Anup"

// Rest Parameters
function sum(...numbers) {
  return numbers.reduce((total, n) => total + n, 0);
}
console.log(sum(1, 2, 3, 4, 5)); // 15

// IIFE - Immediately Invoked
(function() {
  console.log("I run immediately!");
})();`,
        explanation: "Functions are first-class citizens in JavaScript — they can be assigned to variables, passed as arguments, and returned from other functions."
      },
      {
        title: "Higher-Order Functions",
        code: `// Function as argument (callback)
function doMath(a, b, operation) {
  return operation(a, b);
}

const result1 = doMath(10, 5, (a, b) => a + b);
console.log(result1); // 15

const result2 = doMath(10, 5, (a, b) => a * b);
console.log(result2); // 50

// Function returning a function
function multiplier(factor) {
  return function(number) {
    return number * factor;
  };
}

const double = multiplier(2);
const triple = multiplier(3);

console.log(double(5));  // 10
console.log(triple(5));  // 15`,
        explanation: "Higher-order functions take functions as arguments or return functions. This is the foundation of functional programming in JavaScript."
      }
    ],
    quiz: [
      { question: "Which function type is hoisted?", options: ["Function Expression", "Arrow Function", "Function Declaration", "All of them"], answer: 2 },
      { question: "What does an arrow function NOT have?", options: ["Return value", "Parameters", "Its own 'this'", "Body"], answer: 2 },
      { question: "What is a higher-order function?", options: ["A function with many lines", "A function that takes/returns functions", "A function inside a class", "An async function"], answer: 1 }
    ],
    interviewQuestions: [
      { q: "What is the difference between function declarations and expressions?", a: "Function declarations are hoisted (can be called before they're defined). Function expressions are NOT hoisted and must be defined before use. Declarations use the 'function' keyword with a name, while expressions assign anonymous/named functions to variables." },
      { q: "What are arrow functions and how are they different?", a: "Arrow functions (=>) are a concise ES6 syntax. Key differences: they don't have their own 'this' (they inherit from the enclosing scope), they can't be used as constructors, they don't have 'arguments' object, and they have implicit return for single expressions." }
    ]
  },
  {
    id: 8,
    language: "javascript",
    module: "Functions",
    title: "Scope and Closures",
    difficulty: "intermediate",
    description: "Understanding scope chain, lexical scope, and the power of closures.",
    videoId: "ER9SspLe4Hg",
    videoTitle: "Scope and Closures | JavaScript Tutorial in Hindi #8",
    content: `Scope determines where variables are accessible. Closures are functions that remember their outer scope.

**Global Scope** — Variables accessible everywhere
**Function Scope** — Variables inside a function
**Block Scope** — Variables inside { } (let, const)
**Lexical Scope** — Inner functions access outer variables
**Closure** — A function + its lexical environment`,
    codeExamples: [
      {
        title: "Scope and Closures",
        code: `// Closure - function remembers its environment
function createCounter() {
  let count = 0; // Private variable
  
  return {
    increment: function() {
      count++;
      return count;
    },
    decrement: function() {
      count--;
      return count;
    },
    getCount: function() {
      return count;
    }
  };
}

const counter = createCounter();
console.log(counter.increment()); // 1
console.log(counter.increment()); // 2
console.log(counter.decrement()); // 1
console.log(counter.getCount());  // 1
// count is private! Can't access directly

// Practical closure: Function factory
function createGreeting(greeting) {
  return function(name) {
    return greeting + ", " + name + "!";
  };
}

const sayHello = createGreeting("Hello");
const sayHi = createGreeting("Hi");
console.log(sayHello("Anup")); // "Hello, Anup!"
console.log(sayHi("Anup"));   // "Hi, Anup!"

// Common closure pitfall with loops
for (var i = 0; i < 3; i++) {
  setTimeout(() => console.log("var:", i), 100);
}
// Prints: 3, 3, 3 (all reference same i)

for (let j = 0; j < 3; j++) {
  setTimeout(() => console.log("let:", j), 100);
}
// Prints: 0, 1, 2 (each iteration has own j)`,
        explanation: "Closures let functions 'remember' variables from their creation scope. This enables private variables, function factories, and more."
      }
    ],
    quiz: [
      { question: "What is a closure?", options: ["A closed function", "A function + its lexical scope", "A private variable", "An IIFE"], answer: 1 },
      { question: "Why does var in a loop cause issues with setTimeout?", options: ["Bug in setTimeout", "var is function-scoped, shares same variable", "var is slow", "setTimeout ignores var"], answer: 1 }
    ],
    interviewQuestions: [
      { q: "Explain closures with a practical example", a: "A closure is a function that has access to variables from its outer (enclosing) scope even after the outer function has returned. Example: a counter function that returns increment/decrement methods — the count variable is 'closed over' and stays private, only accessible through the returned methods." },
      { q: "What is the scope chain?", a: "The scope chain is the hierarchy of scopes that JavaScript searches through when looking up a variable. It starts from the current scope, goes to the parent scope, then grandparent, and so on until it reaches the global scope. If the variable isn't found anywhere, a ReferenceError is thrown." }
    ]
  },
  {
    id: 9,
    language: "javascript",
    module: "Data Structures",
    title: "Strings and String Methods",
    difficulty: "beginner",
    description: "String creation, template literals, and essential string methods.",
    videoId: "ER9SspLe4Hg",
    videoTitle: "Strings in JavaScript | JavaScript Tutorial in Hindi #9",
    content: `Strings are sequences of characters used to represent text.

**Creating Strings:**
- Single quotes: 'hello'
- Double quotes: "hello"
- Template literals: \`hello \${name}\`

**Strings are immutable** — methods return new strings, they don't modify the original.`,
    codeExamples: [
      {
        title: "String Methods",
        code: `let str = "JavaScript is Awesome";

// Length
console.log(str.length); // 21

// Access characters
console.log(str[0]);        // "J"
console.log(str.charAt(4)); // "S"
console.log(str.at(-1));    // "e" (negative index!)

// Search
console.log(str.indexOf("is"));      // 11
console.log(str.includes("Awesome")); // true
console.log(str.startsWith("Java")); // true
console.log(str.endsWith("some"));   // true

// Extract
console.log(str.slice(0, 10));    // "JavaScript"
console.log(str.slice(-7));       // "Awesome"
console.log(str.substring(0, 4)); // "Java"

// Transform
console.log(str.toUpperCase());   // "JAVASCRIPT IS AWESOME"
console.log(str.toLowerCase());   // "javascript is awesome"
console.log("  hello  ".trim()); // "hello"
console.log(str.replace("Awesome", "Great")); // "JavaScript is Great"
console.log(str.replaceAll("a", "@")); // "J@v@Script is Awesome"

// Split
console.log(str.split(" ")); // ["JavaScript", "is", "Awesome"]
console.log("a,b,c".split(",")); // ["a", "b", "c"]

// Repeat and Pad
console.log("ha".repeat(3));          // "hahaha"
console.log("5".padStart(3, "0"));    // "005"
console.log("5".padEnd(3, "0"));      // "500"

// Template Literals
let name = "Anup";
let age = 25;
console.log(\`My name is \${name} and I'm \${age} years old.\`);
console.log(\`2 + 3 = \${2 + 3}\`); // "2 + 3 = 5"`,
        explanation: "Strings have many built-in methods. Remember: strings are immutable — all methods return new strings."
      }
    ],
    quiz: [
      { question: "Are strings mutable in JavaScript?", options: ["Yes", "No"], answer: 1 },
      { question: "What does str.slice(-3) return for 'Hello'?", options: ['"Hel"', '"llo"', '"lo"', 'Error'], answer: 1 },
      { question: "Which method splits a string into an array?", options: [".join()", ".split()", ".slice()", ".cut()"], answer: 1 }
    ],
    interviewQuestions: [
      { q: "How do you reverse a string in JavaScript?", a: "The common approach is: str.split('').reverse().join(''). For strings with Unicode/emoji: [...str].reverse().join(''). There's no built-in reverse method for strings." }
    ]
  },
  {
    id: 10,
    language: "javascript",
    module: "Data Structures",
    title: "Arrays and Array Methods",
    difficulty: "beginner",
    description: "Creating arrays and mastering map, filter, reduce, and other methods.",
    videoId: "ER9SspLe4Hg",
    videoTitle: "Arrays in JavaScript | JavaScript Tutorial in Hindi #10",
    content: `Arrays are ordered collections of values.

**Key Array Methods:**
- **Mutating:** push, pop, shift, unshift, splice, sort, reverse
- **Non-mutating:** map, filter, reduce, find, some, every, slice, concat
- **Iteration:** forEach, for...of`,
    codeExamples: [
      {
        title: "Array Methods Masterclass",
        code: `let fruits = ["apple", "banana", "cherry"];

// Add/Remove
fruits.push("date");       // Add to end
fruits.unshift("avocado"); // Add to start
fruits.pop();              // Remove from end
fruits.shift();            // Remove from start

// splice(startIndex, deleteCount, ...newItems)
fruits.splice(1, 1, "blueberry", "coconut");
console.log(fruits); // ["apple", "blueberry", "coconut", "cherry"]

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// map - transform each element
let doubled = numbers.map(n => n * 2);
console.log(doubled); // [2, 4, 6, 8, 10, 12, 14, 16, 18, 20]

// filter - keep elements that pass test
let evens = numbers.filter(n => n % 2 === 0);
console.log(evens); // [2, 4, 6, 8, 10]

// reduce - accumulate to single value
let sum = numbers.reduce((acc, n) => acc + n, 0);
console.log(sum); // 55

// find - first element that passes test
let found = numbers.find(n => n > 5);
console.log(found); // 6

// some & every
console.log(numbers.some(n => n > 5));  // true
console.log(numbers.every(n => n > 0)); // true

// sort (careful - sorts as strings by default!)
let nums = [10, 1, 21, 2];
nums.sort((a, b) => a - b); // Numeric sort
console.log(nums); // [1, 2, 10, 21]

// Chaining methods
let result = numbers
  .filter(n => n % 2 === 0)
  .map(n => n * 3)
  .reduce((acc, n) => acc + n, 0);
console.log(result); // 90`,
        explanation: "Array methods are the backbone of data manipulation in JavaScript. Master map, filter, and reduce — they're used constantly."
      }
    ],
    quiz: [
      { question: "Does .map() modify the original array?", options: ["Yes", "No"], answer: 1 },
      { question: "What does .reduce() return?", options: ["Array", "Single value", "Boolean", "Object"], answer: 1 },
      { question: "What does .filter() return?", options: ["Single element", "Boolean", "New array", "Index"], answer: 2 }
    ],
    interviewQuestions: [
      { q: "Explain the difference between map, filter, and reduce", a: "map transforms each element and returns a new array of same length. filter tests each element and returns a new array of elements that pass. reduce accumulates all elements into a single value (number, object, array, etc.) using an accumulator." },
      { q: "How does Array.sort() work?", a: "sort() converts elements to strings and sorts lexicographically by default. This means [10,1,2] sorts to [1,10,2]. For numeric sorting, pass a compare function: arr.sort((a,b) => a-b). sort() mutates the original array." }
    ]
  },
  {
    id: 11,
    language: "javascript",
    module: "Data Structures",
    title: "Objects and Object Methods",
    difficulty: "intermediate",
    description: "Object creation, manipulation, destructuring, and built-in methods.",
    videoId: "ER9SspLe4Hg",
    videoTitle: "Objects in JavaScript | JavaScript Tutorial in Hindi #11",
    content: `Objects are collections of key-value pairs — the most important data structure in JavaScript.

**Creating Objects:**
- Object literal: { key: value }
- new Object()
- Object.create()

**Key Concepts:**
- Property access: dot notation vs bracket notation
- Computed property names
- Shorthand properties
- Destructuring
- Spread operator
- Object methods`,
    codeExamples: [
      {
        title: "Objects Deep Dive",
        code: `// Object creation and access
let person = {
  name: "Anup",
  age: 25,
  skills: ["JavaScript", "React", "Node.js"],
  address: {
    city: "Toronto",
    country: "Canada"
  },
  greet() {
    return \`Hi, I'm \${this.name}\`;
  }
};

// Access
console.log(person.name);           // "Anup"
console.log(person["age"]);         // 25
console.log(person.address.city);   // "Toronto"
console.log(person.greet());        // "Hi, I'm Anup"

// Destructuring
let { name, age, skills: [first] } = person;
console.log(name, age, first); // "Anup" 25 "JavaScript"

// Nested destructuring
let { address: { city } } = person;
console.log(city); // "Toronto"

// Spread operator
let updated = { ...person, age: 26, job: "Developer" };

// Object methods
console.log(Object.keys(person));   // ["name", "age", ...]
console.log(Object.values(person)); // ["Anup", 25, ...]
console.log(Object.entries(person)); // [["name","Anup"],...]

// Freeze and Seal
let config = Object.freeze({ api: "https://api.com" });
// config.api = "new"; // Silently fails (or error in strict mode)

// Computed property names
let field = "email";
let obj = { [field]: "anup@example.com" };
console.log(obj.email); // "anup@example.com"

// Optional chaining
let user = {};
console.log(user?.profile?.avatar); // undefined (no error)`,
        explanation: "Objects are everywhere in JavaScript. Master destructuring and spread operators — they make code much cleaner."
      }
    ],
    quiz: [
      { question: "How do you access a property with a variable name?", options: ["Dot notation", "Bracket notation", "Both", "Neither"], answer: 1 },
      { question: "What does Object.freeze() do?", options: ["Deletes object", "Prevents modification", "Copies object", "Sorts keys"], answer: 1 },
      { question: "What does the spread operator (...) do with objects?", options: ["Deep clones", "Shallow copies", "Merges only", "Deletes properties"], answer: 1 }
    ],
    interviewQuestions: [
      { q: "What is the difference between shallow and deep copy?", a: "A shallow copy (spread, Object.assign) copies top-level properties by value for primitives, but by reference for nested objects. A deep copy (structuredClone, JSON parse/stringify) creates completely independent copies at all levels. Modifying a nested object in a shallow copy affects the original." },
      { q: "Explain destructuring with default values", a: "Destructuring extracts values from objects/arrays into variables. Default values provide fallbacks: const { name = 'Guest', age = 0 } = user; If user.name is undefined, it defaults to 'Guest'. This also works with renamed variables: const { name: userName = 'Guest' } = user;" }
    ]
  },
  {
    id: 12,
    language: "javascript",
    module: "Advanced Concepts",
    title: "The 'this' Keyword",
    difficulty: "intermediate",
    description: "Understanding 'this' in different contexts — global, object, class, arrow functions.",
    videoId: "ER9SspLe4Hg",
    videoTitle: "The this Keyword | JavaScript Tutorial in Hindi #12",
    content: `'this' refers to the object that is executing the current function. Its value depends on HOW the function is called.

**Rules for 'this':**
1. **Global context:** this = window (browser) or global (Node)
2. **Object method:** this = the object calling the method
3. **Regular function:** this = window (or undefined in strict mode)
4. **Arrow function:** this = inherited from enclosing scope
5. **Constructor/class:** this = the new instance
6. **call/apply/bind:** this = explicitly set`,
    codeExamples: [
      {
        title: "Understanding 'this'",
        code: `// In an object method
const user = {
  name: "Anup",
  greet() {
    console.log(this.name); // "Anup" - this = user
  }
};
user.greet();

// Arrow vs Regular in objects
const obj = {
  value: 42,
  regular: function() {
    console.log(this.value); // 42
  },
  arrow: () => {
    console.log(this.value); // undefined! (inherits outer this)
  }
};

// call, apply, bind
function introduce(greeting) {
  console.log(greeting + ", I'm " + this.name);
}

const person = { name: "Anup" };

introduce.call(person, "Hello");   // "Hello, I'm Anup"
introduce.apply(person, ["Hi"]);   // "Hi, I'm Anup"

const bound = introduce.bind(person);
bound("Hey"); // "Hey, I'm Anup"

// 'this' in classes
class Animal {
  constructor(name) {
    this.name = name; // this = new instance
  }
  speak() {
    return this.name + " makes a sound";
  }
}
const dog = new Animal("Rex");
console.log(dog.speak()); // "Rex makes a sound"`,
        explanation: "'this' is one of the trickiest parts of JavaScript. Arrow functions don't have their own 'this' — they inherit it from the surrounding scope."
      }
    ],
    quiz: [
      { question: "What does 'this' refer to in an arrow function?", options: ["The object", "window", "Enclosing scope's this", "undefined"], answer: 2 },
      { question: "Which method permanently binds 'this'?", options: ["call", "apply", "bind", "attach"], answer: 2 }
    ],
    interviewQuestions: [
      { q: "Explain how 'this' works in JavaScript", a: "this depends on how a function is called: in a method, it's the object; in a regular function, it's global/undefined; in arrow functions, it's lexically inherited; in constructors, it's the new instance; with call/apply/bind, it's explicitly set. This is determined at call time, not definition time (except arrow functions)." },
      { q: "What is the difference between call, apply, and bind?", a: "All three explicitly set 'this'. call invokes immediately with comma-separated args: fn.call(obj, a, b). apply invokes immediately with array args: fn.apply(obj, [a, b]). bind returns a NEW function with 'this' permanently set, doesn't invoke: const bound = fn.bind(obj)." }
    ]
  },
  {
    id: 13,
    language: "javascript",
    module: "Advanced Concepts",
    title: "Prototypes and Inheritance",
    difficulty: "intermediate",
    description: "Prototype chain, prototypal inheritance, and how JS objects are linked.",
    videoId: "ER9SspLe4Hg",
    videoTitle: "Prototypes in JavaScript | JavaScript Tutorial in Hindi #13",
    content: `JavaScript uses prototypal inheritance — objects can inherit properties from other objects through the prototype chain.

Every object has a hidden [[Prototype]] property that points to another object. When you access a property that doesn't exist on an object, JavaScript looks up the prototype chain.`,
    codeExamples: [
      {
        title: "Prototypal Inheritance",
        code: `// Constructor function
function Person(name, age) {
  this.name = name;
  this.age = age;
}

// Adding method to prototype
Person.prototype.greet = function() {
  return "Hi, I'm " + this.name;
};

const anup = new Person("Anup", 25);
console.log(anup.greet()); // "Hi, I'm Anup"

// Inheritance
function Developer(name, age, language) {
  Person.call(this, name, age); // Call parent constructor
  this.language = language;
}

// Set up prototype chain
Developer.prototype = Object.create(Person.prototype);
Developer.prototype.constructor = Developer;

Developer.prototype.code = function() {
  return this.name + " codes in " + this.language;
};

const dev = new Developer("Anup", 25, "JavaScript");
console.log(dev.greet()); // "Hi, I'm Anup" (inherited)
console.log(dev.code());  // "Anup codes in JavaScript"

// Check prototype chain
console.log(dev instanceof Developer); // true
console.log(dev instanceof Person);    // true
console.log(dev.hasOwnProperty("name"));  // true
console.log(dev.hasOwnProperty("greet")); // false (on prototype)`,
        explanation: "The prototype chain is how JavaScript implements inheritance. ES6 classes are syntactic sugar over this mechanism."
      }
    ],
    quiz: [
      { question: "What is at the top of the prototype chain?", options: ["Object", "null", "undefined", "window"], answer: 1 },
      { question: "Do ES6 classes use prototypes internally?", options: ["Yes", "No"], answer: 0 }
    ],
    interviewQuestions: [
      { q: "Explain prototypal inheritance", a: "In JavaScript, objects can inherit from other objects directly through the prototype chain. Every object has a [[Prototype]] linking it to another object. When a property is accessed, JS searches the object first, then its prototype, then the prototype's prototype, until null. This is different from classical inheritance in languages like Java." }
    ]
  },
  {
    id: 14,
    language: "javascript",
    module: "Advanced Concepts",
    title: "Classes (ES6)",
    difficulty: "intermediate",
    description: "Class syntax, constructors, methods, inheritance, getters, setters, and static methods.",
    videoId: "ER9SspLe4Hg",
    videoTitle: "Classes in JavaScript | JavaScript Tutorial in Hindi #14",
    content: `ES6 classes provide a cleaner syntax for creating objects and implementing inheritance. Under the hood, they still use prototypes.

**Key Features:**
- constructor method
- Instance methods and properties
- Static methods and properties
- Getters and setters
- extends for inheritance
- super to call parent`,
    codeExamples: [
      {
        title: "ES6 Classes",
        code: `class Animal {
  // Private field
  #sound;
  
  constructor(name, sound) {
    this.name = name;
    this.#sound = sound;
  }
  
  // Getter
  get info() {
    return \`\${this.name} says \${this.#sound}\`;
  }
  
  // Setter
  set animalSound(newSound) {
    this.#sound = newSound;
  }
  
  // Instance method
  speak() {
    return \`\${this.name}: \${this.#sound}!\`;
  }
  
  // Static method
  static create(name, sound) {
    return new Animal(name, sound);
  }
}

class Dog extends Animal {
  constructor(name, breed) {
    super(name, "Woof"); // Call parent constructor
    this.breed = breed;
  }
  
  fetch(item) {
    return \`\${this.name} fetches the \${item}\`;
  }
}

const dog = new Dog("Rex", "Labrador");
console.log(dog.speak());       // "Rex: Woof!"
console.log(dog.info);          // "Rex says Woof"
console.log(dog.fetch("ball")); // "Rex fetches the ball"
console.log(dog instanceof Dog);    // true
console.log(dog instanceof Animal); // true

// Static method
const cat = Animal.create("Whiskers", "Meow");
console.log(cat.speak()); // "Whiskers: Meow!"`,
        explanation: "Classes are syntactic sugar over prototypal inheritance. They provide a familiar OOP syntax with constructors, inheritance, and encapsulation."
      }
    ],
    quiz: [
      { question: "What keyword is used for inheritance?", options: ["inherit", "extends", "prototype", "implements"], answer: 1 },
      { question: "What does 'super' do?", options: ["Creates new class", "Calls parent constructor/method", "Makes method static", "Declares private field"], answer: 1 },
      { question: "How do you declare private fields?", options: ["private keyword", "# prefix", "_ prefix", "@ prefix"], answer: 1 }
    ],
    interviewQuestions: [
      { q: "Are JavaScript classes 'real' classes?", a: "No, JavaScript classes are syntactic sugar over prototypal inheritance. Unlike classes in Java or C++, they don't create a separate class-based system. Under the hood, they still use prototypes, constructor functions, and the prototype chain. They're 'special functions' that provide a cleaner syntax." }
    ]
  },
  {
    id: 15,
    language: "javascript",
    module: "Async JavaScript",
    title: "Asynchronous JavaScript — Callbacks",
    difficulty: "intermediate",
    description: "Understanding async programming, the event loop, and callback patterns.",
    videoId: "ER9SspLe4Hg",
    videoTitle: "Asynchronous JavaScript | JavaScript Tutorial in Hindi #15",
    content: `JavaScript is single-threaded but handles async operations through the event loop.

**The Event Loop:**
1. Call Stack — where code executes
2. Web APIs — handle async operations (setTimeout, fetch, etc.)
3. Callback Queue — holds completed callbacks
4. Event Loop — moves callbacks to call stack when it's empty

**Callbacks** are functions passed as arguments to be called later.`,
    codeExamples: [
      {
        title: "Callbacks and Event Loop",
        code: `// Synchronous - blocks execution
console.log("1");
console.log("2");
console.log("3");
// Output: 1, 2, 3

// Asynchronous - non-blocking
console.log("Start");
setTimeout(() => console.log("Timeout"), 0);
console.log("End");
// Output: Start, End, Timeout (even with 0ms!)

// Callback pattern
function fetchData(callback) {
  setTimeout(() => {
    const data = { name: "Anup", role: "Developer" };
    callback(data);
  }, 1000);
}

fetchData((data) => {
  console.log("Received:", data);
});

// Callback Hell (the problem)
function step1(callback) {
  setTimeout(() => {
    console.log("Step 1 done");
    callback();
  }, 1000);
}

function step2(callback) {
  setTimeout(() => {
    console.log("Step 2 done");
    callback();
  }, 1000);
}

// Nested callbacks = hard to read
step1(() => {
  step2(() => {
    console.log("All steps done");
    // Imagine 5 more levels deep...
  });
});`,
        explanation: "Callbacks are the foundation of async JavaScript. But deeply nested callbacks ('callback hell') led to the creation of Promises."
      }
    ],
    quiz: [
      { question: "Is JavaScript single-threaded?", options: ["Yes", "No"], answer: 0 },
      { question: "What moves callbacks to the call stack?", options: ["Web API", "Callback Queue", "Event Loop", "setTimeout"], answer: 2 }
    ],
    interviewQuestions: [
      { q: "Explain the event loop", a: "The event loop is JavaScript's concurrency mechanism. The call stack executes code synchronously. When async operations (setTimeout, fetch) complete, their callbacks go to the callback/microtask queue. The event loop continuously checks if the call stack is empty, and if so, pushes the next callback from the queue to the stack. Microtasks (Promises) have priority over macrotasks (setTimeout)." }
    ]
  },
  {
    id: 16,
    language: "javascript",
    module: "Async JavaScript",
    title: "Promises",
    difficulty: "intermediate",
    description: "Creating and chaining Promises, error handling, Promise.all, Promise.race.",
    videoId: "ER9SspLe4Hg",
    videoTitle: "Promises in JavaScript | JavaScript Tutorial in Hindi #16",
    content: `Promises represent a value that may not be available yet but will resolve in the future.

**States:** pending → fulfilled (resolved) OR rejected
**Methods:** .then(), .catch(), .finally()
**Static Methods:** Promise.all(), Promise.race(), Promise.allSettled(), Promise.any()`,
    codeExamples: [
      {
        title: "Promises",
        code: `// Creating a Promise
const myPromise = new Promise((resolve, reject) => {
  const success = true;
  
  setTimeout(() => {
    if (success) {
      resolve({ data: "Success!" });
    } else {
      reject(new Error("Something went wrong"));
    }
  }, 1000);
});

// Using the Promise
myPromise
  .then(result => console.log(result))
  .catch(error => console.error(error))
  .finally(() => console.log("Done"));

// Chaining Promises
function fetchUser(id) {
  return new Promise(resolve => {
    setTimeout(() => resolve({ id, name: "Anup" }), 500);
  });
}

function fetchPosts(user) {
  return new Promise(resolve => {
    setTimeout(() => resolve([
      { title: "Post 1", author: user.name },
      { title: "Post 2", author: user.name }
    ]), 500);
  });
}

fetchUser(1)
  .then(user => fetchPosts(user))
  .then(posts => console.log(posts))
  .catch(err => console.error(err));

// Promise.all - wait for ALL
Promise.all([
  fetch("/api/users"),
  fetch("/api/posts"),
  fetch("/api/comments")
]).then(([users, posts, comments]) => {
  console.log("All loaded!");
});

// Promise.race - first to complete
Promise.race([
  fetch("/api/fast"),
  new Promise((_, reject) => 
    setTimeout(() => reject("Timeout!"), 5000)
  )
]);`,
        explanation: "Promises solve callback hell with clean chaining. Promise.all runs multiple promises in parallel."
      }
    ],
    quiz: [
      { question: "What are the states of a Promise?", options: ["start, end", "pending, fulfilled, rejected", "open, closed", "loading, done"], answer: 1 },
      { question: "What does Promise.all() do if one promise rejects?", options: ["Ignores it", "Resolves others", "Rejects immediately", "Waits for all"], answer: 2 }
    ],
    interviewQuestions: [
      { q: "Explain Promise chaining", a: "Promise chaining is linking multiple .then() calls. Each .then() returns a new Promise, allowing sequential async operations. The return value of one .then() becomes the input of the next. Errors can be caught with a single .catch() at the end of the chain." },
      { q: "What is the difference between Promise.all and Promise.allSettled?", a: "Promise.all rejects immediately if ANY promise rejects (fail-fast). Promise.allSettled waits for ALL promises to complete regardless of outcome and returns an array of { status, value/reason } objects. Use allSettled when you need results from all promises even if some fail." }
    ]
  },
  {
    id: 17,
    language: "javascript",
    module: "Async JavaScript",
    title: "Async/Await",
    difficulty: "intermediate",
    description: "Writing cleaner async code with async functions and the await keyword.",
    videoId: "ER9SspLe4Hg",
    videoTitle: "Async Await | JavaScript Tutorial in Hindi #17",
    content: `async/await is syntactic sugar over Promises that makes async code look synchronous.

**async** — Declares a function that returns a Promise
**await** — Pauses execution until the Promise resolves
**Error handling** — Use try/catch blocks`,
    codeExamples: [
      {
        title: "Async/Await",
        code: `// Basic async/await
async function fetchData() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users/1");
    const data = await response.json();
    console.log(data.name);
    return data;
  } catch (error) {
    console.error("Failed:", error.message);
  }
}

// Sequential vs Parallel
async function sequential() {
  const user = await fetchUser(1);    // Wait...
  const posts = await fetchPosts(1);  // Then wait...
  return { user, posts };
  // Total time: fetchUser + fetchPosts
}

async function parallel() {
  const [user, posts] = await Promise.all([
    fetchUser(1),
    fetchPosts(1)
  ]);
  return { user, posts };
  // Total time: max(fetchUser, fetchPosts)
}

// Async in loops
async function processItems(items) {
  // Sequential processing
  for (const item of items) {
    await processItem(item);
  }
  
  // Parallel processing
  await Promise.all(items.map(item => processItem(item)));
}

// Top-level await (in modules)
// const data = await fetchData();

// Async error handling patterns
async function robustFetch(url) {
  try {
    const res = await fetch(url);
    if (!res.ok) throw new Error(\`HTTP \${res.status}\`);
    return await res.json();
  } catch (err) {
    console.error("Fetch failed:", err);
    return null; // Return default value
  }
}`,
        explanation: "async/await makes asynchronous code readable. Always handle errors with try/catch. Use Promise.all for parallel operations."
      }
    ],
    quiz: [
      { question: "What does an async function return?", options: ["The value", "A Promise", "undefined", "An iterator"], answer: 1 },
      { question: "Can you use await outside async functions?", options: ["Yes, always", "Only in modules (top-level await)", "Never", "Only in Node.js"], answer: 1 }
    ],
    interviewQuestions: [
      { q: "How do you handle errors in async/await?", a: "Use try/catch blocks around await calls. For multiple independent operations, you can use Promise.allSettled to handle individual failures. You can also create wrapper functions that return [error, data] tuples, or use .catch() on the async function call itself." }
    ]
  },
  {
    id: 18,
    language: "javascript",
    module: "DOM & Events",
    title: "DOM Manipulation",
    difficulty: "intermediate",
    description: "Selecting elements, modifying content, attributes, styles, and creating elements.",
    videoId: "ER9SspLe4Hg",
    videoTitle: "DOM Manipulation | JavaScript Tutorial in Hindi #18",
    content: `The Document Object Model (DOM) is a tree representation of an HTML page that JavaScript can manipulate.

**Selecting Elements:**
- getElementById, getElementsByClassName
- querySelector, querySelectorAll

**Modifying Elements:**
- textContent, innerHTML
- setAttribute, classList
- style property

**Creating Elements:**
- createElement, appendChild, remove`,
    codeExamples: [
      {
        title: "DOM Manipulation",
        code: `// Selecting elements
const title = document.getElementById("title");
const items = document.querySelectorAll(".item");
const first = document.querySelector(".item:first-child");

// Modifying content
title.textContent = "New Title";
title.innerHTML = "<em>New</em> Title";

// Modifying attributes
const link = document.querySelector("a");
link.setAttribute("href", "https://example.com");
link.getAttribute("href");
link.removeAttribute("target");

// Modifying classes
title.classList.add("active");
title.classList.remove("hidden");
title.classList.toggle("dark");
title.classList.contains("active"); // true

// Modifying styles
title.style.color = "blue";
title.style.fontSize = "24px";
title.style.backgroundColor = "#f0f0f0";

// Creating elements
const newDiv = document.createElement("div");
newDiv.textContent = "I'm new!";
newDiv.classList.add("card");
document.body.appendChild(newDiv);

// Insert before/after
const container = document.querySelector(".container");
const reference = document.querySelector(".reference");
container.insertBefore(newDiv, reference);

// Remove element
const old = document.querySelector(".old");
old.remove();

// Clone element
const clone = title.cloneNode(true); // true = deep clone`,
        explanation: "DOM manipulation is how JavaScript makes web pages interactive. Modern frameworks abstract this, but understanding DOM is fundamental."
      }
    ],
    quiz: [
      { question: "What does querySelector return?", options: ["All matches", "First match", "Last match", "NodeList"], answer: 1 },
      { question: "What's the difference between textContent and innerHTML?", options: ["No difference", "textContent is faster", "innerHTML parses HTML, textContent doesn't", "textContent can include tags"], answer: 2 }
    ],
    interviewQuestions: [
      { q: "What is the DOM?", a: "The Document Object Model is a programming interface for HTML/XML documents. It represents the page as a tree of nodes (elements, text, attributes). JavaScript can access and modify the DOM to change content, structure, and styles dynamically, making pages interactive." }
    ]
  },
  {
    id: 19,
    language: "javascript",
    module: "DOM & Events",
    title: "Events and Event Handling",
    difficulty: "intermediate",
    description: "Event listeners, event delegation, propagation (bubbling & capturing), and preventing defaults.",
    videoId: "ER9SspLe4Hg",
    videoTitle: "Events in JavaScript | JavaScript Tutorial in Hindi #19",
    content: `Events are actions that happen in the browser — clicks, key presses, form submissions, etc.

**Key Concepts:**
- addEventListener / removeEventListener
- Event object properties
- Event propagation (bubbling & capturing)
- Event delegation
- preventDefault and stopPropagation`,
    codeExamples: [
      {
        title: "Event Handling",
        code: `// Adding event listeners
const button = document.querySelector("#myBtn");

button.addEventListener("click", function(event) {
  console.log("Clicked!", event.target);
});

// Event object
document.addEventListener("keydown", (e) => {
  console.log("Key:", e.key);
  console.log("Code:", e.code);
  if (e.key === "Escape") console.log("Escape pressed!");
});

// Event Delegation (efficient!)
const list = document.querySelector("#todo-list");

list.addEventListener("click", (e) => {
  if (e.target.matches(".delete-btn")) {
    e.target.closest("li").remove();
  }
  if (e.target.matches(".todo-text")) {
    e.target.classList.toggle("completed");
  }
});

// Event Propagation
// Bubbling: child → parent → grandparent (default)
// Capturing: grandparent → parent → child

document.querySelector(".outer").addEventListener("click", () => {
  console.log("Outer clicked");
}, false); // false = bubbling (default)

document.querySelector(".inner").addEventListener("click", (e) => {
  console.log("Inner clicked");
  e.stopPropagation(); // Stops bubbling
});

// Prevent default behavior
document.querySelector("form").addEventListener("submit", (e) => {
  e.preventDefault(); // Don't refresh page
  const data = new FormData(e.target);
  console.log("Form data:", Object.fromEntries(data));
});`,
        explanation: "Event delegation attaches one listener to a parent instead of many to children — it's more efficient and handles dynamic elements."
      }
    ],
    quiz: [
      { question: "What is event bubbling?", options: ["Events go from parent to child", "Events go from child to parent", "Events only fire on target", "Events fire twice"], answer: 1 },
      { question: "What does preventDefault() do?", options: ["Stops bubbling", "Cancels default browser behavior", "Removes listener", "Throws error"], answer: 1 }
    ],
    interviewQuestions: [
      { q: "What is event delegation and why use it?", a: "Event delegation attaches a single event listener to a parent element instead of individual listeners on each child. When a child is clicked, the event bubbles up to the parent where we check event.target. Benefits: better performance (fewer listeners), works with dynamically added elements, less memory usage." }
    ]
  },
  {
    id: 20,
    language: "javascript",
    module: "Modern JavaScript",
    title: "ES6+ Features",
    difficulty: "intermediate",
    description: "Destructuring, spread/rest, template literals, modules, iterators, generators.",
    videoId: "ER9SspLe4Hg",
    videoTitle: "ES6 Features | JavaScript Tutorial in Hindi #20",
    content: `ES6 (ECMAScript 2015) and later versions brought massive improvements to JavaScript.

**Key ES6+ Features:**
- let/const, arrow functions (covered earlier)
- Template literals
- Destructuring assignment
- Spread and rest operators
- Default parameters
- Modules (import/export)
- Map, Set, WeakMap, WeakSet
- Symbols
- Iterators and Generators
- for...of loop
- Optional chaining (?.)
- Nullish coalescing (??)`,
    codeExamples: [
      {
        title: "ES6+ Features",
        code: `// Destructuring
const [a, b, ...rest] = [1, 2, 3, 4, 5];
console.log(rest); // [3, 4, 5]

const { name, age, ...others } = { 
  name: "Anup", age: 25, city: "Toronto", role: "Dev" 
};
console.log(others); // { city: "Toronto", role: "Dev" }

// Spread operator
const arr1 = [1, 2];
const arr2 = [3, 4];
const merged = [...arr1, ...arr2, 5]; // [1,2,3,4,5]

const obj1 = { a: 1, b: 2 };
const obj2 = { ...obj1, c: 3 }; // { a:1, b:2, c:3 }

// Map and Set
const map = new Map();
map.set("name", "Anup");
map.set(42, "answer");
console.log(map.get("name")); // "Anup"
console.log(map.size);        // 2

const set = new Set([1, 2, 2, 3, 3, 4]);
console.log([...set]); // [1, 2, 3, 4] - unique values!

// Generators
function* fibonacci() {
  let [a, b] = [0, 1];
  while (true) {
    yield a;
    [a, b] = [b, a + b];
  }
}

const fib = fibonacci();
console.log(fib.next().value); // 0
console.log(fib.next().value); // 1
console.log(fib.next().value); // 1
console.log(fib.next().value); // 2

// Modules (in separate files)
// export const PI = 3.14;
// export default function add(a, b) { return a + b; }
// import add, { PI } from './math.js';

// Symbol
const id = Symbol("id");
const user = { [id]: 123, name: "Anup" };
console.log(user[id]); // 123
console.log(Object.keys(user)); // ["name"] - symbol hidden!`,
        explanation: "ES6+ features make JavaScript more expressive and concise. Map/Set are powerful data structures. Generators enable lazy evaluation."
      }
    ],
    quiz: [
      { question: "What does Set guarantee?", options: ["Ordered elements", "Unique values", "Numeric keys", "Fixed size"], answer: 1 },
      { question: "What does yield do in a generator?", options: ["Stops forever", "Pauses and returns a value", "Throws error", "Creates new function"], answer: 1 }
    ],
    interviewQuestions: [
      { q: "What is the difference between Map and Object?", a: "Map allows any key type (objects, functions, primitives), preserves insertion order, has a .size property, and is iterable. Objects only allow string/symbol keys, don't guarantee order for integer keys, require Object.keys().length for size. Map performs better for frequent additions/removals." }
    ]
  },
  {
    id: 21,
    language: "javascript",
    module: "Modern JavaScript",
    title: "Error Handling",
    difficulty: "intermediate",
    description: "try-catch-finally, custom errors, error types, and debugging strategies.",
    videoId: "ER9SspLe4Hg",
    videoTitle: "Error Handling | JavaScript Tutorial in Hindi #21",
    content: `Proper error handling prevents applications from crashing and provides meaningful feedback.

**Error Types:** SyntaxError, TypeError, ReferenceError, RangeError, URIError
**Handling:** try-catch-finally
**Custom Errors:** extending the Error class
**Throwing:** throw new Error("message")`,
    codeExamples: [
      {
        title: "Error Handling",
        code: `// Basic try-catch
try {
  let result = riskyOperation();
  console.log(result);
} catch (error) {
  console.error("Error:", error.message);
  console.error("Type:", error.name);
  console.error("Stack:", error.stack);
} finally {
  console.log("Always runs - cleanup here");
}

// Throwing errors
function divide(a, b) {
  if (typeof a !== "number" || typeof b !== "number") {
    throw new TypeError("Arguments must be numbers");
  }
  if (b === 0) {
    throw new RangeError("Cannot divide by zero");
  }
  return a / b;
}

try {
  console.log(divide(10, 0));
} catch (e) {
  if (e instanceof RangeError) {
    console.log("Division error:", e.message);
  } else if (e instanceof TypeError) {
    console.log("Type error:", e.message);
  }
}

// Custom Error class
class ValidationError extends Error {
  constructor(field, message) {
    super(message);
    this.name = "ValidationError";
    this.field = field;
  }
}

function validateAge(age) {
  if (age < 0 || age > 150) {
    throw new ValidationError("age", "Age must be between 0-150");
  }
  return true;
}

// Async error handling
async function fetchSafe(url) {
  try {
    const res = await fetch(url);
    if (!res.ok) throw new Error("HTTP " + res.status);
    return await res.json();
  } catch (err) {
    console.error("Fetch failed:", err.message);
    return null;
  }
}`,
        explanation: "Always handle errors gracefully. Create custom error classes for different error types in your application."
      }
    ],
    quiz: [
      { question: "Does 'finally' run if catch has a return?", options: ["Yes", "No"], answer: 0 },
      { question: "What error occurs when accessing undefined variable?", options: ["TypeError", "SyntaxError", "ReferenceError", "RangeError"], answer: 2 }
    ],
    interviewQuestions: [
      { q: "What are the different error types in JavaScript?", a: "SyntaxError (invalid code), TypeError (wrong type operation), ReferenceError (accessing undeclared variable), RangeError (number out of range), URIError (malformed URI), EvalError (eval() errors). You can also create custom errors by extending the Error class." }
    ]
  },
  {
    id: 22,
    language: "javascript",
    module: "Modern JavaScript",
    title: "Local Storage & JSON",
    difficulty: "beginner",
    description: "Storing data in the browser with localStorage, sessionStorage, and JSON.",
    videoId: "ER9SspLe4Hg",
    videoTitle: "Local Storage | JavaScript Tutorial in Hindi #22",
    content: `Web Storage API allows storing key-value pairs in the browser.

**localStorage** — Persists even after browser closes
**sessionStorage** — Cleared when tab/session ends
**JSON** — Format for converting objects to strings and back`,
    codeExamples: [
      {
        title: "Storage and JSON",
        code: `// JSON - JavaScript Object Notation
const user = { name: "Anup", age: 25, skills: ["JS", "React"] };

// Object → String
const jsonString = JSON.stringify(user);
console.log(jsonString); // '{"name":"Anup","age":25,...}'
console.log(typeof jsonString); // "string"

// String → Object
const parsed = JSON.parse(jsonString);
console.log(parsed.name); // "Anup"

// Pretty print
console.log(JSON.stringify(user, null, 2));

// localStorage
localStorage.setItem("theme", "dark");
const theme = localStorage.getItem("theme"); // "dark"
localStorage.removeItem("theme");
localStorage.clear(); // Remove all

// Storing objects (must stringify)
const settings = { theme: "dark", language: "en" };
localStorage.setItem("settings", JSON.stringify(settings));

const saved = JSON.parse(localStorage.getItem("settings"));
console.log(saved.theme); // "dark"

// sessionStorage (same API, different lifetime)
sessionStorage.setItem("token", "abc123");

// Check if key exists
if (localStorage.getItem("user")) {
  console.log("User found!");
} else {
  console.log("No user saved");
}

// Iterate all stored items
for (let i = 0; i < localStorage.length; i++) {
  const key = localStorage.key(i);
  console.log(key, ":", localStorage.getItem(key));
}`,
        explanation: "localStorage persists data across sessions. Always JSON.stringify objects before storing and JSON.parse when retrieving."
      }
    ],
    quiz: [
      { question: "Does localStorage persist after closing the browser?", options: ["Yes", "No"], answer: 0 },
      { question: "What must you do before storing an object in localStorage?", options: ["Nothing", "JSON.stringify it", "Convert to array", "Encode it"], answer: 1 }
    ],
    interviewQuestions: [
      { q: "What is the difference between localStorage and sessionStorage?", a: "localStorage persists until explicitly cleared — data survives browser restarts. sessionStorage is cleared when the tab or window is closed. Both store string key-value pairs with ~5MB limit. Neither is sent to the server with requests (unlike cookies)." }
    ]
  },
  {
    id: 23,
    language: "javascript",
    module: "Advanced Patterns",
    title: "Destructuring and Spread Advanced",
    difficulty: "intermediate",
    description: "Advanced destructuring patterns, spread in function calls, and real-world usage.",
    videoId: "ER9SspLe4Hg",
    videoTitle: "Destructuring | JavaScript Tutorial in Hindi #23",
    content: `Advanced destructuring and spread patterns for cleaner, more expressive code.`,
    codeExamples: [
      {
        title: "Advanced Patterns",
        code: `// Swap variables
let a = 1, b = 2;
[a, b] = [b, a];
console.log(a, b); // 2, 1

// Skip elements
const [first, , third] = [1, 2, 3];
console.log(first, third); // 1, 3

// Nested destructuring
const data = {
  user: {
    profile: {
      name: "Anup",
      social: { twitter: "@anup" }
    }
  }
};
const { user: { profile: { name, social: { twitter } } } } = data;
console.log(name, twitter); // "Anup", "@anup"

// Function parameter destructuring
function createUser({ name, age = 25, role = "user" }) {
  return { name, age, role, createdAt: new Date() };
}
const user = createUser({ name: "Anup", age: 30 });

// Clone and modify objects immutably
const original = { a: 1, b: 2, c: 3 };
const { b: removed, ...withoutB } = original;
console.log(withoutB); // { a: 1, c: 3 }

// Merge objects with defaults
const defaults = { theme: "light", lang: "en", notifications: true };
const userPrefs = { theme: "dark" };
const config = { ...defaults, ...userPrefs };
console.log(config); // { theme: "dark", lang: "en", notifications: true }

// Array manipulation with spread
const numbers = [3, 1, 4, 1, 5];
const max = Math.max(...numbers); // 5
const copy = [...numbers].sort((a, b) => a - b);`,
        explanation: "Master these patterns — they're used everywhere in modern JavaScript and React codebases."
      }
    ],
    quiz: [
      { question: "How do you swap variables using destructuring?", options: ["[a,b] = [b,a]", "swap(a,b)", "a <=> b", "a.swap(b)"], answer: 0 }
    ],
    interviewQuestions: [
      { q: "How do you remove a property from an object immutably?", a: "Using destructuring with rest: const { propToRemove, ...rest } = object; The rest variable contains the object without propToRemove. This is commonly used in Redux reducers and React state management." }
    ]
  },
  {
    id: 24,
    language: "javascript",
    module: "Advanced Patterns",
    title: "Regular Expressions (RegEx)",
    difficulty: "advanced",
    description: "Pattern matching with regular expressions — syntax, flags, and common patterns.",
    videoId: "ER9SspLe4Hg",
    videoTitle: "Regular Expressions | JavaScript Tutorial in Hindi #24",
    content: `Regular expressions are patterns used to match character combinations in strings.

**Creating RegEx:** /pattern/flags or new RegExp("pattern", "flags")
**Common Flags:** g (global), i (case-insensitive), m (multiline)
**Methods:** test(), match(), replace(), search(), split()`,
    codeExamples: [
      {
        title: "RegEx Patterns",
        code: `// Basic matching
const regex = /hello/i;
console.log(regex.test("Hello World")); // true

// Common patterns
const email = /^[\\w.-]+@[\\w.-]+\\.\\w{2,}$/;
console.log(email.test("anup@email.com")); // true

const phone = /^\\+?\\d{1,3}[-.\\s]?\\d{3}[-.\\s]?\\d{3}[-.\\s]?\\d{4}$/;
console.log(phone.test("+1-555-123-4567")); // true

const password = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[@#$%]).{8,}$/;
console.log(password.test("Strong@123")); // true

// String methods with regex
const str = "Hello World Hello JS";

// match - find all matches
console.log(str.match(/hello/gi)); // ["Hello", "Hello"]

// replace
console.log(str.replace(/hello/gi, "Hi")); // "Hi World Hi JS"

// search - find index
console.log(str.search(/World/)); // 6

// split
console.log("a1b2c3".split(/\\d/)); // ["a","b","c",""]

// Groups
const dateStr = "2024-01-15";
const dateRegex = /(\\d{4})-(\\d{2})-(\\d{2})/;
const [, year, month, day] = dateStr.match(dateRegex);
console.log(year, month, day); // "2024" "01" "15"

// Named groups
const namedRegex = /(?<year>\\d{4})-(?<month>\\d{2})-(?<day>\\d{2})/;
const { groups } = dateStr.match(namedRegex);
console.log(groups.year); // "2024"`,
        explanation: "RegEx is powerful for validation, search, and text manipulation. Named groups make matches more readable."
      }
    ],
    quiz: [
      { question: "What does the 'g' flag do?", options: ["Global search", "Greedy match", "Group match", "Generate"], answer: 0 },
      { question: "Which method returns true/false for a regex match?", options: [".match()", ".test()", ".search()", ".find()"], answer: 1 }
    ],
    interviewQuestions: [
      { q: "How do you validate an email with regex?", a: "A basic email regex: /^[\\w.-]+@[\\w.-]+\\.\\w{2,}$/. It checks for: word characters/dots/hyphens before @, domain name, dot, and 2+ char TLD. Note: perfect email validation via regex is extremely complex — for production, use a library or server-side validation." }
    ]
  },
  {
    id: 25,
    language: "javascript",
    module: "Advanced Patterns",
    title: "Fetch API and HTTP Requests",
    difficulty: "intermediate",
    description: "Making API calls with fetch, handling responses, and working with REST APIs.",
    videoId: "ER9SspLe4Hg",
    videoTitle: "Fetch API | JavaScript Tutorial in Hindi #25",
    content: `The Fetch API provides a modern way to make HTTP requests.

**Methods:** GET, POST, PUT, PATCH, DELETE
**Response methods:** .json(), .text(), .blob()
**Headers and options:** method, headers, body, credentials`,
    codeExamples: [
      {
        title: "Fetch API",
        code: `// GET request
async function getUsers() {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const users = await response.json();
  console.log(users);
}

// POST request
async function createUser(userData) {
  const response = await fetch("https://jsonplaceholder.typicode.com/users", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(userData),
  });
  const newUser = await response.json();
  return newUser;
}

// PUT request (full update)
async function updateUser(id, data) {
  const res = await fetch(\`https://jsonplaceholder.typicode.com/users/\${id}\`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  return res.json();
}

// DELETE request
async function deleteUser(id) {
  const res = await fetch(\`https://jsonplaceholder.typicode.com/users/\${id}\`, {
    method: "DELETE",
  });
  return res.ok; // true if successful
}

// Error handling with fetch
async function safeFetch(url) {
  try {
    const res = await fetch(url);
    if (!res.ok) {
      throw new Error(\`HTTP Error: \${res.status} \${res.statusText}\`);
    }
    return await res.json();
  } catch (error) {
    if (error.name === "TypeError") {
      console.error("Network error - check your connection");
    } else {
      console.error(error.message);
    }
    return null;
  }
}`,
        explanation: "fetch() returns a Promise. Always check response.ok and handle network errors. Use async/await for cleaner code."
      }
    ],
    quiz: [
      { question: "Does fetch throw on HTTP errors (404, 500)?", options: ["Yes", "No - must check res.ok"], answer: 1 },
      { question: "What format must the body be in for POST requests?", options: ["Object", "JSON string", "FormData only", "Any"], answer: 1 }
    ],
    interviewQuestions: [
      { q: "How does fetch handle errors differently from Axios?", a: "fetch only rejects on network failures, NOT on HTTP errors (404, 500). You must manually check response.ok or response.status. Axios automatically rejects for HTTP errors (status >= 400), has interceptors, request cancellation, and automatic JSON parsing. fetch is built-in and lightweight; Axios is a library with more features." }
    ]
  },
  {
    id: 26,
    language: "javascript",
    module: "Pro Level",
    title: "Design Patterns in JavaScript",
    difficulty: "advanced",
    description: "Module, Singleton, Observer, Factory, and other common design patterns.",
    videoId: "ER9SspLe4Hg",
    videoTitle: "Design Patterns | JavaScript Tutorial in Hindi #26",
    content: `Design patterns are reusable solutions to common programming problems.

**Creational:** Singleton, Factory, Builder
**Structural:** Module, Decorator, Proxy
**Behavioral:** Observer, Strategy, Command`,
    codeExamples: [
      {
        title: "Design Patterns",
        code: `// Singleton Pattern
class Database {
  static #instance;
  
  constructor() {
    if (Database.#instance) return Database.#instance;
    this.connection = "connected";
    Database.#instance = this;
  }
}
const db1 = new Database();
const db2 = new Database();
console.log(db1 === db2); // true - same instance!

// Observer Pattern (PubSub)
class EventEmitter {
  constructor() {
    this.events = {};
  }
  
  on(event, callback) {
    if (!this.events[event]) this.events[event] = [];
    this.events[event].push(callback);
    return () => this.off(event, callback); // unsubscribe
  }
  
  emit(event, data) {
    (this.events[event] || []).forEach(cb => cb(data));
  }
  
  off(event, callback) {
    this.events[event] = this.events[event]
      ?.filter(cb => cb !== callback);
  }
}

const emitter = new EventEmitter();
const unsub = emitter.on("message", (msg) => console.log(msg));
emitter.emit("message", "Hello!"); // "Hello!"
unsub(); // Unsubscribe

// Factory Pattern
class Vehicle {
  constructor(type, brand) {
    this.type = type;
    this.brand = brand;
  }
}

class VehicleFactory {
  static create(type, brand) {
    switch(type) {
      case "car": return new Vehicle("Car", brand);
      case "truck": return new Vehicle("Truck", brand);
      default: throw new Error("Unknown type");
    }
  }
}

const car = VehicleFactory.create("car", "Toyota");

// Module Pattern (with closure)
const Calculator = (() => {
  let history = []; // Private
  
  return {
    add(a, b) { 
      const result = a + b;
      history.push(result);
      return result;
    },
    getHistory() { return [...history]; }
  };
})();

Calculator.add(2, 3); // 5
console.log(Calculator.getHistory()); // [5]`,
        explanation: "Design patterns help write maintainable, scalable code. The Observer pattern is the basis of event systems in frameworks like React and Node.js."
      }
    ],
    quiz: [
      { question: "What does the Singleton pattern ensure?", options: ["Many instances", "Only one instance", "No instances", "Lazy loading"], answer: 1 },
      { question: "Which pattern is used in addEventListener?", options: ["Factory", "Singleton", "Observer", "Builder"], answer: 2 }
    ],
    interviewQuestions: [
      { q: "Explain the Observer pattern", a: "The Observer pattern defines a one-to-many dependency between objects. When the 'subject' changes state, all 'observers' are notified and updated. In JavaScript, this is seen in event listeners, RxJS, Redux subscriptions, and Node.js EventEmitter. It enables loose coupling between components." }
    ]
  },
  {
    id: 27,
    language: "javascript",
    module: "Pro Level",
    title: "Functional Programming in JavaScript",
    difficulty: "advanced",
    description: "Pure functions, immutability, composition, currying, and functional patterns.",
    videoId: "ER9SspLe4Hg",
    videoTitle: "Functional Programming | JavaScript Tutorial in Hindi #27",
    content: `Functional programming treats computation as evaluation of mathematical functions.

**Core Principles:**
- Pure functions (no side effects)
- Immutability
- Function composition
- Higher-order functions
- Currying and partial application`,
    codeExamples: [
      {
        title: "Functional Programming",
        code: `// Pure function - same input always gives same output
const add = (a, b) => a + b;
const multiply = (a, b) => a * b;

// Impure function - has side effects
let total = 0;
const addToTotal = (n) => { total += n; return total; };

// Immutability
const user = Object.freeze({ name: "Anup", age: 25 });
// user.age = 26; // Fails silently (or error in strict mode)
const updated = { ...user, age: 26 }; // Create new object

// Currying - transforming f(a,b) to f(a)(b)
const curry = (fn) => {
  return function curried(...args) {
    if (args.length >= fn.length) return fn(...args);
    return (...moreArgs) => curried(...args, ...moreArgs);
  };
};

const curriedAdd = curry((a, b, c) => a + b + c);
console.log(curriedAdd(1)(2)(3));    // 6
console.log(curriedAdd(1, 2)(3));    // 6

// Function Composition
const compose = (...fns) => (x) => 
  fns.reduceRight((acc, fn) => fn(acc), x);

const pipe = (...fns) => (x) => 
  fns.reduce((acc, fn) => fn(acc), x);

const double = x => x * 2;
const addOne = x => x + 1;
const square = x => x * x;

const transform = pipe(double, addOne, square);
console.log(transform(3)); // square(addOne(double(3)))
// double(3) = 6, addOne(6) = 7, square(7) = 49

// Real-world: data transformation pipeline
const users = [
  { name: "Anup", age: 25, active: true },
  { name: "Bob", age: 17, active: false },
  { name: "Charlie", age: 30, active: true },
];

const getActiveAdultNames = pipe(
  (users) => users.filter(u => u.active),
  (users) => users.filter(u => u.age >= 18),
  (users) => users.map(u => u.name)
);

console.log(getActiveAdultNames(users)); // ["Anup", "Charlie"]`,
        explanation: "Functional programming leads to predictable, testable code. compose and pipe are used extensively in libraries like Redux and RxJS."
      }
    ],
    quiz: [
      { question: "What makes a function 'pure'?", options: ["It's fast", "No side effects, same input = same output", "It's short", "It uses const"], answer: 1 },
      { question: "What is currying?", options: ["Cooking", "Transforming f(a,b) into f(a)(b)", "Error handling", "Async pattern"], answer: 1 }
    ],
    interviewQuestions: [
      { q: "What are the benefits of functional programming?", a: "Predictability (pure functions always return same output), testability (no side effects to mock), composability (small functions combine into complex operations), immutability (prevents unintended mutations), parallelism (pure functions are thread-safe). FP concepts are used heavily in React (hooks, Redux) and data processing." }
    ]
  },
  {
    id: 28,
    language: "javascript",
    module: "Pro Level",
    title: "Performance and Optimization",
    difficulty: "advanced",
    description: "Debouncing, throttling, memoization, lazy loading, and performance best practices.",
    videoId: "ER9SspLe4Hg",
    videoTitle: "Performance Tips | JavaScript Tutorial in Hindi #28",
    content: `Writing fast JavaScript requires understanding performance patterns.

**Key Techniques:**
- Debouncing — Delay execution until action stops
- Throttling — Limit execution rate
- Memoization — Cache expensive calculations
- Lazy loading — Load only when needed
- Virtual scrolling — Render only visible items`,
    codeExamples: [
      {
        title: "Performance Patterns",
        code: `// Debounce - wait until user stops typing
function debounce(fn, delay) {
  let timer;
  return function(...args) {
    clearTimeout(timer);
    timer = setTimeout(() => fn.apply(this, args), delay);
  };
}

const search = debounce((query) => {
  console.log("Searching:", query);
  // API call here
}, 300);

// Throttle - execute at most once per interval
function throttle(fn, limit) {
  let inThrottle;
  return function(...args) {
    if (!inThrottle) {
      fn.apply(this, args);
      inThrottle = true;
      setTimeout(() => inThrottle = false, limit);
    }
  };
}

const handleScroll = throttle(() => {
  console.log("Scroll position:", window.scrollY);
}, 200);

// Memoization - cache expensive results
function memoize(fn) {
  const cache = new Map();
  return function(...args) {
    const key = JSON.stringify(args);
    if (cache.has(key)) return cache.get(key);
    const result = fn.apply(this, args);
    cache.set(key, result);
    return result;
  };
}

const expensiveCalc = memoize((n) => {
  console.log("Computing...");
  return n * n; // Imagine heavy computation
});

console.log(expensiveCalc(5)); // Computing... 25
console.log(expensiveCalc(5)); // 25 (cached!)

// Efficient DOM manipulation
// BAD: causes multiple reflows
for (let i = 0; i < 1000; i++) {
  document.body.appendChild(document.createElement("div"));
}

// GOOD: batch with DocumentFragment
const fragment = document.createDocumentFragment();
for (let i = 0; i < 1000; i++) {
  fragment.appendChild(document.createElement("div"));
}
document.body.appendChild(fragment); // Single reflow`,
        explanation: "Debounce for search inputs, throttle for scroll/resize events, memoize for expensive calculations. These patterns are essential for production apps."
      }
    ],
    quiz: [
      { question: "When should you use debounce?", options: ["Scroll events", "Search input typing", "Page load", "Click events"], answer: 1 },
      { question: "What does memoization do?", options: ["Clears memory", "Caches function results", "Compresses data", "Async loading"], answer: 1 }
    ],
    interviewQuestions: [
      { q: "Explain the difference between debounce and throttle", a: "Debounce delays execution until the action STOPS for a specified time (e.g., search input — wait until user stops typing). Throttle limits execution to at most once per interval (e.g., scroll handler — execute every 200ms max). Debounce is for 'when done', throttle is for 'not too often'." },
      { q: "Implement a memoize function", a: "A memoize function wraps another function, caches results using a Map with serialized arguments as keys. On subsequent calls with same args, it returns the cached result instead of recomputing. Key considerations: cache invalidation strategy, memory limits, and handling of complex argument types." }
    ]
  }
,
  // ============ PYTHON BASICS ============
  {
    id: 29,
    language: "python",
    module: "Python Basics",
    title: "Introduction to Python",
    difficulty: "beginner",
    description: "What is Python, its history, philosophy, and setting up your first program.",
    videoId: "gfDE2a7MKjA",
    videoTitle: "Introduction to Python | Python Tutorial",
    content: `Python is one of the world's most popular programming languages. Created by Guido van Rossum in 1991.

**What is Python?**
- High-level, interpreted, general-purpose language
- Clean, readable syntax resembling plain English
- Dynamically typed and garbage-collected
- Supports OOP, procedural, and functional programming

**Why Python?**
- #1 for Data Science, ML, and AI
- Web development (Django, Flask), automation, scripting
- "Batteries included" — huge standard library
- 500,000+ packages on PyPI
- Beginner-friendly

**The Zen of Python**
- Beautiful is better than ugly
- Simple is better than complex
- Readability counts

**Setting Up**
1. Download from python.org (3.x)
2. Install IDE: VS Code, PyCharm, IDLE
3. Verify: python --version
4. Write hello.py and run: python hello.py`,
    codeExamples: [
      {
        title: "Your First Python Program",
        code: `# Comment in Python
print("Hello, World!")
print("Welcome to Python!")

# Arithmetic
print(2 + 3)      # 5
print(10 * 5)     # 50
print(17 / 3)     # 5.666...
print(17 // 3)    # 5 (integer division)
print(2 ** 10)    # 1024 (power)`,
        explanation: "print() outputs to console. // is integer division, ** is exponentiation."
      },
      {
        title: "Python Interactive Shell",
        code: `>>> 2 + 2
4
>>> "Hello" + " Python"
'Hello Python'
>>> type(42)
<class 'int'>
>>> type(3.14)
<class 'float'>`,
        explanation: "Use python3 to start the REPL. type() checks any value's type."
      }
    ],
    quiz: [
      { question: "Who created Python?", options: ["Guido van Rossum", "Brendan Eich", "Linus Torvalds", "James Gosling"], answer: 0 },
      { question: "Which operator is exponentiation?", options: ["^", "**", "pow", "exp"], answer: 1 },
      { question: "What does // do?", options: ["Comment", "Integer division", "Concat", "Modulo"], answer: 1 },
      { question: "Python files use which extension?", options: [".pyt", ".py", ".python", ".pt"], answer: 1 }
    ],
    interviewQuestions: [
      { q: "What is Python and its key features?", a: "Python is a high-level, interpreted, dynamically-typed language created by Guido van Rossum (1991). Features: readable syntax, extensive standard library, multiple paradigms (OOP/functional/procedural), dynamic typing, automatic memory management, cross-platform. Excels in data science, web dev, automation, AI/ML." },
      { q: "Python 2 vs Python 3?", a: "Python 3 (2008+) has breaking changes: print is function not statement, / returns float, strings are Unicode by default, range() returns iterator. Python 2 EOL was January 2020. Always use Python 3." }
    ]
  },
  {
    id: 30,
    language: "python",
    module: "Python Basics",
    title: "Variables & Data Types",
    difficulty: "beginner",
    description: "Built-in types, dynamic typing, type conversion, and naming rules.",
    videoId: "7NULLPQdVXk",
    videoTitle: "Variables and Data Types | Python Tutorial",
    content: `Variables are created by assignment — no declaration needed. Python is dynamically typed.

**Basic Types**
- int: 42, -7, 1_000_000
- float: 3.14, -0.5, 1.0e10
- str: "hello", 'world', triple quotes for multiline
- bool: True, False
- None: null value

**Collections**
- list: [1, 2, 3] — ordered, mutable
- tuple: (1, 2, 3) — ordered, immutable
- dict: {"name": "Alice"} — key-value
- set: {1, 2, 3} — unique, unordered

**Type Conversion**
- int("42") → 42
- float(7) → 7.0
- str(100) → "100"
- bool(0) → False, bool(1) → True

**Naming Rules**
- Use snake_case
- Start with letter or _
- Cannot use reserved keywords`,
    codeExamples: [
      {
        title: "Variables and Types",
        code: `name = "Alice"
age = 25
height = 5.6
is_student = True

print(type(name))       # <class 'str'>
print(type(age))        # <class 'int'>
print(type(height))     # <class 'float'>

# Multiple assignment
x, y, z = 10, 20, 30
a = b = c = 0`,
        explanation: "Python infers types automatically. Variables can be reassigned to different types."
      },
      {
        title: "Type Conversion",
        code: `num = int("42")      # "42" -> 42
pi = float("3.14")   # "3.14" -> 3.14
age_str = str(25)    # 25 -> "25"

# Truthy/Falsy
print(bool(0))       # False
print(bool(""))      # False
print(bool(None))    # False
print(bool([]))      # False
print(bool(1))       # True`,
        explanation: "0, empty string, None, empty collections are falsy."
      }
    ],
    quiz: [
      { question: "Output of type(3.14)?", options: ["<class 'int'>", "<class 'float'>", "<class 'double'>", "<class 'num'>"], answer: 1 },
      { question: "What is None?", options: ["Zero", "Empty string", "Null/absence", "False"], answer: 2 },
      { question: "Valid variable name?", options: ["2name", "my-var", "my_var", "class"], answer: 2 },
      { question: "bool('')?", options: ["True", "False", "None", "Error"], answer: 1 }
    ],
    interviewQuestions: [
      { q: "Is Python statically or dynamically typed?", a: "Dynamically typed — types determined at runtime. No explicit type declarations. Python 3.5+ supports optional type hints (typing module) for tooling. Python is strongly typed — won't auto-coerce types ('3' + 3 raises TypeError)." },
      { q: "Mutable vs immutable types?", a: "Immutable (can't change): int, float, str, tuple, frozenset, bool, None. Mutable (can modify): list, dict, set, bytearray. Matters for function args — lists can be modified in-place, ints create new binding." }
    ]
  }

  ,
  // Python Basics - continued
  {
    id: 31,
    language: "python",
    module: "Python Basics",
    title: "Strings in Python",
    difficulty: "beginner",
    description: "String operations, methods, slicing, and f-string formatting.",
    videoId: "Yafji9PB1lM",
    videoTitle: "Strings in Python | Python Tutorial",
    content: `Strings are immutable sequences of Unicode characters.

**Creating Strings**
- 'single', "double", triple quotes for multiline
- Raw strings: r"C:\\path"

**Indexing & Slicing**
- s[0] first, s[-1] last
- s[1:4], s[:3], s[-3:], s[::-1] reverse

**Key Methods**
- upper(), lower(), title(), strip()
- split(), join(), replace()
- find(), startswith(), endswith()

**f-strings (Python 3.6+)**
- f"Hello {name}" — recommended
- f"{value:.2f}" for formatting`,
    codeExamples: [
      { title: "Slicing", code: `text = "Python"
print(text[0:3])    # "Pyt"
print(text[::-1])   # "nohtyP"`, explanation: "[::-1] reverses the string" },
      { title: "f-strings", code: `name = "Alice"
age = 30
print(f"{name} is {age} years old")
print(f"Pi: {3.14159:.2f}")`, explanation: "f-strings allow expressions inside {}" }
    ],
    quiz: [
      { question: "'hello'[::-1] returns?", options: ["hello", "olleh", "helo", "Error"], answer: 1 },
      { question: "Remove whitespace method?", options: ["trim()", "strip()", "clean()", "cut()"], answer: 1 }
    ],
    interviewQuestions: [
      { q: "Why are strings immutable?", a: "Immutability ensures thread safety, allows strings as dict keys/set elements, and enables memory optimization via interning. Modifications create new string objects." }
    ]
  },
  {
    id: 32,
    language: "python",
    module: "Python Basics",
    title: "Lists",
    difficulty: "beginner",
    description: "Creating, indexing, slicing, and essential list methods.",
    videoId: "a_Bz5ciBHQ0",
    videoTitle: "Lists in Python | Python Tutorial",
    content: `Lists are ordered, mutable sequences.

**Creating Lists**
- [1, 2, 3], ["a", "b"], mixed types, nested lists

**Methods**
- append(x), extend([x,y]), insert(i, x)
- remove(x), pop(i), clear()
- sort(), reverse(), copy()

**List Comprehensions**
- [x**2 for x in range(10)]
- [x for x in nums if x > 0]`,
    codeExamples: [
      { title: "List Basics", code: `nums = [3, 1, 4, 1, 5]
nums.append(9)
nums.sort()
print(nums)  # [1, 1, 3, 4, 5, 9]`, explanation: "append adds one item, sort modifies in-place" },
      { title: "List Comprehension", code: `squares = [x**2 for x in range(10)]
evens = [x for x in range(20) if x % 2 == 0]`, explanation: "Powerful one-liner to create lists" }
    ],
    quiz: [
      { question: "pop() default removes?", options: ["First", "Last", "All", "Random"], answer: 1 },
      { question: "append vs extend?", options: ["Same", "append=one, extend=many", "extend is faster", "No difference"], answer: 1 }
    ],
    interviewQuestions: [
      { q: "List vs tuple?", a: "Lists are mutable, tuples immutable. Lists [], tuples (). Tuples faster, can be dict keys. Lists for changing data, tuples for fixed records." }
    ]
  },
  {
    id: 33,
    language: "python",
    module: "Python Basics",
    title: "Dictionaries",
    difficulty: "beginner",
    description: "Key-value pairs, dict methods, and dict comprehensions.",
    videoId: "daefaLgNkw0",
    videoTitle: "Dictionaries in Python | Python Tutorial",
    content: `Dictionaries are hash maps with O(1) lookup.

**Creating**
- {"name": "Alice", "age": 25}
- dict(name="Alice")

**Access**
- dict["key"] or dict.get("key")

**Methods**
- keys(), values(), items()
- update(other), pop(key)
- setdefault(key, default)

**Dict Comprehensions**
- {k: v for k, v in items}`,
    codeExamples: [
      { title: "Dict CRUD", code: `person = {"name": "Alice"}
person["age"] = 25
print(person.get("email", "N/A"))
del person["age"]`, explanation: ".get() avoids KeyError" },
      { title: "Dict Comprehension", code: `squares = {x: x**2 for x in range(6)}
inverted = {v: k for k, v in original.items()}`, explanation: "Concise dict creation" }
    ],
    quiz: [
      { question: "dict.get missing key returns?", options: ["Error", "None", "0", "False"], answer: 1 },
      { question: "Can list be dict key?", options: ["Yes", "No", "Only empty", "Only string lists"], answer: 1 }
    ],
    interviewQuestions: [
      { q: "How do dicts work internally?", a: "Hash tables. hash(key) computes integer hash → bucket lookup. O(1) average. Keys must be hashable (immutable). Since Python 3.7, dicts maintain insertion order." }
    ]
  },
  {
    id: 34,
    language: "python",
    module: "Python Basics",
    title: "Control Flow",
    difficulty: "beginner",
    description: "if/elif/else, conditional expressions, and match-case.",
    videoId: "s5Lu4QTjeL0",
    videoTitle: "Control Flow - if elif else | Python Tutorial",
    content: `Control flow with Python's mandatory indentation.

**if/elif/else**
- Indentation defines blocks (4 spaces)
- elif for multiple conditions
- else for default

**Ternary**
- value_if_true if condition else value_if_false

**match-case (Python 3.10+)**
- Pattern matching
- case _: for default`,
    codeExamples: [
      { title: "if/elif/else", code: `score = 85
if score >= 90:
    grade = "A"
elif score >= 80:
    grade = "B"
else:
    grade = "C"`, explanation: "Indentation is mandatory, not braces" },
      { title: "Ternary", code: `x = 10
result = "even" if x % 2 == 0 else "odd"`, explanation: "Concise conditional" }
    ],
    quiz: [
      { question: "Python uses what for blocks?", options: ["{}", "begin/end", "Indentation", "parentheses"], answer: 2 },
      { question: "Which is falsy?", options: ["'0'", "1", "[]", "[0]"], answer: 2 }
    ],
    interviewQuestions: [
      { q: "EAFP vs LBYL?", a: "LBYL (Look Before Leap): if key in dict then use. EAFP (Easier Ask Forgiveness): try/except. Python prefers EAFP — more Pythonic, handles race conditions better." }
    ]
  },
  {
    id: 35,
    language: "python",
    module: "Python Basics",
    title: "Loops",
    difficulty: "beginner",
    description: "for, while, break, continue, else clause, range(), enumerate(), zip().",
    videoId: "XKyyM1VWtUE",
    videoTitle: "Loops in Python | for while | Python Tutorial",
    content: `for and while loops with Python enhancements.

**for Loop**
- for item in iterable
- range(start, stop, step)
- enumerate() for index+value
- zip() for parallel iteration

**while Loop**
- while condition

**Control**
- break, continue
- else clause (runs if no break)`,
    codeExamples: [
      { title: "for with enumerate", code: `fruits = ["apple", "banana"]
for i, fruit in enumerate(fruits):
    print(f"{i}: {fruit}")`, explanation: "enumerate gives index and value" },
      { title: "Loop else", code: `for n in range(2, 10):
    for x in range(2, n):
        if n % x == 0:
            break
    else:
        print(f"{n} is prime")`, explanation: "else runs only if no break" }
    ],
    quiz: [
      { question: "range(2, 10, 3) gives?", options: ["[2,5,8]", "[2,4,6,8]", "[3,6,9]", "[2,5,8,11]"], answer: 0 },
      { question: "Loop else clause runs when?", options: ["Always", "Never", "On error", "No break"], answer: 3 }
    ],
    interviewQuestions: [
      { q: "break vs continue?", a: "break exits loop entirely. continue skips current iteration, jumps to next. Both work in for/while, only affect innermost loop in nested loops." }
    ]
  },
  {
    id: 36,
    language: "python",
    module: "Python Basics",
    title: "Functions",
    difficulty: "beginner",
    description: "Defining functions, parameters, return, default args, *args, **kwargs, scope.",
    videoId: "a_gwOwkbhZ0",
    videoTitle: "Functions in Python | Python Tutorial",
    content: `Functions are first-class objects.

**Definition**
- def func_name(params):
- Use docstrings
- return value

**Parameters**
- Positional, default, keyword
- *args (tuple), **kwargs (dict)

**Scope (LEGB)**
- Local → Enclosing → Global → Built-in
- global, nonlocal keywords`,
    codeExamples: [
      { title: "Function Basics", code: `def greet(name, greeting="Hello"):
    return f"{greeting}, {name}!"
print(greet("Alice"))
print(greet("Bob", "Hi"))`, explanation: "Default parameters make args optional" },
      { title: "*args, **kwargs", code: `def total(*args):
    return sum(args)
def profile(**kwargs):
    for k, v in kwargs.items():
        print(f"{k}: {v}")
total(1,2,3)
profile(name="Alice", age=30)`, explanation: "*args=tuple, **kwargs=dict" }
    ],
    quiz: [
      { question: "*args collects into?", options: ["list", "tuple", "dict", "set"], answer: 1 },
      { question: "Function with no return gives?", options: ["0", "", "None", "Error"], answer: 2 }
    ],
    interviewQuestions: [
      { q: "*args vs **kwargs?", a: "*args collects extra positional args into tuple. **kwargs collects extra keyword args into dict. Order: (positional, *args, keyword-only, **kwargs)." }
    ]
  },
  {
    id: 37,
    language: "python",
    module: "Python Intermediate",
    title: "List Comprehensions & Generators",
    difficulty: "intermediate",
    description: "List/dict/set comprehensions, generator expressions, memory efficiency.",
    videoId: "bAUMuuRH99o",
    videoTitle: "List Comprehensions in Python | Python Tutorial",
    content: `Comprehensions are concise ways to create collections.

**List Comprehension**
- [expr for item in iterable if condition]

**Dict/Set Comprehension**
- {k: v for ...}
- {expr for ...}

**Generator Expression**
- (expr for ...) — lazy evaluation
- Memory efficient for large data`,
    codeExamples: [
      { title: "Comprehensions", code: `# List
squares = [x**2 for x in range(10)]
evens = [x for x in range(20) if x % 2 == 0]
# Dict
sq_dict = {x: x**2 for x in range(6)}
# Set
unique = {x % 3 for x in range(10)}`, explanation: "Concise, readable, fast" },
      { title: "Generator Expression", code: `# Generator (lazy)
gen = (x**2 for x in range(1000000))
print(next(gen))  # 0
print(next(gen))  # 1
# Memory efficient for large data`, explanation: "Generators compute on-demand" }
    ],
    quiz: [
      { question: "List comprehension syntax?", options: ["[for x in lst]", "[x for x in lst]", "{x for x in lst}", "(x for x in lst)"], answer: 1 },
      { question: "Generator vs list?", options: ["Same", "Generator is lazy", "List is faster", "No difference"], answer: 1 }
    ],
    interviewQuestions: [
      { q: "When to use generator vs list?", a: "Generators for large/infinite sequences (memory efficient, lazy evaluation). Lists when you need indexing, len(), or multiple iterations. Generators computed once, lists stored in memory." }
    ]
  },
  {
    id: 38,
    language: "python",
    module: "Python Intermediate",
    title: "File Handling",
    difficulty: "intermediate",
    description: "Reading/writing files, context managers (with), CSV, JSON handling.",
    videoId: "C2AekaOlRcM",
    videoTitle: "File Handling in Python | Python Tutorial",
    content: `File I/O with context managers for safety.

**Opening Files**
- open(path, mode)
- Modes: 'r', 'w', 'a', 'r+', 'rb', 'wb'

**Context Manager**
- with open(path) as f:
- Auto-closes file

**Reading**
- read(), readline(), readlines()
- for line in file:

**Writing**
- write(text), writelines(list)

**CSV & JSON**
- csv module, json module`,
    codeExamples: [
      { title: "Read/Write", code: `# Write
with open('data.txt', 'w') as f:
    f.write("Hello\\n")
    f.write("World")
# Read
with open('data.txt', 'r') as f:
    content = f.read()
    print(content)`, explanation: "with ensures file is closed" },
      { title: "JSON", code: `import json
data = {"name": "Alice", "age": 30}
# Write JSON
with open('data.json', 'w') as f:
    json.dump(data, f)
# Read JSON
with open('data.json') as f:
    loaded = json.load(f)`, explanation: "json.dump/load for files" }
    ],
    quiz: [
      { question: "'w' mode does what?", options: ["Read", "Write (overwrite)", "Append", "Read/write"], answer: 1 },
      { question: "Why use 'with'?", options: ["Faster", "Auto-closes", "Required", "Better syntax"], answer: 1 }
    ],
    interviewQuestions: [
      { q: "Why use context managers?", a: "Context managers (with statement) ensure resources are properly managed — files auto-close even if exceptions occur. Implements __enter__ and __exit__ methods. Prevents resource leaks." }
    ]
  },
  {
    id: 39,
    language: "python",
    module: "Python Intermediate",
    title: "Exception Handling",
    difficulty: "intermediate",
    description: "try/except/else/finally, raising exceptions, custom exceptions.",
    videoId: "WRNBQCl_cPU",
    videoTitle: "Exception Handling - try except | Python Tutorial",
    content: `Handle errors gracefully.

**try/except**
- try: risky code
- except ExceptionType: handle
- except: catch all (avoid)

**else/finally**
- else: runs if no exception
- finally: always runs

**Raising**
- raise Exception("msg")
- Custom exceptions`,
    codeExamples: [
      { title: "Basic try/except", code: `try:
    result = 10 / 0
except ZeroDivisionError:
    print("Cannot divide by zero")
except Exception as e:
    print(f"Error: {e}")
finally:
    print("Cleanup")`, explanation: "Specific exceptions first, generic last" },
      { title: "Raising Exceptions", code: `def validate_age(age):
    if age < 0:
        raise ValueError("Age cannot be negative")
    return age
try:
    validate_age(-5)
except ValueError as e:
    print(e)`, explanation: "Use raise to trigger exceptions" }
    ],
    quiz: [
      { question: "finally clause runs when?", options: ["On error", "No error", "Always", "Never"], answer: 2 },
      { question: "How to raise exception?", options: ["throw", "raise", "error", "except"], answer: 1 }
    ],
    interviewQuestions: [
      { q: "try/except/else/finally execution order?", a: "1) try block runs. 2) If exception: except runs. If no exception: else runs. 3) finally ALWAYS runs (cleanup), even if return/break in try/except." }
    ]
  },
  {
    id: 40,
    language: "python",
    module: "Python Intermediate",
    title: "Modules & Packages",
    difficulty: "intermediate",
    description: "Importing modules, creating packages, __init__.py, pip, virtual environments.",
    videoId: "wCkHbaLG5cw",
    videoTitle: "Modules in Python | Python Tutorial",
    content: `Organize code into modules and packages.

**Importing**
- import module
- from module import func
- import module as alias
- from package.module import *

**Creating Modules**
- Any .py file is a module
- __name__ == "__main__" for scripts

**Packages**
- Directory with __init__.py
- Organize related modules

**pip & venv**
- pip install package
- python -m venv env`,
    codeExamples: [
      { title: "Import Patterns", code: `# Import entire module
import math
print(math.sqrt(16))
# Import specific
from math import sqrt, pi
print(sqrt(16), pi)
# Alias
import numpy as np
print(np.array([1,2,3]))`, explanation: "Prefer specific imports for clarity" },
      { title: "Module Check", code: `# mymodule.py
def greet():
    print("Hello")
if __name__ == "__main__":
    # Only runs when executed directly
    greet()`, explanation: "__name__ == '__main__' for scripts" }
    ],
    quiz: [
      { question: "What makes a directory a package?", options: ["setup.py", "__init__.py", "package.json", "README"], answer: 1 },
      { question: "Install package command?", options: ["npm install", "pip install", "conda get", "python get"], answer: 1 }
    ],
    interviewQuestions: [
      { q: "__name__ == '__main__' purpose?", a: "Code under this check only runs when file is executed directly, not when imported as module. Allows modules to have executable scripts and importable functions." }
    ]
  },
  {
    id: 41,
    language: "python",
    module: "Python Intermediate",
    title: "Object-Oriented Programming - Basics",
    difficulty: "intermediate",
    description: "Classes, objects, __init__, instance/class attributes, methods, self.",
    videoId: "7RpdfkSyJfU",
    videoTitle: "Classes and Objects in Python | Python Tutorial",
    content: `Python is object-oriented.

**Defining Classes**
- class ClassName:
- __init__(self, ...) constructor
- self refers to instance

**Attributes**
- Instance attributes (self.x)
- Class attributes (shared)

**Methods**
- Instance methods (self)
- Class methods (@classmethod)
- Static methods (@staticmethod)`,
    codeExamples: [
      { title: "Class Basics", code: `class Person:
    def __init__(self, name, age):
        self.name = name
        self.age = age
    def greet(self):
        return f"Hi, I'm {self.name}"
p = Person("Alice", 30)
print(p.greet())`, explanation: "__init__ is constructor, self is instance" },
      { title: "Class vs Instance Attributes", code: `class Dog:
    species = "Canis familiaris"  # class attr
    def __init__(self, name):
        self.name = name  # instance attr
d1 = Dog("Buddy")
d2 = Dog("Max")
print(Dog.species)  # Same for all
print(d1.name, d2.name)  # Different`, explanation: "Class attrs shared, instance attrs unique" }
    ],
    quiz: [
      { question: "What is self?", options: ["Class name", "Instance reference", "Static var", "Constructor"], answer: 1 },
      { question: "__init__ is?", options: ["Destructor", "Constructor", "Method", "Attribute"], answer: 1 }
    ],
    interviewQuestions: [
      { q: "Explain self in Python.", a: "self is a reference to the instance. It's the first parameter of instance methods (convention, not keyword). Allows accessing instance attributes/methods. Unlike Java/JS, Python requires explicit self." }
    ]
  },
  {
    id: 42,
    language: "python",
    module: "Python Intermediate",
    title: "OOP - Inheritance & Polymorphism",
    difficulty: "intermediate",
    description: "Inheritance, super(), method overriding, multiple inheritance, MRO.",
    videoId: "9loYq8W8rsg",
    videoTitle: "Inheritance in Python | Python Tutorial",
    content: `Inheritance allows code reuse.

**Inheritance**
- class Child(Parent):
- super() calls parent methods

**Method Overriding**
- Redefine parent methods

**Multiple Inheritance**
- class C(A, B):
- MRO (Method Resolution Order)

**Polymorphism**
- Same interface, different implementations`,
    codeExamples: [
      { title: "Inheritance", code: `class Animal:
    def speak(self):
        return "Some sound"
class Dog(Animal):
    def speak(self):
        return "Woof!"
class Cat(Animal):
    def speak(self):
        return "Meow!"
dog = Dog()
print(dog.speak())  # Woof!`, explanation: "Child classes override parent methods" },
      { title: "super()", code: `class Parent:
    def __init__(self, name):
        self.name = name
class Child(Parent):
    def __init__(self, name, age):
        super().__init__(name)
        self.age = age
c = Child("Alice", 10)`, explanation: "super() calls parent constructor" }
    ],
    quiz: [
      { question: "super() does what?", options: ["Creates instance", "Calls parent method", "Defines class", "Deletes object"], answer: 1 },
      { question: "Can Python have multiple inheritance?", options: ["Yes", "No", "Only 2 classes", "Not recommended"], answer: 0 }
    ],
    interviewQuestions: [
      { q: "What is MRO in Python?", a: "Method Resolution Order determines which parent class's method is called in multiple inheritance. Python uses C3 linearization algorithm. Check with ClassName.__mro__ or ClassName.mro()." }
    ]
  },
  {
    id: 43,
    language: "python",
    module: "Python Advanced",
    title: "Decorators",
    difficulty: "advanced",
    description: "Function decorators, closures, @property, @staticmethod, @classmethod.",
    videoId: "oR0yIjzfxQw",
    videoTitle: "Decorators in Python | Python Tutorial",
    content: `Decorators modify function behavior.

**Function Decorators**
- @decorator syntax
- Wraps functions

**Built-in Decorators**
- @property (getter/setter)
- @staticmethod (no self)
- @classmethod (cls param)

**Custom Decorators**
- Returns wrapper function`,
    codeExamples: [
      { title: "Simple Decorator", code: `def uppercase(func):
    def wrapper():
        result = func()
        return result.upper()
    return wrapper
@uppercase
def greet():
    return "hello"
print(greet())  # HELLO`, explanation: "@uppercase is syntax sugar for greet = uppercase(greet)" },
      { title: "@property", code: `class Circle:
    def __init__(self, radius):
        self._radius = radius
    @property
    def area(self):
        return 3.14 * self._radius ** 2
c = Circle(5)
print(c.area)  # 78.5 (no parentheses)`, explanation: "@property makes method accessible as attribute" }
    ],
    quiz: [
      { question: "What does @decorator do?", options: ["Comments code", "Modifies function", "Imports module", "Defines class"], answer: 1 },
      { question: "@staticmethod has which param?", options: ["self", "cls", "None", "super"], answer: 2 }
    ],
    interviewQuestions: [
      { q: "Explain decorators in Python.", a: "Decorators are functions that take a function and return a modified function. They wrap the original function to add functionality (logging, timing, access control). @decorator syntax is syntactic sugar for func = decorator(func)." }
    ]
  },
  {
    id: 44,
    language: "python",
    module: "Python Advanced",
    title: "Lambda & Functional Programming",
    difficulty: "advanced",
    description: "Lambda functions, map(), filter(), reduce(), partial functions.",
    videoId: "bJKjtC9MnZ8",
    videoTitle: "Lambda Functions in Python | Python Tutorial",
    content: `Functional programming in Python.

**Lambda Functions**
- lambda args: expression
- Anonymous one-liner functions

**map(func, iterable)**
- Apply function to all items

**filter(func, iterable)**
- Keep items where func returns True

**reduce(func, iterable)**
- from functools import reduce
- Cumulative computation`,
    codeExamples: [
      { title: "Lambda & map", code: `# Lambda
square = lambda x: x**2
print(square(5))  # 25
# map
nums = [1, 2, 3, 4]
doubled = list(map(lambda x: x*2, nums))
print(doubled)  # [2, 4, 6, 8]`, explanation: "Lambda for short anonymous functions" },
      { title: "filter & reduce", code: `# filter
nums = range(10)
evens = list(filter(lambda x: x%2==0, nums))
# reduce
from functools import reduce
product = reduce(lambda x,y: x*y, [1,2,3,4])
print(product)  # 24`, explanation: "Functional style data transformation" }
    ],
    quiz: [
      { question: "Lambda syntax?", options: ["func x: x", "lambda x: x", "def x: x", "=> x"], answer: 1 },
      { question: "map() returns?", options: ["list", "iterator", "dict", "tuple"], answer: 1 }
    ],
    interviewQuestions: [
      { q: "Lambda vs def function?", a: "Lambda: single expression, anonymous, no statements. def: multiple statements, named, can have docstrings. Lambda for simple callbacks/transformations, def for complex logic." }
    ]
  },
  {
    id: 45,
    language: "python",
    module: "Python Advanced",
    title: "Type Hints & Annotations",
    difficulty: "advanced",
    description: "Type hints, typing module, Optional, Union, List, Dict types.",
    videoId: "C2AekaOlRcM",
    videoTitle: "Type Hints in Python | Python Tutorial",
    content: `Optional static type hints (Python 3.5+).

**Basic Types**
- def func(x: int) -> str:

**typing Module**
- List[int], Dict[str, int]
- Optional[int] (int or None)
- Union[int, str]

**Benefits**
- IDE autocomplete
- Type checkers (mypy)
- Self-documenting code`,
    codeExamples: [
      { title: "Type Hints", code: `def greet(name: str) -> str:
    return f"Hello, {name}"
def add(a: int, b: int) -> int:
    return a + b
result: int = add(3, 5)`, explanation: "Not enforced at runtime, for tools/docs" },
      { title: "typing Module", code: `from typing import List, Dict, Optional
def process(items: List[int]) -> Dict[str, int]:
    return {"count": len(items)}
def find(name: str) -> Optional[str]:
    return name if name else None`, explanation: "Complex types for collections" }
    ],
    quiz: [
      { question: "Type hints are enforced?", options: ["Yes, always", "No, optional", "Only in strict mode", "Only with mypy"], answer: 1 },
      { question: "Optional[int] means?", options: ["Required int", "int or None", "int or str", "Any type"], answer: 1 }
    ],
    interviewQuestions: [
      { q: "Are Python type hints enforced?", a: "No. Type hints are optional annotations for documentation and tooling (IDEs, mypy). Python remains dynamically typed at runtime. Type checkers can enforce them in CI/CD." }
    ]
  },
  {
    id: 46,
    language: "python",
    module: "Python Projects",
    title: "Project: Simple Calculator CLI",
    difficulty: "beginner",
    description: "Build a command-line calculator with basic operations and error handling.",
    videoId: "C2AekaOlRcM",
    videoTitle: "Python Project - Calculator | Python Tutorial",
    content: `Build a calculator with:

**Features**
- Basic operations: +, -, *, /
- Error handling
- User input loop
- Quit command

**Concepts Used**
- Functions
- while loop
- try/except
- input/output`,
    codeExamples: [
      { title: "Calculator", code: `def calculate(a, b, op):
    if op == '+': return a + b
    elif op == '-': return a - b
    elif op == '*': return a * b
    elif op == '/': return a / b if b != 0 else "Error"
while True:
    try:
        a = float(input("First: "))
        op = input("Op (+,-,*,/): ")
        b = float(input("Second: "))
        print(f"Result: {calculate(a, b, op)}")
    except ValueError:
        print("Invalid input")
    if input("Continue? (y/n): ") != 'y':
        break`, explanation: "Combines user input, loops, error handling" }
    ],
    quiz: [
      { question: "What handles invalid input?", options: ["if/else", "try/except", "match/case", "assert"], answer: 1 }
    ],
    interviewQuestions: [
      { q: "How would you extend this calculator?", a: "Add: scientific functions (sqrt, sin, cos), expression parsing (eval with safety), history tracking (list of operations), save/load from file, GUI with tkinter." }
    ]
  },
  {
    id: 47,
    language: "python",
    module: "Python Projects",
    title: "Project: File Organizer Script",
    difficulty: "intermediate",
    description: "Organize files by extension into folders automatically.",
    videoId: "C2AekaOlRcM",
    videoTitle: "Python Project - File Organizer | Python Tutorial",
    content: `Organize files by type.

**Features**
- Scan directory
- Group by extension
- Create folders
- Move files

**Modules Used**
- os, shutil, pathlib`,
    codeExamples: [
      { title: "File Organizer", code: `import os, shutil
from pathlib import Path
def organize(directory):
    for file in Path(directory).iterdir():
        if file.is_file():
            ext = file.suffix[1:]  # .txt -> txt
            folder = Path(directory) / ext
            folder.mkdir(exist_ok=True)
            shutil.move(str(file), str(folder / file.name))
organize('/path/to/downloads')`, explanation: "Automates file organization" }
    ],
    quiz: [
      { question: "Which module moves files?", options: ["os", "shutil", "pathlib", "sys"], answer: 1 }
    ],
    interviewQuestions: [
      { q: "How to make this safer?", a: "Add: dry-run mode (preview changes), undo functionality (log moves), handle name conflicts (append numbers), skip system files, add user confirmation, backup before moving." }
    ]
  },
  {
    id: 48,
    language: "python",
    module: "Python Projects",
    title: "Project: Web Scraper with BeautifulSoup",
    difficulty: "intermediate",
    description: "Scrape website data and save to CSV using requests and BeautifulSoup.",
    videoId: "C2AekaOlRcM",
    videoTitle: "Python Project - Web Scraper | Python Tutorial",
    content: `Web scraping basics.

**Libraries**
- requests (HTTP)
- BeautifulSoup (parsing)
- csv (saving data)

**Steps**
1. Fetch HTML
2. Parse with BeautifulSoup
3. Extract data
4. Save to CSV`,
    codeExamples: [
      { title: "Simple Scraper", code: `import requests
from bs4 import BeautifulSoup
import csv
url = "https://example.com"
response = requests.get(url)
soup = BeautifulSoup(response.text, 'html.parser')
titles = [h2.text for h2 in soup.find_all('h2')]
with open('data.csv', 'w') as f:
    writer = csv.writer(f)
    writer.writerow(['Title'])
    for title in titles:
        writer.writerow([title])`, explanation: "Basic scraping + CSV export" }
    ],
    quiz: [
      { question: "BeautifulSoup parses?", options: ["CSV", "HTML", "JSON", "XML only"], answer: 1 }
    ],
    interviewQuestions: [
      { q: "Ethical web scraping practices?", a: "Check robots.txt, respect rate limits, don't overload servers, use user-agent header, handle errors gracefully, cache data to reduce requests, prefer official APIs when available." }
    ]
  },
  {
    id: 49,
    language: "python",
    module: "Python Interview Prep",
    title: "Python Interview - Core Concepts",
    difficulty: "intermediate",
    description: "Common interview questions on Python fundamentals, data structures, and key differences.",
    videoId: "C2AekaOlRcM",
    videoTitle: "Python Interview Questions - Part 1",
    content: `Essential Python interview topics.

**Must-Know Topics**
- List vs tuple vs set vs dict
- Mutable vs immutable
- == vs is
- Deep vs shallow copy
- GIL (Global Interpreter Lock)
- *args, **kwargs
- List comprehensions
- Generators
- Decorators
- Context managers`,
    codeExamples: [
      { title: "Common Patterns", code: `# Remove duplicates (preserve order)
lst = [1, 2, 2, 3, 1]
unique = list(dict.fromkeys(lst))
# Flatten nested list
nested = [[1,2], [3,4]]
flat = [x for sub in nested for x in sub]
# Count occurrences
from collections import Counter
counts = Counter([1,2,2,3,3,3])
print(counts.most_common(1))  # [(3, 3)]`, explanation: "Interview-favorite patterns" }
    ],
    quiz: [
      { question: "What is GIL?", options: ["Graphics library", "Global Interpreter Lock", "Generator interface", "Generic iterator"], answer: 1 },
      { question: "Deep copy module?", options: ["copy", "clone", "duplicate", "deepcopy"], answer: 0 }
    ],
    interviewQuestions: [
      { q: "Explain the GIL.", a: "Global Interpreter Lock is a mutex that protects access to Python objects, preventing multiple threads from executing Python bytecode simultaneously. Consequence: CPU-bound multithreading doesn't parallelize. Solutions: multiprocessing, asyncio for I/O-bound tasks, or use C extensions." },
      { q: "Shallow vs deep copy?", a: "Shallow copy (copy.copy()): creates new object but references same nested objects. Deep copy (copy.deepcopy()): recursively copies all objects. Matters for nested structures — shallow copy of [[1,2]] shares the inner list." }
    ]
  },
  {
    id: 50,
    language: "python",
    module: "Python Interview Prep",
    title: "Python Interview - OOP & Design Patterns",
    difficulty: "advanced",
    description: "OOP concepts, SOLID principles, common design patterns in Python.",
    videoId: "C2AekaOlRcM",
    videoTitle: "Python Interview - OOP Questions",
    content: `OOP and design patterns.

**OOP Pillars**
- Encapsulation, Inheritance, Polymorphism, Abstraction

**SOLID Principles**
- Single Responsibility
- Open/Closed
- Liskov Substitution
- Interface Segregation
- Dependency Inversion

**Common Patterns**
- Singleton, Factory, Observer, Strategy, Decorator`,
    codeExamples: [
      { title: "Singleton Pattern", code: `class Singleton:
    _instance = None
    def __new__(cls):
        if cls._instance is None:
            cls._instance = super().__new__(cls)
        return cls._instance
s1 = Singleton()
s2 = Singleton()
print(s1 is s2)  # True`, explanation: "Ensures only one instance exists" }
    ],
    quiz: [
      { question: "Which ensures one instance?", options: ["Factory", "Singleton", "Observer", "Strategy"], answer: 1 }
    ],
    interviewQuestions: [
      { q: "Explain encapsulation in Python.", a: "Encapsulation bundles data (attributes) and methods in a class, hiding internal details. Python uses name mangling (double underscore prefix __attr) for pseudo-private attributes. No true private members — convention uses single underscore _attr for internal use." },
      { q: "When to use ABC (Abstract Base Class)?", a: "Use ABC when you want to define an interface that subclasses must implement. from abc import ABC, abstractmethod. Enforces contract — subclasses must implement abstract methods or raise TypeError. Good for frameworks and APIs." }
    ]
  },
  {
    id: 51,
    language: "python",
    module: "Python Interview Prep",
    title: "Python Interview - Data Structures & Algorithms",
    difficulty: "advanced",
    description: "Common DSA questions using Python: arrays, strings, hashmaps, sorting, searching.",
    videoId: "C2AekaOlRcM",
    videoTitle: "Python Interview - DSA Questions",
    content: `Data structures and algorithms in Python.

**Common Problems**
- Two Sum (hashmap)
- Reverse string/list
- Palindrome check
- Binary search
- Merge sorted lists
- Find duplicates
- Valid parentheses (stack)

**Python DSA Tools**
- collections (deque, Counter, defaultdict)
- heapq (priority queue)
- bisect (binary search)
- itertools (combinations, permutations)`,
    codeExamples: [
      { title: "Two Sum", code: `def two_sum(nums, target):
    seen = {}
    for i, num in enumerate(nums):
        complement = target - num
        if complement in seen:
            return [seen[complement], i]
        seen[num] = i
    return []
print(two_sum([2,7,11,15], 9))  # [0,1]`, explanation: "O(n) with hashmap" },
      { title: "Valid Parentheses", code: `def valid_parens(s):
    stack = []
    pairs = {'(': ')', '[': ']', '{': '}'}
    for char in s:
        if char in pairs:
            stack.append(char)
        elif not stack or pairs[stack.pop()] != char:
            return False
    return not stack
print(valid_parens("()[]{}"))  # True`, explanation: "Stack for bracket matching" }
    ],
    quiz: [
      { question: "Two Sum optimal time?", options: ["O(n²)", "O(n log n)", "O(n)", "O(1)"], answer: 2 },
      { question: "Valid parentheses uses?", options: ["Queue", "Stack", "Set", "Dict"], answer: 1 }
    ],
    interviewQuestions: [
      { q: "How to reverse a string in Python?", a: "s[::-1] is most Pythonic. Alternatives: ''.join(reversed(s)), or manual loop. For in-place reversal of a list: lst.reverse() or lst[:] = lst[::-1]. Strings are immutable, so always create new string." },
      { q: "Explain time complexity of dict operations.", a: "Average case: O(1) for get/set/delete due to hash table. Worst case: O(n) on hash collisions. Space: O(n). Keys must be hashable (immutable types). Python 3.7+ maintains insertion order." }
    ]
  },

  // ============ PYTHON WEB DEVELOPMENT ============
  {
    id: 52,
    language: "python",
    module: "Python Web Development",
    title: "Introduction to Flask",
    difficulty: "intermediate",
    description: "Build web applications with Flask, routes, templates, and request handling.",
    videoId: "Z1RJmh_OqeA",
    videoTitle: "Flask Tutorial for Beginners",
    content: `Flask is a lightweight WSGI web framework for Python. It's called a "micro" framework because it keeps the core simple but extensible.

**Why Flask?**
- Minimal setup, great for small to medium projects
- Flexible — no forced project structure
- Easy to learn
- Large ecosystem of extensions
- RESTful request dispatching
- Integrated development server and debugger

**Installation**
\`\`\`bash
pip install flask
\`\`\`

**Core Concepts**
- Routes: URL patterns mapped to functions
- Templates: Jinja2 templating engine
- Request/Response: handle HTTP methods
- Sessions: user data across requests
- Blueprints: organize large apps

**Project Structure**
\`\`\`
myapp/
  ├── app.py          # Main application
  ├── templates/      # HTML templates
  ├── static/         # CSS, JS, images
  └── requirements.txt
\`\`\``,
    codeExamples: [
      {
        title: "Basic Flask App",
        code: `from flask import Flask, render_template, request, jsonify

app = Flask(__name__)

@app.route('/')
def home():
    return "Hello, Flask!"

@app.route('/about')
def about():
    return render_template('about.html')

@app.route('/api/data')
def api_data():
    return jsonify({'message': 'Hello API', 'status': 'success'})

@app.route('/user/<username>')
def show_user(username):
    return f"User: {username}"

if __name__ == '__main__':
    app.run(debug=True)`,
        explanation: "Routes map URLs to functions. @app.route() decorator defines endpoints. Variables in <> are path parameters."
      },
      {
        title: "Handling Forms and POST Requests",
        code: `from flask import Flask, request, redirect, url_for

app = Flask(__name__)

@app.route('/login', methods=['GET', 'POST'])
def login():
    if request.method == 'POST':
        username = request.form['username']
        password = request.form['password']
        
        # Validate credentials
        if username == 'admin' and password == 'secret':
            return redirect(url_for('dashboard'))
        else:
            return "Invalid credentials", 401
    
    # GET request - show form
    return '''
        <form method="post">
            <input name="username" placeholder="Username">
            <input name="password" type="password" placeholder="Password">
            <button type="submit">Login</button>
        </form>
    '''

@app.route('/dashboard')
def dashboard():
    return "Welcome to Dashboard!"`,
        explanation: "request.method checks HTTP method. request.form accesses form data. url_for() generates URLs by function name."
      },
      {
        title: "JSON API with Error Handling",
        code: `from flask import Flask, jsonify, request
from functools import wraps

app = Flask(__name__)

def require_api_key(f):
    @wraps(f)
    def decorated(*args, **kwargs):
        api_key = request.headers.get('X-API-Key')
        if api_key != 'secret-key':
            return jsonify({'error': 'Unauthorized'}), 401
        return f(*args, **kwargs)
    return decorated

@app.route('/api/users', methods=['GET'])
@require_api_key
def get_users():
    users = [
        {'id': 1, 'name': 'Alice'},
        {'id': 2, 'name': 'Bob'}
    ]
    return jsonify(users)

@app.errorhandler(404)
def not_found(error):
    return jsonify({'error': 'Not found'}), 404

@app.errorhandler(500)
def internal_error(error):
    return jsonify({'error': 'Internal server error'}), 500`,
        explanation: "Custom decorators for authentication. @app.errorhandler() for custom error responses."
      }
    ],
    quiz: [
      { question: "What is Flask?", options: ["Database", "Web framework", "Testing tool", "Package manager"], answer: 1 },
      { question: "Which template engine does Flask use?", options: ["Django templates", "Jinja2", "Mako", "Handlebars"], answer: 1 },
      { question: "How to run Flask in debug mode?", options: ["app.debug()", "app.run(debug=True)", "flask --debug", "debug=True"], answer: 1 },
      { question: "What does @app.route() do?", options: ["Creates database", "Maps URL to function", "Sends email", "Validates forms"], answer: 1 }
    ],
    interviewQuestions: [
      { q: "What is Flask and how does it differ from Django?", a: "Flask is a micro web framework — minimal core with extensions for additional features. Django is batteries-included with ORM, admin panel, auth built-in. Flask gives more flexibility and control, Django provides faster development with conventions. Choose Flask for APIs, microservices, custom architectures; Django for full-featured web apps with standard requirements." },
      { q: "Explain Flask application context and request context.", a: "Application context: holds app-level data (config, database connections), exists once per application. Request context: created for each request, contains request and session objects. Use 'current_app' to access app context, 'request' for request context. Contexts are pushed/popped automatically but can be managed manually with 'with app.app_context()' or 'with app.test_request_context()'." }
    ]
  },
  {
    id: 53,
    language: "python",
    module: "Python Web Development",
    title: "Django Fundamentals",
    difficulty: "intermediate",
    description: "Build robust web apps with Django: models, views, templates, and the admin interface.",
    videoId: "rHux0gMZ3Eg",
    videoTitle: "Django Tutorial for Beginners",
    content: `Django is a high-level Python web framework that encourages rapid development and clean, pragmatic design.

**Philosophy**
- "Batteries included" — comes with everything you need
- DRY (Don't Repeat Yourself)
- Convention over configuration
- Security by default

**Installation**
\`\`\`bash
pip install django
django-admin startproject mysite
python manage.py runserver
\`\`\`

**Key Components**
- **Models**: Database structure (ORM)
- **Views**: Business logic
- **Templates**: HTML presentation
- **URLs**: Routing configuration
- **Admin**: Auto-generated admin interface
- **Forms**: Data validation and processing

**MTV Pattern**
Model-Template-View (similar to MVC but View handles logic, Template handles presentation)

**Apps**
Django projects contain multiple apps. Each app is a Python package that does one thing.`,
    codeExamples: [
      {
        title: "Django Models - ORM",
        code: `# models.py
from django.db import models
from django.contrib.auth.models import User

class Category(models.Model):
    name = models.CharField(max_length=100)
    slug = models.SlugField(unique=True)
    created_at = models.DateTimeField(auto_now_add=True)
    
    class Meta:
        verbose_name_plural = "Categories"
    
    def __str__(self):
        return self.name

class Post(models.Model):
    STATUS_CHOICES = [
        ('draft', 'Draft'),
        ('published', 'Published'),
    ]
    
    title = models.CharField(max_length=200)
    slug = models.SlugField(unique=True)
    author = models.ForeignKey(User, on_delete=models.CASCADE)
    category = models.ForeignKey(Category, on_delete=models.SET_NULL, null=True)
    content = models.TextField()
    status = models.CharField(max_length=10, choices=STATUS_CHOICES, default='draft')
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    
    class Meta:
        ordering = ['-created_at']
    
    def __str__(self):
        return self.title

# Create migrations:
# python manage.py makemigrations
# python manage.py migrate`,
        explanation: "Models define database schema. Django ORM handles SQL. Field types map to database columns. Relationships: ForeignKey, ManyToManyField, OneToOneField."
      },
      {
        title: "Django Views - Function and Class-Based",
        code: `# views.py
from django.shortcuts import render, get_object_or_404, redirect
from django.views.generic import ListView, DetailView
from django.contrib.auth.decorators import login_required
from .models import Post, Category

# Function-based view
def post_list(request):
    posts = Post.objects.filter(status='published')
    categories = Category.objects.all()
    context = {
        'posts': posts,
        'categories': categories
    }
    return render(request, 'blog/post_list.html', context)

def post_detail(request, slug):
    post = get_object_or_404(Post, slug=slug, status='published')
    return render(request, 'blog/post_detail.html', {'post': post})

# Class-based view
class PostListView(ListView):
    model = Post
    template_name = 'blog/post_list.html'
    context_object_name = 'posts'
    paginate_by = 10
    
    def get_queryset(self):
        return Post.objects.filter(status='published')

class PostDetailView(DetailView):
    model = Post
    template_name = 'blog/post_detail.html'
    context_object_name = 'post'
    slug_field = 'slug'

# Protected view
@login_required
def create_post(request):
    if request.method == 'POST':
        # Handle form submission
        pass
    return render(request, 'blog/create_post.html')`,
        explanation: "Function-based views are simple functions. Class-based views (CBVs) provide reusable patterns. get_object_or_404 returns 404 if not found."
      },
      {
        title: "Django URLs and Templates",
        code: `# urls.py
from django.urls import path
from . import views

app_name = 'blog'

urlpatterns = [
    path('', views.PostListView.as_view(), name='post_list'),
    path('post/<slug:slug>/', views.post_detail, name='post_detail'),
    path('category/<slug:slug>/', views.category_posts, name='category_posts'),
    path('create/', views.create_post, name='create_post'),
]

# Template: post_list.html
{% extends 'base.html' %}

{% block content %}
  <h1>Blog Posts</h1>
  
  {% for post in posts %}
    <article>
      <h2>
        <a href="{% url 'blog:post_detail' post.slug %}">
          {{ post.title }}
        </a>
      </h2>
      <p>By {{ post.author.username }} on {{ post.created_at|date:"F j, Y" }}</p>
      <p>{{ post.content|truncatewords:30 }}</p>
    </article>
  {% empty %}
    <p>No posts available.</p>
  {% endfor %}
  
  {% if is_paginated %}
    <div class="pagination">
      {% if page_obj.has_previous %}
        <a href="?page={{ page_obj.previous_page_number }}">Previous</a>
      {% endif %}
      <span>Page {{ page_obj.number }} of {{ page_obj.paginator.num_pages }}</span>
      {% if page_obj.has_next %}
        <a href="?page={{ page_obj.next_page_number }}">Next</a>
      {% endif %}
    </div>
  {% endif %}
{% endblock %}`,
        explanation: "URL patterns use path converters like <slug:slug>. Templates use {% %} for logic, {{ }} for variables. Filters modify display with |."
      }
    ],
    quiz: [
      { question: "What does ORM stand for?", options: ["Object Relational Mapping", "Online Resource Manager", "Operational Risk Model", "Open Request Method"], answer: 0 },
      { question: "Django's design pattern is called?", options: ["MVC", "MVP", "MTV", "MVVM"], answer: 2 },
      { question: "Command to create migrations?", options: ["migrate", "makemigrations", "syncdb", "createdb"], answer: 1 },
      { question: "What is django-admin?", options: ["Admin panel", "Command-line utility", "Database tool", "Testing framework"], answer: 1 }
    ],
    interviewQuestions: [
      { q: "Explain Django's MTV architecture.", a: "MTV = Model-Template-View. Model: data layer (ORM, database schema). Template: presentation layer (HTML with Django template language). View: business logic (processes requests, interacts with models, returns responses). URLs route requests to views. Similar to MVC but View is controller and Template is view." },
      { q: "What are Django signals and when to use them?", a: "Signals allow decoupled applications to get notified when actions occur. Common signals: pre_save, post_save, pre_delete, post_delete, m2m_changed. Use for side effects: sending emails after user registration, updating cache, logging. Avoid for core business logic — use model methods instead. Signals can make debugging harder due to hidden coupling." }
    ]
  },
  {
    id: 54,
    language: "python",
    module: "Python Web Development",
    title: "REST APIs with Django REST Framework",
    difficulty: "advanced",
    description: "Build powerful RESTful APIs with serializers, viewsets, authentication, and permissions.",
    videoId: "c708Nf0cHrs",
    videoTitle: "Django REST Framework Tutorial",
    content: `Django REST Framework (DRF) is a powerful toolkit for building Web APIs.

**Features**
- Serialization of complex data types
- Authentication (token, session, JWT, OAuth)
- Permissions and throttling
- Browsable API for testing
- Pagination, filtering, searching
- Viewsets and routers

**Installation**
\`\`\`bash
pip install djangorestframework
pip install djangorestframework-simplejwt  # For JWT auth
\`\`\`

**Core Concepts**
- **Serializers**: Convert complex data ↔ JSON/XML
- **Views/Viewsets**: Handle API logic
- **Routers**: Auto-generate URL patterns
- **Authentication**: Verify user identity
- **Permissions**: Control access

**Best Practices**
- Version your API (/api/v1/)
- Use proper HTTP methods and status codes
- Implement pagination for large datasets
- Add filtering and searching
- Document with drf-spectacular or drf-yasg`,
    codeExamples: [
      {
        title: "Serializers - Data Transformation",
        code: `# serializers.py
from rest_framework import serializers
from .models import Post, Category, Comment

class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields = ['id', 'name', 'slug']

class CommentSerializer(serializers.ModelSerializer):
    author_name = serializers.CharField(source='author.username', read_only=True)
    
    class Meta:
        model = Comment
        fields = ['id', 'author_name', 'content', 'created_at']
        read_only_fields = ['created_at']

class PostSerializer(serializers.ModelSerializer):
    author = serializers.StringRelatedField(read_only=True)
    category = CategorySerializer(read_only=True)
    category_id = serializers.IntegerField(write_only=True)
    comments = CommentSerializer(many=True, read_only=True)
    comments_count = serializers.SerializerMethodField()
    
    class Meta:
        model = Post
        fields = [
            'id', 'title', 'slug', 'author', 'category', 
            'category_id', 'content', 'status', 'created_at',
            'comments', 'comments_count'
        ]
        read_only_fields = ['created_at', 'author']
    
    def get_comments_count(self, obj):
        return obj.comments.count()
    
    def validate_title(self, value):
        if len(value) < 5:
            raise serializers.ValidationError("Title too short")
        return value

class PostCreateSerializer(serializers.ModelSerializer):
    class Meta:
        model = Post
        fields = ['title', 'content', 'category', 'status']`,
        explanation: "Serializers validate and transform data. ModelSerializer auto-generates fields. SerializerMethodField for computed values. Use separate serializers for different operations."
      },
      {
        title: "Viewsets and Routers",
        code: `# views.py
from rest_framework import viewsets, status, filters
from rest_framework.decorators import action
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticatedOrReadOnly
from django_filters.rest_framework import DjangoFilterBackend
from .models import Post, Category
from .serializers import PostSerializer, CategorySerializer
from .permissions import IsAuthorOrReadOnly

class PostViewSet(viewsets.ModelViewSet):
    queryset = Post.objects.filter(status='published')
    serializer_class = PostSerializer
    permission_classes = [IsAuthenticatedOrReadOnly, IsAuthorOrReadOnly]
    filter_backends = [DjangoFilterBackend, filters.SearchFilter, filters.OrderingFilter]
    filterset_fields = ['category', 'author', 'status']
    search_fields = ['title', 'content']
    ordering_fields = ['created_at', 'title']
    
    def perform_create(self, serializer):
        serializer.save(author=self.request.user)
    
    # Custom action
    @action(detail=True, methods=['post'])
    def publish(self, request, pk=None):
        post = self.get_object()
        post.status = 'published'
        post.save()
        return Response({'status': 'post published'})
    
    @action(detail=False, methods=['get'])
    def my_posts(self, request):
        posts = Post.objects.filter(author=request.user)
        serializer = self.get_serializer(posts, many=True)
        return Response(serializer.data)

class CategoryViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = Category.objects.all()
    serializer_class = CategorySerializer

# urls.py
from rest_framework.routers import DefaultRouter
from .views import PostViewSet, CategoryViewSet

router = DefaultRouter()
router.register(r'posts', PostViewSet, basename='post')
router.register(r'categories', CategoryViewSet, basename='category')

urlpatterns = router.urls
# Auto-generates:
# GET    /posts/          - list
# POST   /posts/          - create
# GET    /posts/{id}/     - retrieve
# PUT    /posts/{id}/     - update
# PATCH  /posts/{id}/     - partial update
# DELETE /posts/{id}/     - delete
# POST   /posts/{id}/publish/  - custom action`,
        explanation: "ViewSets combine logic for CRUD operations. Routers auto-generate URLs. @action creates custom endpoints. ModelViewSet provides all CRUD, ReadOnlyModelViewSet only GET."
      },
      {
        title: "Authentication and Permissions",
        code: `# settings.py
REST_FRAMEWORK = {
    'DEFAULT_AUTHENTICATION_CLASSES': [
        'rest_framework_simplejwt.authentication.JWTAuthentication',
        'rest_framework.authentication.SessionAuthentication',
    ],
    'DEFAULT_PERMISSION_CLASSES': [
        'rest_framework.permissions.IsAuthenticatedOrReadOnly',
    ],
    'DEFAULT_PAGINATION_CLASS': 'rest_framework.pagination.PageNumberPagination',
    'PAGE_SIZE': 20,
}

# permissions.py
from rest_framework import permissions

class IsAuthorOrReadOnly(permissions.BasePermission):
    def has_object_permission(self, request, view, obj):
        # Read permissions for any request
        if request.method in permissions.SAFE_METHODS:
            return True
        # Write permissions only for author
        return obj.author == request.user

# JWT URLs
from rest_framework_simplejwt.views import (
    TokenObtainPairView,
    TokenRefreshView,
)

urlpatterns = [
    path('api/token/', TokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('api/token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
]

# Usage:
# POST /api/token/  {"username": "user", "password": "pass"}
# Returns: {"access": "...", "refresh": "..."}
# Headers: Authorization: Bearer <access_token>`,
        explanation: "JWT tokens for stateless auth. Custom permissions inherit BasePermission. SAFE_METHODS = GET, HEAD, OPTIONS. Configure DRF globally in settings.REST_FRAMEWORK."
      }
    ],
    quiz: [
      { question: "What does DRF stand for?", options: ["Django REST Framework", "Data REST Format", "Django Response Form", "Database REST Function"], answer: 0 },
      { question: "Which HTTP method for updating partial data?", options: ["PUT", "PATCH", "POST", "UPDATE"], answer: 1 },
      { question: "What are SAFE_METHODS?", options: ["POST, PUT, DELETE", "GET, HEAD, OPTIONS", "All methods", "None"], answer: 1 },
      { question: "JWT stands for?", options: ["Java Web Token", "JSON Web Token", "JavaScript Web Tool", "Join Web Transfer"], answer: 1 }
    ],
    interviewQuestions: [
      { q: "Difference between APIView, GenericAPIView, and ViewSet in DRF?", a: "APIView: lowest level, manual method handling (get, post, etc). GenericAPIView: adds queryset/serializer, requires mixins or explicit methods. ViewSet: combines logic for related views (list, create, retrieve, update, delete) into one class. ModelViewSet = GenericViewSet + all CRUD mixins. Use APIView for custom logic, ViewSets for standard CRUD with routers." },
      { q: "How to implement API versioning in DRF?", a: "Three approaches: 1) URL path versioning (/api/v1/posts/) - most common, clear. 2) Query parameter (?version=1) - flexible. 3) Header versioning (Accept: application/json; version=1) - clean URLs but hidden. Configure in settings: DEFAULT_VERSIONING_CLASS. URLPathVersioning recommended for public APIs. Access version in view with request.version." }
    ]
  },

  // ============ PYTHON DATA SCIENCE ============
  {
    id: 55,
    language: "python",
    module: "Python Data Science",
    title: "NumPy Fundamentals",
    difficulty: "intermediate",
    description: "Master numerical computing with NumPy arrays, operations, broadcasting, and linear algebra.",
    videoId: "QUT1VHiLmmI",
    videoTitle: "NumPy Tutorial for Beginners",
    content: `NumPy is the fundamental package for scientific computing in Python. It provides powerful N-dimensional array objects and tools.

**Why NumPy?**
- Fast operations on arrays (written in C)
- 50x faster than Python lists for numerical operations
- Broadcasting: vectorized operations
- Foundation for Pandas, SciPy, Scikit-learn
- Linear algebra, Fourier transform, random numbers

**Installation**
\`\`\`bash
pip install numpy
\`\`\`

**Key Concepts**
- **ndarray**: N-dimensional array object
- **dtype**: Data type (int32, float64, etc.)
- **Shape**: Dimensions of array
- **Broadcasting**: Operations on arrays of different shapes
- **Indexing/Slicing**: Access and modify data
- **Universal functions (ufuncs)**: Fast element-wise operations

**Performance**
NumPy arrays use contiguous memory blocks, enabling SIMD operations and cache optimization.`,
    codeExamples: [
      {
        title: "Array Creation and Properties",
        code: `import numpy as np

# Create arrays
arr1 = np.array([1, 2, 3, 4, 5])
arr2 = np.array([[1, 2, 3], [4, 5, 6]])

# Special arrays
zeros = np.zeros((3, 4))           # 3x4 array of zeros
ones = np.ones((2, 3), dtype=int)  # 2x3 array of ones
identity = np.eye(4)                # 4x4 identity matrix
range_arr = np.arange(0, 10, 2)    # [0, 2, 4, 6, 8]
linspace = np.linspace(0, 1, 5)    # 5 evenly spaced [0, 0.25, 0.5, 0.75, 1]
random_arr = np.random.rand(3, 3)  # 3x3 random floats [0, 1)
random_int = np.random.randint(0, 100, size=(4, 4))

# Properties
print(arr2.shape)      # (2, 3)
print(arr2.dtype)      # int64
print(arr2.ndim)       # 2
print(arr2.size)       # 6
print(arr2.itemsize)   # 8 bytes

# Reshape
reshaped = arr1.reshape(5, 1)  # Column vector
flattened = arr2.flatten()     # 1D array [1,2,3,4,5,6]
transposed = arr2.T            # Transpose`,
        explanation: "ndarray is NumPy's array type. shape, dtype, size describe array. reshape changes dimensions without copying data (if possible). arange like range, linspace for floats."
      },
      {
        title: "Array Operations and Broadcasting",
        code: `import numpy as np

# Element-wise operations
a = np.array([1, 2, 3, 4])
b = np.array([10, 20, 30, 40])

print(a + b)        # [11, 22, 33, 44]
print(a * b)        # [10, 40, 90, 160]
print(a ** 2)       # [1, 4, 9, 16]
print(np.sqrt(a))   # [1., 1.41, 1.73, 2.]

# Scalar operations (broadcasting)
print(a + 10)       # [11, 12, 13, 14]
print(a * 2)        # [2, 4, 6, 8]

# Matrix operations
m1 = np.array([[1, 2], [3, 4]])
m2 = np.array([[5, 6], [7, 8]])

print(m1 + m2)              # Element-wise addition
print(m1 * m2)              # Element-wise multiplication
print(m1 @ m2)              # Matrix multiplication (dot product)
print(np.dot(m1, m2))       # Same as @

# Broadcasting different shapes
matrix = np.array([[1, 2, 3], [4, 5, 6]])  # (2, 3)
row = np.array([10, 20, 30])                # (3,)
print(matrix + row)  
# [[11, 22, 33]
#  [14, 25, 36]]

# Aggregate functions
data = np.array([[1, 2, 3], [4, 5, 6]])
print(data.sum())           # 21
print(data.sum(axis=0))     # [5, 7, 9] - column sums
print(data.sum(axis=1))     # [6, 15] - row sums
print(data.mean())          # 3.5
print(data.std())           # Standard deviation
print(data.min(), data.max())`,
        explanation: "Operations are vectorized (applied to all elements). Broadcasting extends smaller arrays. axis=0 is columns, axis=1 is rows. @ operator for matrix multiplication."
      },
      {
        title: "Indexing, Slicing, and Boolean Masking",
        code: `import numpy as np

# Basic indexing
arr = np.array([10, 20, 30, 40, 50])
print(arr[0])        # 10
print(arr[-1])       # 50
print(arr[1:4])      # [20, 30, 40]
print(arr[::2])      # [10, 30, 50] - every 2nd element

# 2D indexing
matrix = np.array([[1, 2, 3], [4, 5, 6], [7, 8, 9]])
print(matrix[0, 1])     # 2
print(matrix[1])        # [4, 5, 6] - row 1
print(matrix[:, 2])     # [3, 6, 9] - column 2
print(matrix[0:2, 1:3]) # [[2,3], [5,6]] - submatrix

# Boolean indexing
data = np.array([15, 3, 28, 7, 42, 11])
mask = data > 10
print(mask)         # [True, False, True, False, True, True]
print(data[mask])   # [15, 28, 42, 11]
print(data[data > 10])  # Same as above

# Conditional operations
arr = np.array([1, 2, 3, 4, 5])
result = np.where(arr > 3, arr * 2, arr)  # [1,2,3,8,10]

# Fancy indexing
indices = np.array([0, 2, 4])
print(data[indices])  # [15, 28, 42]

# Modify with boolean indexing
data[data > 20] = 99
print(data)  # [15, 3, 99, 7, 99, 11]`,
        explanation: "Slicing syntax same as Python lists. Multi-dimensional with comma. Boolean arrays for filtering. np.where() for conditional assignment. Fancy indexing with array of indices."
      },
      {
        title: "Linear Algebra and Statistics",
        code: `import numpy as np

# Linear algebra
A = np.array([[1, 2], [3, 4]])
B = np.array([[5, 6], [7, 8]])

# Matrix operations
print(np.dot(A, B))       # Matrix multiplication
print(A.T)                # Transpose
print(np.linalg.inv(A))   # Inverse
print(np.linalg.det(A))   # Determinant: -2.0

# Eigenvalues and eigenvectors
eigenvalues, eigenvectors = np.linalg.eig(A)
print(eigenvalues)

# Solve linear system: Ax = b
b = np.array([5, 11])
x = np.linalg.solve(A, b)
print(x)  # Solution

# Statistics
data = np.array([12, 15, 18, 20, 22, 25, 28, 30])
print(np.mean(data))      # 21.25
print(np.median(data))    # 21.0
print(np.std(data))       # Standard deviation
print(np.var(data))       # Variance
print(np.percentile(data, 75))  # 75th percentile

# Correlation
x = np.array([1, 2, 3, 4, 5])
y = np.array([2, 4, 5, 4, 5])
print(np.corrcoef(x, y))  # Correlation matrix

# Random sampling
np.random.seed(42)  # Reproducible random
samples = np.random.normal(loc=0, scale=1, size=1000)  # Mean 0, std 1
print(samples.mean(), samples.std())`,
        explanation: "np.linalg for linear algebra operations. Solve systems, compute eigenvalues, determinants. Statistics functions for mean, median, std. Random module for sampling."
      }
    ],
    quiz: [
      { question: "What does NumPy stand for?", options: ["Numerical Python", "Number Pyramid", "Numeric Py", "None"], answer: 0 },
      { question: "What is broadcasting?", options: ["Sending data over network", "Operations on arrays of different shapes", "Copying arrays", "Array initialization"], answer: 1 },
      { question: "axis=0 refers to?", options: ["Rows", "Columns", "Depth", "All"], answer: 1 },
      { question: "@ operator does?", options: ["Element-wise multiply", "Matrix multiplication", "Concatenation", "Comparison"], answer: 1 }
    ],
    interviewQuestions: [
      { q: "What is the difference between a Python list and NumPy array?", a: "NumPy arrays: homogeneous types, fixed size (efficient memory), vectorized operations (50x faster), supports multi-dimensional, broadcasting. Python lists: heterogeneous types, dynamic size, element-wise operations need loops, 1D only (nested for multi-D), no broadcasting. Use NumPy for numerical computation, lists for general collections." },
      { q: "Explain NumPy broadcasting rules.", a: "Broadcasting allows operations on arrays of different shapes. Rules: 1) If arrays differ in dimensions, prepend 1s to smaller shape. 2) Arrays compatible if dimensions are equal OR one is 1. 3) Output shape is max of input shapes in each dimension. Example: (3,4) + (4,) → (3,4) + (1,4) → (3,4). Incompatible: (3,4) + (3,) fails because trailing dimensions don't match." }
    ]
  },
  {
    id: 56,
    language: "python",
    module: "Python Data Science",
    title: "Pandas for Data Analysis",
    difficulty: "intermediate",
    description: "Data manipulation with Pandas: Series, DataFrames, indexing, grouping, merging, and time series.",
    videoId: "vmEHCJofslg",
    videoTitle: "Pandas Tutorial for Beginners",
    content: `Pandas is the most popular data manipulation and analysis library for Python.

**Core Data Structures**
- **Series**: 1D labeled array
- **DataFrame**: 2D labeled table (like Excel/SQL table)

**Key Features**
- Reading/writing data (CSV, Excel, SQL, JSON)
- Data cleaning and preprocessing
- Filtering, grouping, aggregating
- Handling missing data
- Time series functionality
- Merging and joining datasets

**Installation**
\`\`\`bash
pip install pandas
\`\`\`

**Common Use Cases**
- Exploratory Data Analysis (EDA)
- Data cleaning for ML pipelines
- ETL (Extract, Transform, Load) operations
- Business analytics and reporting
- Time series analysis`,
    codeExamples: [
      {
        title: "Series and DataFrames Basics",
        code: `import pandas as pd
import numpy as np

# Series - 1D array with labels
s = pd.Series([10, 20, 30, 40], index=['a', 'b', 'c', 'd'])
print(s)
print(s['b'])        # 20
print(s[s > 20])     # Filter

# DataFrame - 2D table
data = {
    'Name': ['Alice', 'Bob', 'Charlie', 'David'],
    'Age': [25, 30, 35, 28],
    'City': ['NYC', 'LA', 'Chicago', 'Houston'],
    'Salary': [70000, 85000, 90000, 75000]
}
df = pd.DataFrame(data)
print(df)

# DataFrame properties
print(df.shape)        # (4, 4)
print(df.columns)      # Column names
print(df.index)        # Row labels
print(df.dtypes)       # Data types
print(df.info())       # Summary
print(df.describe())   # Statistics for numeric columns

# Access columns
print(df['Name'])           # Series
print(df[['Name', 'Age']])  # DataFrame with 2 columns

# Add new column
df['Bonus'] = df['Salary'] * 0.1
df['Senior'] = df['Age'] > 30

# Drop column
df = df.drop('Bonus', axis=1)  # axis=1 for columns`,
        explanation: "Series is 1D with index. DataFrame is 2D table with row/column labels. Access columns with df['col'] or df[['col1', 'col2']]. Add columns with assignment."
      },
      {
        title: "Indexing, Selection, and Filtering",
        code: `import pandas as pd

df = pd.DataFrame({
    'Name': ['Alice', 'Bob', 'Charlie', 'David', 'Eve'],
    'Age': [25, 30, 35, 28, 32],
    'Department': ['HR', 'IT', 'IT', 'HR', 'Finance'],
    'Salary': [70000, 85000, 90000, 75000, 88000]
})

# Selection by label - loc
print(df.loc[0])                    # First row as Series
print(df.loc[0:2, ['Name', 'Age']]) # Rows 0-2, specific columns
print(df.loc[df['Age'] > 30])       # Filter rows

# Selection by position - iloc
print(df.iloc[0])          # First row
print(df.iloc[0:3, 1:3])   # Rows 0-2, columns 1-2
print(df.iloc[:, -1])      # Last column

# Boolean filtering
high_salary = df[df['Salary'] > 80000]
it_dept = df[df['Department'] == 'IT']

# Multiple conditions
young_high_earners = df[(df['Age'] < 30) & (df['Salary'] > 70000)]
hr_or_finance = df[df['Department'].isin(['HR', 'Finance'])]

# Query method
result = df.query('Age > 30 and Salary > 80000')

# Set index
df_indexed = df.set_index('Name')
print(df_indexed.loc['Alice'])  # Access by name

# Reset index
df_reset = df_indexed.reset_index()`,
        explanation: "loc for label-based, iloc for position-based. Boolean indexing for filtering. & for AND, | for OR (use parentheses). isin() for multiple values. query() for SQL-like filtering."
      },
      {
        title: "Data Cleaning and Transformation",
        code: `import pandas as pd
import numpy as np

# Sample data with issues
df = pd.DataFrame({
    'Name': ['Alice', 'Bob', None, 'David', 'Eve'],
    'Age': [25, np.nan, 35, 28, 32],
    'Salary': ['70000', '85000', '90000', None, '88000'],
    'Date': ['2023-01-15', '2023-02-20', '2023-03-10', '2023-04-05', '2023-05-12']
})

# Handle missing data
print(df.isnull())              # Boolean mask of nulls
print(df.isnull().sum())        # Count nulls per column
df_clean = df.dropna()          # Remove rows with any null
df_filled = df.fillna(0)        # Fill nulls with 0
df['Age'].fillna(df['Age'].mean(), inplace=True)  # Fill with mean

# Type conversion
df['Salary'] = pd.to_numeric(df['Salary'], errors='coerce')  # Convert to numeric
df['Date'] = pd.to_datetime(df['Date'])  # Convert to datetime

# String operations
df['Name_Upper'] = df['Name'].str.upper()
df['Name_Length'] = df['Name'].str.len()
filtered = df[df['Name'].str.startswith('A', na=False)]

# Apply functions
df['Tax'] = df['Salary'].apply(lambda x: x * 0.3 if pd.notna(x) else 0)

def categorize_age(age):
    if pd.isna(age):
        return 'Unknown'
    elif age < 30:
        return 'Young'
    else:
        return 'Senior'

df['Age_Category'] = df['Age'].apply(categorize_age)

# Map values
dept_map = {'HR': 'Human Resources', 'IT': 'Information Technology'}
df['Dept_Full'] = df['Department'].map(dept_map)

# Replace values
df['Status'] = df['Status'].replace({'A': 'Active', 'I': 'Inactive'})`,
        explanation: "isnull() detects missing data. dropna() removes, fillna() fills. pd.to_numeric(), pd.to_datetime() for conversion. .str accessor for string methods. apply() for custom functions."
      },
      {
        title: "GroupBy, Aggregation, and Merging",
        code: `import pandas as pd

# Sample data
df = pd.DataFrame({
    'Department': ['IT', 'IT', 'HR', 'HR', 'Finance', 'Finance'],
    'Employee': ['Alice', 'Bob', 'Charlie', 'David', 'Eve', 'Frank'],
    'Salary': [85000, 90000, 70000, 75000, 88000, 92000],
    'Years': [5, 3, 7, 4, 6, 8]
})

# GroupBy and aggregation
dept_stats = df.groupby('Department')['Salary'].mean()
print(dept_stats)

# Multiple aggregations
agg_df = df.groupby('Department').agg({
    'Salary': ['mean', 'sum', 'count'],
    'Years': ['mean', 'max']
})
print(agg_df)

# Custom aggregation
def salary_range(series):
    return series.max() - series.min()

result = df.groupby('Department')['Salary'].agg(['mean', salary_range])

# Pivot table
pivot = df.pivot_table(
    values='Salary', 
    index='Department', 
    aggfunc=['mean', 'count']
)

# Merging DataFrames
df1 = pd.DataFrame({
    'EmployeeID': [1, 2, 3],
    'Name': ['Alice', 'Bob', 'Charlie']
})

df2 = pd.DataFrame({
    'EmployeeID': [1, 2, 4],
    'Salary': [70000, 85000, 90000]
})

# Inner join (default)
merged = pd.merge(df1, df2, on='EmployeeID')

# Left join - keep all from df1
left_merged = pd.merge(df1, df2, on='EmployeeID', how='left')

# Outer join - keep all from both
outer_merged = pd.merge(df1, df2, on='EmployeeID', how='outer')

# Concatenate DataFrames
df_concat = pd.concat([df1, df2], axis=0, ignore_index=True)  # Stack vertically`,
        explanation: "groupby() splits data by category. agg() applies multiple functions. pivot_table() for Excel-like tables. merge() for SQL-like joins. concat() stacks DataFrames."
      },
      {
        title: "Reading/Writing Data and Time Series",
        code: `import pandas as pd

# Read CSV
df = pd.read_csv('data.csv')
df = pd.read_csv('data.csv', sep=';', header=0, index_col=0, parse_dates=['Date'])

# Write CSV
df.to_csv('output.csv', index=False)

# Excel
df = pd.read_excel('data.xlsx', sheet_name='Sheet1')
df.to_excel('output.xlsx', sheet_name='Results', index=False)

# JSON
df = pd.read_json('data.json')
df.to_json('output.json', orient='records')

# SQL
import sqlite3
conn = sqlite3.connect('database.db')
df = pd.read_sql_query('SELECT * FROM users', conn)
df.to_sql('users', conn, if_exists='replace', index=False)

# Time series
dates = pd.date_range('2023-01-01', periods=100, freq='D')
ts = pd.Series(range(100), index=dates)

# Date operations
print(ts['2023-01'])        # January data
print(ts['2023-01':'2023-02'])  # Range

# Resample
monthly = ts.resample('M').sum()    # Monthly totals
weekly_mean = ts.resample('W').mean()  # Weekly averages

# Rolling window
rolling_mean = ts.rolling(window=7).mean()  # 7-day moving average

# Shift data
ts_shifted = ts.shift(1)    # Shift forward by 1
pct_change = ts.pct_change()  # Percentage change`,
        explanation: "read_csv/to_csv for CSV files. read_excel/to_excel for Excel. parse_dates converts to datetime. resample() for time period aggregation. rolling() for moving windows."
      }
    ],
    quiz: [
      { question: "What is a DataFrame?", options: ["1D array", "2D labeled table", "3D tensor", "Dictionary"], answer: 1 },
      { question: "loc is used for?", options: ["Label-based indexing", "Position-based indexing", "Boolean indexing", "Random selection"], answer: 0 },
      { question: "How to handle missing values?", options: ["Ignore them", "dropna() or fillna()", "Delete column", "Convert to 0"], answer: 1 },
      { question: "What does groupby() do?", options: ["Sort data", "Split-apply-combine", "Merge tables", "Create pivot"], answer: 1 }
    ],
    interviewQuestions: [
      { q: "Difference between loc and iloc in Pandas?", a: "loc: label-based indexing using row/column names. df.loc[0:2] includes row 2 (inclusive). iloc: integer position-based. df.iloc[0:2] excludes row 2 (exclusive). loc for named indices/columns, iloc for numeric positions. loc can use boolean arrays, iloc cannot. Use loc when working with named indices, iloc for purely positional access." },
      { q: "How to optimize memory usage in Pandas?", a: "Strategies: 1) Use appropriate dtypes (category for strings with few unique values, int8/16 instead of int64). 2) Read specific columns with usecols. 3) Use chunking for large files (chunksize parameter). 4) Convert object to category with astype('category'). 5) Use pd.to_numeric() with downcast. 6) Use iterrows() sparingly (vectorize instead). 7) del or drop unused columns. Check memory: df.memory_usage(), df.info(memory_usage='deep')." }
    ]
  },

  // ============ PYTHON TESTING & DEBUGGING ============
  {
    id: 57,
    language: "python",
    module: "Python Testing & Debugging",
    title: "Unit Testing with pytest",
    difficulty: "intermediate",
    description: "Write effective tests with pytest: fixtures, parametrization, mocking, and test coverage.",
    videoId: "bbp_849-RZ4",
    videoTitle: "pytest Tutorial - Unit Testing in Python",
    content: `pytest is the most popular testing framework for Python. It's simple, scalable, and feature-rich.

**Why pytest?**
- Simple assert statements (no self.assertEqual)
- Auto-discovery of tests
- Powerful fixtures for setup/teardown
- Parametrized tests
- Rich plugin ecosystem
- Better output and error messages

**Installation**
\`\`\`bash
pip install pytest pytest-cov
\`\`\`

**Test Discovery**
pytest automatically finds:
- Files named test_*.py or *_test.py
- Functions/methods starting with test_
- Classes starting with Test

**Best Practices**
- One assertion per test (generally)
- Descriptive test names
- Arrange-Act-Assert pattern
- Use fixtures for setup
- Mock external dependencies
- Aim for 80%+ coverage`,
    codeExamples: [
      {
        title: "Basic Tests and Assertions",
        code: `# calculator.py
def add(a, b):
    return a + b

def divide(a, b):
    if b == 0:
        raise ValueError("Cannot divide by zero")
    return a / b

def is_even(n):
    return n % 2 == 0

# test_calculator.py
import pytest
from calculator import add, divide, is_even

def test_add():
    assert add(2, 3) == 5
    assert add(-1, 1) == 0
    assert add(0, 0) == 0

def test_add_floats():
    result = add(0.1, 0.2)
    assert pytest.approx(result) == 0.3  # Handle float precision

def test_divide():
    assert divide(10, 2) == 5
    assert divide(9, 3) == 3

def test_divide_by_zero():
    with pytest.raises(ValueError, match="Cannot divide by zero"):
        divide(10, 0)

def test_is_even():
    assert is_even(2) is True
    assert is_even(3) is False
    assert is_even(0) is True

# Run tests:
# pytest                    # Run all tests
# pytest test_calculator.py # Run specific file
# pytest -v                 # Verbose output
# pytest -k "divide"        # Run tests matching pattern`,
        explanation: "Use assert for all checks. pytest.approx() for floating point. pytest.raises() for exceptions. match parameter for error message regex."
      },
      {
        title: "Fixtures and Setup/Teardown",
        code: `# test_database.py
import pytest

# Simple fixture
@pytest.fixture
def sample_data():
    return [1, 2, 3, 4, 5]

def test_sum(sample_data):
    assert sum(sample_data) == 15

def test_len(sample_data):
    assert len(sample_data) == 5

# Fixture with setup/teardown
@pytest.fixture
def database_connection():
    # Setup
    conn = create_connection()
    conn.execute("CREATE TABLE users (id INT, name TEXT)")
    
    yield conn  # Provide to test
    
    # Teardown (runs after test)
    conn.execute("DROP TABLE users")
    conn.close()

def test_insert_user(database_connection):
    db = database_connection
    db.execute("INSERT INTO users VALUES (1, 'Alice')")
    result = db.execute("SELECT * FROM users").fetchone()
    assert result == (1, 'Alice')

# Fixture scope
@pytest.fixture(scope="module")  # Runs once per module
def expensive_resource():
    resource = ExpensiveObject()
    yield resource
    resource.cleanup()

# Fixture using other fixtures
@pytest.fixture
def user(database_connection):
    db = database_connection
    db.execute("INSERT INTO users VALUES (1, 'Bob')")
    return {'id': 1, 'name': 'Bob'}

# Auto-use fixture (runs for every test)
@pytest.fixture(autouse=True)
def reset_state():
    global counter
    counter = 0`,
        explanation: "Fixtures provide reusable setup. yield separates setup/teardown. Scope controls fixture lifetime: function (default), class, module, session. autouse runs automatically."
      },
      {
        title: "Parametrized Tests and Markers",
        code: `# test_parametrize.py
import pytest

# Parametrized test - run with multiple inputs
@pytest.mark.parametrize("input,expected", [
    (2, True),
    (3, False),
    (4, True),
    (0, True),
    (-2, True),
])
def test_is_even_parametrized(input, expected):
    from calculator import is_even
    assert is_even(input) == expected

# Multiple parameters
@pytest.mark.parametrize("a,b,expected", [
    (2, 3, 5),
    (0, 0, 0),
    (-1, 1, 0),
    (100, 200, 300),
])
def test_add_parametrized(a, b, expected):
    from calculator import add
    assert add(a, b) == expected

# Markers
@pytest.mark.slow
def test_slow_operation():
    import time
    time.sleep(2)
    assert True

@pytest.mark.skip(reason="Feature not implemented yet")
def test_future_feature():
    assert False

@pytest.mark.skipif(sys.version_info < (3, 9), reason="Requires Python 3.9+")
def test_modern_feature():
    assert True

@pytest.mark.xfail(reason="Known bug #123")
def test_known_bug():
    assert False  # Expected to fail

# Custom markers (define in pytest.ini)
@pytest.mark.integration
def test_api_integration():
    pass

# Run specific markers:
# pytest -m slow           # Run only slow tests
# pytest -m "not slow"     # Skip slow tests
# pytest -m "integration"  # Run integration tests`,
        explanation: "parametrize runs test with multiple inputs. Markers categorize tests: skip, skipif, xfail for expected failures, slow, integration. Run subsets with -m flag."
      },
      {
        title: "Mocking and Test Doubles",
        code: `# users.py
import requests

def get_user(user_id):
    response = requests.get(f'https://api.example.com/users/{user_id}')
    return response.json()

def send_email(to, subject, body):
    # Actual email sending logic
    smtp.send(to, subject, body)
    return True

# test_users.py
import pytest
from unittest.mock import Mock, patch, MagicMock
from users import get_user, send_email

def test_get_user_with_mock():
    # Mock the requests.get function
    with patch('users.requests.get') as mock_get:
        # Setup mock response
        mock_response = Mock()
        mock_response.json.return_value = {'id': 1, 'name': 'Alice'}
        mock_get.return_value = mock_response
        
        # Call function
        result = get_user(1)
        
        # Assertions
        assert result == {'id': 1, 'name': 'Alice'}
        mock_get.assert_called_once_with('https://api.example.com/users/1')

def test_send_email():
    with patch('users.smtp.send') as mock_send:
        mock_send.return_value = True
        
        result = send_email('test@example.com', 'Hi', 'Body')
        
        assert result is True
        mock_send.assert_called_once_with('test@example.com', 'Hi', 'Body')

# Pytest monkeypatch fixture
def test_with_monkeypatch(monkeypatch):
    def mock_get(*args, **kwargs):
        mock_resp = Mock()
        mock_resp.json.return_value = {'id': 2, 'name': 'Bob'}
        return mock_resp
    
    monkeypatch.setattr('users.requests.get', mock_get)
    result = get_user(2)
    assert result['name'] == 'Bob'

# Mock class
class MockDatabase:
    def __init__(self):
        self.data = {}
    
    def save(self, key, value):
        self.data[key] = value
        return True
    
    def get(self, key):
        return self.data.get(key)

@pytest.fixture
def mock_db():
    return MockDatabase()

def test_with_mock_db(mock_db):
    mock_db.save('user:1', {'name': 'Alice'})
    user = mock_db.get('user:1')
    assert user['name'] == 'Alice'`,
        explanation: "patch() mocks imports. Mock() creates test doubles. return_value sets mock response. assert_called_once_with() verifies calls. monkeypatch fixture for attribute replacement."
      },
      {
        title: "Test Coverage and Best Practices",
        code: `# Run tests with coverage
# pytest --cov=myapp --cov-report=html
# pytest --cov=myapp --cov-report=term-missing

# conftest.py - shared fixtures across tests
import pytest

@pytest.fixture(scope="session")
def app_config():
    return {
        'DATABASE_URL': 'sqlite:///:memory:',
        'DEBUG': True
    }

@pytest.fixture
def client(app_config):
    from myapp import create_app
    app = create_app(app_config)
    return app.test_client()

# test_api.py
def test_homepage(client):
    response = client.get('/')
    assert response.status_code == 200
    assert b'Welcome' in response.data

def test_create_user(client):
    response = client.post('/users', json={
        'name': 'Alice',
        'email': 'alice@example.com'
    })
    assert response.status_code == 201
    data = response.get_json()
    assert data['name'] == 'Alice'

# pytest.ini - configuration
[tool:pytest]
testpaths = tests
python_files = test_*.py
python_functions = test_*
markers =
    slow: marks tests as slow
    integration: integration tests
    unit: unit tests
addopts = -v --strict-markers --cov=myapp

# Organize tests
# tests/
#   conftest.py
#   unit/
#     test_models.py
#     test_utils.py
#   integration/
#     test_api.py
#     test_database.py

# Best practices
# 1. AAA pattern: Arrange, Act, Assert
def test_example():
    # Arrange
    calculator = Calculator()
    
    # Act
    result = calculator.add(2, 3)
    
    # Assert
    assert result == 5

# 2. Test one thing
# BAD
def test_everything():
    assert add(1, 2) == 3
    assert divide(6, 2) == 3
    assert multiply(2, 3) == 6

# GOOD - separate tests
def test_add():
    assert add(1, 2) == 3

def test_divide():
    assert divide(6, 2) == 3

# 3. Descriptive names
def test_divide_by_zero_raises_value_error():
    with pytest.raises(ValueError):
        divide(10, 0)`,
        explanation: "pytest --cov for coverage reports. conftest.py for shared fixtures. pytest.ini for configuration. AAA pattern for clarity. One assertion per test when possible."
      }
    ],
    quiz: [
      { question: "What is pytest?", options: ["Database", "Testing framework", "Web server", "Linter"], answer: 1 },
      { question: "How to test exceptions?", options: ["try/except", "pytest.raises()", "assert raises", "catch()"], answer: 1 },
      { question: "What are fixtures?", options: ["Test data", "Setup/teardown helpers", "Assertions", "Mocks"], answer: 1 },
      { question: "What does @pytest.mark.parametrize do?", options: ["Skip tests", "Run test with multiple inputs", "Mock functions", "Set timeout"], answer: 1 }
    ],
    interviewQuestions: [
      { q: "What is the difference between unit tests and integration tests?", a: "Unit tests: test individual functions/methods in isolation, use mocks for dependencies, fast, run frequently. Integration tests: test interaction between components (API + database, multiple services), use real or test databases, slower, run less frequently. Both are important: unit tests for quick feedback and regression, integration tests for end-to-end validation." },
      { q: "When should you use mocking in tests?", a: "Use mocks for: 1) External dependencies (APIs, databases, file systems). 2) Slow operations (network calls, heavy computation). 3) Non-deterministic behavior (random, time, external state). 4) Testing error conditions hard to reproduce. Don't mock: simple pure functions, core business logic, trivial operations. Over-mocking makes tests brittle and less valuable." }
    ]
  },

  // ============ PYTHON ASYNC & CONCURRENCY ============
  {
    id: 58,
    language: "python",
    module: "Python Async & Concurrency",
    title: "Async/Await and asyncio",
    difficulty: "advanced",
    description: "Asynchronous programming with async/await, event loops, tasks, and concurrent I/O operations.",
    videoId: "t5Bo1Je9EmE",
    videoTitle: "Python Asyncio Tutorial",
    content: `Asynchronous programming allows handling multiple tasks concurrently without blocking.

**Why Async?**
- I/O-bound operations (network, files, databases)
- Handle thousands of connections efficiently
- Better resource utilization
- Non-blocking operations

**Core Concepts**
- **Coroutines**: Functions defined with async def
- **Event Loop**: Manages async task execution
- **await**: Pause coroutine until result ready
- **Tasks**: Scheduled coroutines
- **Futures**: Represent eventual results

**When to Use Async**
✅ I/O-bound: web requests, database queries, file I/O
❌ CPU-bound: use multiprocessing instead
✅ Many concurrent operations
❌ Simple scripts with few I/O operations

**Installation**
asyncio is built-in, but useful libraries:
\`\`\`bash
pip install aiohttp aiofiles asyncpg
\`\`\``,
    codeExamples: [
      {
        title: "Async Basics - Coroutines and await",
        code: `import asyncio
import time

# Synchronous version - SLOW
def fetch_data_sync(n):
    print(f"Fetching data {n}...")
    time.sleep(2)  # Simulates network delay
    print(f"Data {n} received")
    return f"Data {n}"

def main_sync():
    start = time.time()
    fetch_data_sync(1)
    fetch_data_sync(2)
    fetch_data_sync(3)
    print(f"Sync took: {time.time() - start:.2f}s")  # ~6 seconds

# Asynchronous version - FAST
async def fetch_data_async(n):
    print(f"Fetching data {n}...")
    await asyncio.sleep(2)  # Non-blocking sleep
    print(f"Data {n} received")
    return f"Data {n}"

async def main_async():
    start = time.time()
    # Run concurrently
    await asyncio.gather(
        fetch_data_async(1),
        fetch_data_async(2),
        fetch_data_async(3)
    )
    print(f"Async took: {time.time() - start:.2f}s")  # ~2 seconds

# Run async function
asyncio.run(main_async())

# Alternative: create tasks
async def main_with_tasks():
    task1 = asyncio.create_task(fetch_data_async(1))
    task2 = asyncio.create_task(fetch_data_async(2))
    task3 = asyncio.create_task(fetch_data_async(3))
    
    # Wait for all tasks
    results = await asyncio.gather(task1, task2, task3)
    print(results)  # ['Data 1', 'Data 2', 'Data 3']`,
        explanation: "async def creates coroutine. await pauses until result ready. asyncio.gather() runs multiple coroutines concurrently. asyncio.run() is entry point."
      },
      {
        title: "Async HTTP Requests with aiohttp",
        code: `import asyncio
import aiohttp
import time

# Sync version with requests
import requests

def fetch_url_sync(url):
    response = requests.get(url)
    return response.json()

def main_sync():
    urls = [
        'https://api.github.com/users/python',
        'https://api.github.com/users/django',
        'https://api.github.com/users/flask'
    ]
    start = time.time()
    for url in urls:
        data = fetch_url_sync(url)
        print(f"Got {data['login']}")
    print(f"Sync: {time.time() - start:.2f}s")

# Async version with aiohttp
async def fetch_url_async(session, url):
    async with session.get(url) as response:
        data = await response.json()
        return data

async def main_async():
    urls = [
        'https://api.github.com/users/python',
        'https://api.github.com/users/django',
        'https://api.github.com/users/flask'
    ]
    start = time.time()
    
    async with aiohttp.ClientSession() as session:
        tasks = [fetch_url_async(session, url) for url in urls]
        results = await asyncio.gather(*tasks)
        
        for data in results:
            print(f"Got {data['login']}")
    
    print(f"Async: {time.time() - start:.2f}s")

asyncio.run(main_async())

# Error handling
async def fetch_with_error_handling(session, url):
    try:
        async with session.get(url, timeout=aiohttp.ClientTimeout(total=5)) as response:
            if response.status == 200:
                return await response.json()
            else:
                return {'error': f'Status {response.status}'}
    except asyncio.TimeoutError:
        return {'error': 'Timeout'}
    except aiohttp.ClientError as e:
        return {'error': str(e)}`,
        explanation: "aiohttp for async HTTP. ClientSession manages connections. async with for context manager. await response.json() for parsing. Much faster for multiple requests."
      },
      {
        title: "Async Database Operations",
        code: `import asyncio
import asyncpg  # PostgreSQL async driver

async def create_pool():
    return await asyncpg.create_pool(
        user='user',
        password='password',
        database='mydb',
        host='localhost'
    )

async def fetch_users(pool):
    async with pool.acquire() as conn:
        rows = await conn.fetch('SELECT id, name, email FROM users')
        return [dict(row) for row in rows]

async def create_user(pool, name, email):
    async with pool.acquire() as conn:
        await conn.execute(
            'INSERT INTO users (name, email) VALUES ($1, $2)',
            name, email
        )

async def get_user(pool, user_id):
    async with pool.acquire() as conn:
        row = await conn.fetchrow(
            'SELECT * FROM users WHERE id = $1',
            user_id
        )
        return dict(row) if row else None

async def main():
    # Create connection pool
    pool = await create_pool()
    
    try:
        # Create users concurrently
        await asyncio.gather(
            create_user(pool, 'Alice', 'alice@example.com'),
            create_user(pool, 'Bob', 'bob@example.com'),
            create_user(pool, 'Charlie', 'charlie@example.com')
        )
        
        # Fetch all users
        users = await fetch_users(pool)
        print(f"Users: {users}")
        
        # Get specific user
        user = await get_user(pool, 1)
        print(f"User 1: {user}")
        
    finally:
        await pool.close()

asyncio.run(main())

# Using transactions
async def transfer_funds(pool, from_id, to_id, amount):
    async with pool.acquire() as conn:
        async with conn.transaction():
            # Debit from account
            await conn.execute(
                'UPDATE accounts SET balance = balance - $1 WHERE id = $2',
                amount, from_id
            )
            # Credit to account
            await conn.execute(
                'UPDATE accounts SET balance = balance + $1 WHERE id = $2',
                amount, to_id
            )`,
        explanation: "asyncpg for async PostgreSQL. Connection pooling for efficiency. acquire() gets connection from pool. Transactions ensure atomicity."
      },
      {
        title: "Async Patterns and Best Practices",
        code: `import asyncio
from asyncio import Queue
import random

# Pattern 1: Producer-Consumer with Queue
async def producer(queue, n):
    for i in range(n):
        await asyncio.sleep(random.random())
        item = f"item-{i}"
        await queue.put(item)
        print(f"Produced {item}")
    await queue.put(None)  # Sentinel to stop consumer

async def consumer(queue):
    while True:
        item = await queue.get()
        if item is None:
            break
        await asyncio.sleep(random.random())
        print(f"Consumed {item}")
        queue.task_done()

async def producer_consumer_pattern():
    queue = Queue()
    await asyncio.gather(
        producer(queue, 10),
        consumer(queue)
    )

# Pattern 2: Limiting Concurrency with Semaphore
async def limited_fetch(url, semaphore, session):
    async with semaphore:  # Only N concurrent requests
        print(f"Fetching {url}")
        async with session.get(url) as response:
            return await response.text()

async def fetch_with_limit(urls, max_concurrent=5):
    semaphore = asyncio.Semaphore(max_concurrent)
    async with aiohttp.ClientSession() as session:
        tasks = [
            limited_fetch(url, semaphore, session) 
            for url in urls
        ]
        return await asyncio.gather(*tasks)

# Pattern 3: Timeout
async def operation_with_timeout():
    try:
        result = await asyncio.wait_for(
            slow_operation(), 
            timeout=5.0
        )
        return result
    except asyncio.TimeoutError:
        print("Operation timed out")
        return None

async def slow_operation():
    await asyncio.sleep(10)
    return "Result"

# Pattern 4: Running sync code in async context
import concurrent.futures

def cpu_bound_task(n):
    # Heavy computation
    return sum(i * i for i in range(n))

async def run_cpu_bound():
    loop = asyncio.get_event_loop()
    with concurrent.futures.ProcessPoolExecutor() as pool:
        result = await loop.run_in_executor(
            pool, 
            cpu_bound_task, 
            10_000_000
        )
        return result

# Pattern 5: Async context manager
class AsyncResource:
    async def __aenter__(self):
        print("Acquiring resource")
        await asyncio.sleep(1)
        return self
    
    async def __aexit__(self, exc_type, exc_val, exc_tb):
        print("Releasing resource")
        await asyncio.sleep(1)
    
    async def operation(self):
        print("Using resource")
        await asyncio.sleep(1)

async def use_async_resource():
    async with AsyncResource() as resource:
        await resource.operation()

# Pattern 6: Async generator
async def async_range(count):
    for i in range(count):
        await asyncio.sleep(0.5)
        yield i

async def consume_async_generator():
    async for i in async_range(5):
        print(f"Got {i}")`,
        explanation: "Queue for producer-consumer. Semaphore limits concurrency. wait_for() adds timeout. run_in_executor() for CPU-bound tasks. async with for async context managers."
      }
    ],
    quiz: [
      { question: "What is asyncio?", options: ["Database", "Async I/O library", "Web framework", "Testing tool"], answer: 1 },
      { question: "async def creates?", options: ["Thread", "Process", "Coroutine", "Generator"], answer: 2 },
      { question: "When to use async?", options: ["CPU-bound tasks", "I/O-bound tasks", "Simple scripts", "Math calculations"], answer: 1 },
      { question: "What does await do?", options: ["Blocks thread", "Pauses coroutine", "Starts process", "Sleeps forever"], answer: 1 }
    ],
    interviewQuestions: [
      { q: "Explain async/await vs threading vs multiprocessing.", a: "Async/await: Single thread, cooperative multitasking, best for I/O-bound (network, files). No GIL issues, low overhead. Threading: Multiple threads, preemptive multitasking, GIL limits CPU use, for I/O with blocking libraries. Multiprocessing: Multiple processes, true parallelism, for CPU-bound tasks, higher overhead. Choose async for I/O-heavy (web scraping, APIs), multiprocessing for CPU-heavy (data processing, ML), threading for I/O with blocking code." },
      { q: "What is the event loop and how does it work?", a: "Event loop is core of asyncio. It manages and schedules coroutines, handles I/O events, callbacks. Process: 1) Tasks submitted to loop. 2) Loop runs ready tasks until they await. 3) When awaiting I/O, task yields control. 4) Loop switches to other ready tasks. 5) When I/O completes, callback resumes task. Single-threaded but appears concurrent. get_event_loop() accesses it, asyncio.run() creates and manages loop." }
    ]
  }
];

export default curriculum;
