// Mock Interview Questions — Comprehensive JavaScript Interview Prep

const mockInterviews = [
  {
    id: 1,
    category: "Fundamentals",
    difficulty: "easy",
    question: "What are the differences between var, let, and const?",
    answer: `**var:**
- Function-scoped
- Hoisted and initialized with undefined
- Can be re-declared and updated

**let:**
- Block-scoped
- Hoisted but NOT initialized (Temporal Dead Zone)
- Can be updated, cannot be re-declared in same scope

**const:**
- Block-scoped
- Must be initialized at declaration
- Cannot be reassigned (but object contents can be modified)

**Best Practice:** Use const by default, let when you need to reassign, avoid var.`,
    followUp: "Can you modify an object declared with const?",
    followUpAnswer: "Yes! const prevents reassignment of the variable, not mutation of the value. So const obj = {}; obj.key = 'value' works fine, but obj = {} would throw an error.",
    codeExample: `const user = { name: "Anup" };
user.name = "Singh"; // OK - modifying property
// user = {};        // ERROR - reassigning variable

let count = 0;
count = 1;           // OK - updating value
// let count = 2;    // ERROR - re-declaring`
  },
  {
    id: 2,
    category: "Fundamentals",
    difficulty: "easy",
    question: "Explain the difference between == and ===",
    answer: `**== (Loose Equality):**
- Compares values AFTER type coercion
- JavaScript converts types to match before comparing
- Can lead to unexpected results

**=== (Strict Equality):**
- Compares BOTH value AND type
- No type coercion performed
- More predictable and recommended

**Best Practice:** Always use === and !== to avoid type coercion bugs.`,
    followUp: "What about Object.is()?",
    followUpAnswer: "Object.is() is similar to === but handles two edge cases differently: Object.is(NaN, NaN) returns true (=== returns false), and Object.is(+0, -0) returns false (=== returns true).",
    codeExample: `console.log(0 == false);    // true
console.log(0 === false);   // false
console.log("" == false);   // true
console.log("" === false);  // false
console.log(null == undefined); // true
console.log(null === undefined); // false
console.log(NaN === NaN);   // false
console.log(Object.is(NaN, NaN)); // true`
  },
  {
    id: 3,
    category: "Closures & Scope",
    difficulty: "medium",
    question: "What is a closure? Give a practical example.",
    answer: `A **closure** is a function that has access to variables from its outer (enclosing) scope even after the outer function has returned.

When a function is created, it "closes over" the variables in its lexical scope, creating a closure. This means the inner function maintains a reference to the outer scope's variables.

**Practical Uses:**
1. Data privacy / encapsulation
2. Function factories
3. Maintaining state
4. Callbacks and event handlers
5. Currying and partial application`,
    followUp: "How are closures used in real-world applications?",
    followUpAnswer: "Closures are used in React hooks (useState maintains state through closures), in module patterns for private variables, in debounce/throttle functions to maintain timer references, and in event handlers that need access to loop variables.",
    codeExample: `// Counter with private state
function createCounter() {
  let count = 0; // Private!
  return {
    increment: () => ++count,
    decrement: () => --count,
    getCount: () => count,
  };
}

const counter = createCounter();
counter.increment(); // 1
counter.increment(); // 2
counter.getCount();  // 2
// count is not accessible directly!

// React-like useState
function useState(initial) {
  let state = initial;
  const getState = () => state;
  const setState = (newVal) => { state = newVal; };
  return [getState, setState];
}
const [getName, setName] = useState("Anup");
setName("Singh");
console.log(getName()); // "Singh"`
  },
  {
    id: 4,
    category: "Closures & Scope",
    difficulty: "medium",
    question: "Explain the event loop in JavaScript",
    answer: `JavaScript is **single-threaded** but handles asynchronous operations through the **event loop**.

**Components:**
1. **Call Stack** — Executes code synchronously (LIFO)
2. **Web APIs** — Handle async operations (setTimeout, fetch, DOM events)
3. **Microtask Queue** — Promises, queueMicrotask, MutationObserver
4. **Macrotask Queue** — setTimeout, setInterval, I/O

**How it works:**
1. Code executes on the call stack
2. Async operations are delegated to Web APIs
3. When complete, callbacks go to the appropriate queue
4. Event loop checks: if call stack is empty, it processes all microtasks first, then one macrotask
5. Repeat

**Key Rule:** Microtasks (Promises) always execute before macrotasks (setTimeout).`,
    followUp: "Why does setTimeout(fn, 0) not execute immediately?",
    followUpAnswer: "Even with 0ms delay, setTimeout adds the callback to the macrotask queue. It only executes after: 1) the current call stack is empty, 2) all microtasks are processed. The minimum actual delay is typically 4ms in browsers due to the specification.",
    codeExample: `console.log("1");

setTimeout(() => console.log("2"), 0);

Promise.resolve().then(() => console.log("3"));

console.log("4");

// Output: 1, 4, 3, 2
// Why? 1 & 4 are synchronous (call stack)
// 3 is a microtask (Promise) - runs before macrotask
// 2 is a macrotask (setTimeout) - runs last`
  },
  {
    id: 5,
    category: "Prototypes & OOP",
    difficulty: "medium",
    question: "Explain prototypal inheritance in JavaScript",
    answer: `In JavaScript, objects inherit directly from other objects through the **prototype chain**.

Every object has a hidden **[[Prototype]]** property (accessible via __proto__ or Object.getPrototypeOf()) that links to another object.

**How it works:**
1. When accessing a property, JS checks the object first
2. If not found, it looks at the object's prototype
3. Then the prototype's prototype
4. Until reaching Object.prototype (which links to null)

**Key difference from classical inheritance:** Objects inherit from objects, not classes from classes. ES6 classes are syntactic sugar over this prototype mechanism.`,
    followUp: "How do ES6 classes relate to prototypes?",
    followUpAnswer: "ES6 classes are NOT traditional classes — they're syntactic sugar over prototypal inheritance. The class keyword creates a constructor function, methods go on the prototype, 'extends' sets up the prototype chain, and 'super' calls the parent constructor. typeof ClassName returns 'function'.",
    codeExample: `function Animal(name) {
  this.name = name;
}
Animal.prototype.speak = function() {
  return this.name + " makes a sound";
};

function Dog(name, breed) {
  Animal.call(this, name); // Inherit properties
  this.breed = breed;
}
Dog.prototype = Object.create(Animal.prototype);
Dog.prototype.constructor = Dog;
Dog.prototype.bark = function() {
  return this.name + " barks!";
};

const rex = new Dog("Rex", "Lab");
console.log(rex.speak()); // "Rex makes a sound" (inherited)
console.log(rex.bark());  // "Rex barks!" (own method)
console.log(rex instanceof Dog);    // true
console.log(rex instanceof Animal); // true`
  },
  {
    id: 6,
    category: "Async",
    difficulty: "medium",
    question: "What is the difference between Promise.all, Promise.allSettled, Promise.race, and Promise.any?",
    answer: `All four take an array of Promises and return a single Promise.

**Promise.all(promises)**
- Resolves when ALL promises resolve
- Rejects immediately if ANY promise rejects (fail-fast)
- Returns array of results

**Promise.allSettled(promises)**
- Waits for ALL promises to complete (resolve or reject)
- Never rejects
- Returns array of {status, value/reason}

**Promise.race(promises)**
- Resolves/rejects as soon as the FIRST promise settles
- Result is the first settled promise's value/reason

**Promise.any(promises)**
- Resolves with the FIRST promise that resolves
- Only rejects if ALL promises reject (AggregateError)`,
    followUp: "When would you use each one?",
    followUpAnswer: "Promise.all: loading multiple API resources that are all required. Promise.allSettled: batch operations where you need all results regardless of failures. Promise.race: implementing timeouts for fetch requests. Promise.any: trying multiple CDNs and using whichever responds first.",
    codeExample: `const p1 = Promise.resolve("A");
const p2 = new Promise(r => setTimeout(() => r("B"), 100));
const p3 = Promise.reject("Error");

// Promise.all - fails fast
Promise.all([p1, p2]).then(console.log); // ["A", "B"]
// Promise.all([p1, p3]).catch(console.log); // "Error"

// Promise.allSettled - always completes
Promise.allSettled([p1, p3]).then(console.log);
// [{status:"fulfilled",value:"A"}, {status:"rejected",reason:"Error"}]

// Promise.race - first to settle
Promise.race([p1, p2]).then(console.log); // "A" (first)

// Promise.any - first to resolve
Promise.any([p3, p2]).then(console.log); // "B" (p3 rejected, p2 resolved)`
  },
  {
    id: 7,
    category: "DOM & Events",
    difficulty: "medium",
    question: "What is event delegation and why is it useful?",
    answer: `**Event delegation** is a pattern where you attach a single event listener to a parent element instead of individual listeners on each child element.

**How it works:**
When an event occurs on a child, it bubbles up to the parent where the listener catches it. You use event.target to identify which child was actually clicked.

**Benefits:**
1. **Performance** — One listener instead of hundreds
2. **Dynamic elements** — Works with elements added later via JS
3. **Memory** — Less memory usage (fewer event listeners)
4. **Cleaner code** — Centralized event handling

**Used extensively in:** jQuery, React (synthetic events), Angular, and vanilla JS applications.`,
    followUp: "Can you explain event bubbling vs capturing?",
    followUpAnswer: "Events have three phases: Capturing (top → target), Target (the clicked element), Bubbling (target → top). By default, listeners trigger during bubbling. Use addEventListener's third argument {capture: true} for the capturing phase. stopPropagation() prevents further propagation in either phase.",
    codeExample: `// Instead of this (BAD):
document.querySelectorAll("li").forEach(li => {
  li.addEventListener("click", handleClick);
});

// Do this (GOOD):
document.querySelector("ul").addEventListener("click", (e) => {
  if (e.target.tagName === "LI") {
    console.log("Clicked:", e.target.textContent);
  }
  // Works even for dynamically added <li> elements!
});

// More specific matching:
document.querySelector(".container").addEventListener("click", (e) => {
  const btn = e.target.closest(".action-btn");
  if (btn) {
    const action = btn.dataset.action;
    console.log("Action:", action);
  }
});`
  },
  {
    id: 8,
    category: "Advanced",
    difficulty: "hard",
    question: "Explain 'this' keyword in different contexts",
    answer: `The value of 'this' depends on HOW a function is called, not where it's defined.

**Rules (in order of priority):**

1. **new binding** — this = new instance
   \`new Constructor()\`

2. **Explicit binding** — this = specified object
   \`fn.call(obj)\`, \`fn.apply(obj)\`, \`fn.bind(obj)\`

3. **Implicit binding** — this = calling object
   \`obj.method()\` → this = obj

4. **Default binding** — this = window/global
   Plain function call: \`fn()\` → this = window (or undefined in strict mode)

5. **Arrow functions** — this = enclosing scope's this
   Arrow functions don't have their own 'this'`,
    followUp: "Why do arrow functions not have their own 'this'?",
    followUpAnswer: "Arrow functions were designed to solve the common problem of losing 'this' context in callbacks and nested functions. Before arrow functions, developers used var self = this, .bind(this), or stored references. Arrow functions lexically bind 'this' from the enclosing scope, making them ideal for callbacks, array methods, and React event handlers.",
    codeExample: `const obj = {
  name: "Anup",
  
  // Regular method - this = obj
  greet() { return this.name; }, // "Anup"
  
  // Arrow - this = outer scope (NOT obj)
  greetArrow: () => this.name, // undefined
  
  // Callback issue
  delayedGreet() {
    // Regular function loses 'this'
    setTimeout(function() {
      // console.log(this.name); // undefined!
    }, 100);
    
    // Arrow function keeps 'this'
    setTimeout(() => {
      console.log(this.name); // "Anup" ✓
    }, 100);
  }
};

// call/apply/bind
function intro(greeting) {
  return greeting + ", " + this.name;
}
const person = { name: "Anup" };
intro.call(person, "Hi");     // "Hi, Anup"
intro.apply(person, ["Hi"]);  // "Hi, Anup"
const bound = intro.bind(person);
bound("Hello"); // "Hello, Anup"`
  },
  {
    id: 9,
    category: "Advanced",
    difficulty: "hard",
    question: "Implement debounce and throttle from scratch",
    answer: `**Debounce:** Delays function execution until after a period of inactivity. If called again during the wait, it resets the timer.

**Throttle:** Ensures a function is called at most once in a specified time period, regardless of how many times it's triggered.

**Key Difference:**
- Debounce: "Wait until done, then execute" (search input)
- Throttle: "Execute at most every X ms" (scroll handler)`,
    followUp: "When would you use debounce vs throttle?",
    followUpAnswer: "Debounce: search input (wait for user to stop typing), window resize end event, auto-save forms. Throttle: scroll event handlers, mousemove tracking, rate-limiting API calls, game input handling. General rule: debounce for 'when finished', throttle for 'not too often'.",
    codeExample: `// Debounce Implementation
function debounce(fn, delay) {
  let timer;
  return function(...args) {
    clearTimeout(timer);
    timer = setTimeout(() => {
      fn.apply(this, args);
    }, delay);
  };
}

// Usage: search input
const search = debounce((query) => {
  fetch("/api/search?q=" + query);
}, 300);

// Throttle Implementation
function throttle(fn, limit) {
  let inThrottle = false;
  return function(...args) {
    if (!inThrottle) {
      fn.apply(this, args);
      inThrottle = true;
      setTimeout(() => {
        inThrottle = false;
      }, limit);
    }
  };
}

// Usage: scroll handler
const onScroll = throttle(() => {
  console.log(window.scrollY);
}, 200);
window.addEventListener("scroll", onScroll);`
  },
  {
    id: 10,
    category: "Advanced",
    difficulty: "hard",
    question: "What is the difference between deep copy and shallow copy?",
    answer: `**Shallow Copy:**
- Copies top-level properties by value
- Nested objects/arrays are copied by REFERENCE
- Changes to nested objects affect the original

**Deep Copy:**
- Recursively copies ALL levels
- Creates completely independent copy
- No references shared with original

**Methods:**
Shallow: spread (...), Object.assign(), Array.from()
Deep: structuredClone(), JSON parse/stringify (with limitations), recursive clone`,
    followUp: "What are the limitations of JSON.parse(JSON.stringify())?",
    followUpAnswer: "It loses: undefined values, functions, Symbols, Date objects (converted to strings), RegExp, Map/Set, Infinity, NaN, circular references (throws error), prototype chain, and non-enumerable properties. structuredClone() handles most of these (except functions and DOM nodes).",
    codeExample: `// Shallow Copy
const original = { 
  name: "Anup",
  address: { city: "Toronto" }
};

const shallow = { ...original };
shallow.name = "Changed";           // Doesn't affect original
shallow.address.city = "Vancouver"; // AFFECTS original!
console.log(original.address.city); // "Vancouver" 😱

// Deep Copy - structuredClone (modern)
const deep = structuredClone(original);
deep.address.city = "Montreal";
console.log(original.address.city); // "Vancouver" (safe!)

// Deep Copy - JSON method (limitations!)
const jsonCopy = JSON.parse(JSON.stringify(original));

// Custom deep clone
function deepClone(obj) {
  if (obj === null || typeof obj !== "object") return obj;
  if (obj instanceof Date) return new Date(obj);
  if (obj instanceof Array) return obj.map(item => deepClone(item));
  const clone = {};
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      clone[key] = deepClone(obj[key]);
    }
  }
  return clone;
}`
  },
  {
    id: 11,
    category: "Coding",
    difficulty: "easy",
    question: "Reverse a string without using .reverse()",
    answer: "There are multiple approaches to reverse a string in JavaScript. The key insight is that strings are immutable, so we need to create a new string.",
    followUp: "What about strings with emojis or special Unicode characters?",
    followUpAnswer: "Simple approaches break with emojis/surrogates. Use [...str].reverse().join('') which handles Unicode correctly because the spread operator respects code points. Or use Array.from(str).reverse().join('').",
    codeExample: `// Method 1: Split-Reverse-Join
function reverse1(str) {
  return str.split("").reverse().join("");
}

// Method 2: Loop (no built-in reverse)
function reverse2(str) {
  let result = "";
  for (let i = str.length - 1; i >= 0; i--) {
    result += str[i];
  }
  return result;
}

// Method 3: Reduce
function reverse3(str) {
  return [...str].reduce((rev, char) => char + rev, "");
}

// Method 4: Recursion
function reverse4(str) {
  if (str.length <= 1) return str;
  return reverse4(str.slice(1)) + str[0];
}

// Unicode-safe
function reverseUnicode(str) {
  return [...str].reverse().join("");
}

console.log(reverse1("hello"));       // "olleh"
console.log(reverseUnicode("hello🌍")); // "🌍olleh"`
  },
  {
    id: 12,
    category: "Coding",
    difficulty: "medium",
    question: "Implement a function to flatten a nested array",
    answer: "Flattening converts a nested array like [1, [2, [3, [4]]]] into [1, 2, 3, 4]. This tests recursion and understanding of array methods.",
    followUp: "How does Array.flat(Infinity) work internally?",
    followUpAnswer: "Array.flat() uses an iterative approach with a stack or recursive approach internally. The depth parameter controls how many levels to flatten. Infinity flattens all levels. It was added in ES2019 and is now supported in all modern browsers.",
    codeExample: `// Method 1: Built-in
[1, [2, [3, [4]]]].flat(Infinity); // [1, 2, 3, 4]

// Method 2: Recursive
function flatten(arr) {
  return arr.reduce((flat, item) => {
    return flat.concat(
      Array.isArray(item) ? flatten(item) : item
    );
  }, []);
}

// Method 3: Iterative (stack-based)
function flattenIterative(arr) {
  const stack = [...arr];
  const result = [];
  while (stack.length) {
    const item = stack.pop();
    if (Array.isArray(item)) {
      stack.push(...item);
    } else {
      result.unshift(item);
    }
  }
  return result;
}

// Method 4: Generator
function* flatGen(arr) {
  for (const item of arr) {
    if (Array.isArray(item)) yield* flatGen(item);
    else yield item;
  }
}

console.log(flatten([1, [2, [3, [4]]]])); // [1,2,3,4]
console.log([...flatGen([1, [2, [3]]])]); // [1,2,3]`
  },
  {
    id: 13,
    category: "Coding",
    difficulty: "hard",
    question: "Implement a simple Promise from scratch",
    answer: "Implementing Promise from scratch tests deep understanding of async programming, the event loop, and the Promise specification.",
    followUp: "How does the microtask queue relate to Promises?",
    followUpAnswer: "Promise callbacks (.then, .catch, .finally) are scheduled as microtasks using queueMicrotask() internally. Microtasks are processed after the current synchronous code completes but before the next macrotask (setTimeout). This is why Promise.resolve().then(fn) always runs before setTimeout(fn, 0).",
    codeExample: `class MyPromise {
  constructor(executor) {
    this.state = "pending";
    this.value = undefined;
    this.callbacks = [];

    const resolve = (value) => {
      if (this.state !== "pending") return;
      this.state = "fulfilled";
      this.value = value;
      this.callbacks.forEach(cb => cb.onFulfilled(value));
    };

    const reject = (reason) => {
      if (this.state !== "pending") return;
      this.state = "rejected";
      this.value = reason;
      this.callbacks.forEach(cb => cb.onRejected(reason));
    };

    try { executor(resolve, reject); } 
    catch (e) { reject(e); }
  }

  then(onFulfilled, onRejected) {
    return new MyPromise((resolve, reject) => {
      const handle = () => {
        try {
          if (this.state === "fulfilled") {
            const result = onFulfilled 
              ? onFulfilled(this.value) 
              : this.value;
            resolve(result);
          } else if (this.state === "rejected") {
            if (onRejected) resolve(onRejected(this.value));
            else reject(this.value);
          }
        } catch (e) { reject(e); }
      };
      
      if (this.state === "pending") {
        this.callbacks.push({ 
          onFulfilled: () => handle(), 
          onRejected: () => handle() 
        });
      } else {
        queueMicrotask(handle);
      }
    });
  }

  catch(onRejected) { return this.then(null, onRejected); }
}`
  },
  {
    id: 14,
    category: "Coding",
    difficulty: "medium",
    question: "Find the first non-repeating character in a string",
    answer: "This is a classic interview question that tests understanding of data structures (Map/Object) and string iteration.",
    followUp: "What is the time and space complexity?",
    followUpAnswer: "Time: O(n) where n is string length — we iterate twice (once to count, once to find). Space: O(k) where k is the number of unique characters (at most 26 for lowercase English letters, making it effectively O(1)).",
    codeExample: `function firstNonRepeating(str) {
  const charCount = new Map();
  
  // Count occurrences
  for (const char of str) {
    charCount.set(char, (charCount.get(char) || 0) + 1);
  }
  
  // Find first with count 1
  for (const char of str) {
    if (charCount.get(char) === 1) return char;
  }
  
  return null;
}

console.log(firstNonRepeating("aabcbcd")); // "d"
console.log(firstNonRepeating("aabb"));     // null

// One-liner (less efficient but clever)
const firstUnique = (s) => 
  [...s].find(c => s.indexOf(c) === s.lastIndexOf(c)) ?? null;`
  },
  {
    id: 15,
    category: "System Design",
    difficulty: "hard",
    question: "How would you implement infinite scroll?",
    answer: `**Infinite scroll** loads more content as the user scrolls near the bottom of the page.

**Approaches:**
1. **Scroll event + offset calculation** (traditional)
2. **Intersection Observer API** (modern, performant)

**Key considerations:**
- Throttle scroll events
- Show loading indicator
- Handle errors and retry
- Implement virtual scrolling for large lists
- Maintain scroll position
- Support back button navigation`,
    followUp: "What is the Intersection Observer API?",
    followUpAnswer: "Intersection Observer asynchronously observes changes in the intersection of a target element with an ancestor/viewport. It's more performant than scroll events because it runs off the main thread. It's used for infinite scroll, lazy loading images, ad viewability tracking, and triggering animations on scroll.",
    codeExample: `// Intersection Observer approach
function setupInfiniteScroll(loadMore) {
  const sentinel = document.querySelector("#sentinel");
  
  const observer = new IntersectionObserver(
    (entries) => {
      if (entries[0].isIntersecting) {
        loadMore();
      }
    },
    { threshold: 0.1 }
  );
  
  observer.observe(sentinel);
  return () => observer.disconnect();
}

// React hook version
function useInfiniteScroll(callback) {
  const sentinelRef = useRef();
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) callback();
      }
    );
    
    if (sentinelRef.current) {
      observer.observe(sentinelRef.current);
    }
    
    return () => observer.disconnect();
  }, [callback]);
  
  return sentinelRef;
}

// Usage: <div ref={sentinelRef} /> at end of list`
  }
];

export default mockInterviews;
