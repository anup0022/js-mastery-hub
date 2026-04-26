// Complete JavaScript curriculum from Zero to Hero
// Each topic includes: title, description, content, code examples, quiz, and Code with Harry video

const curriculum = [
  // ============ MODULE 1: BASICS ============
  {
    id: 1,
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
];

export default curriculum;
