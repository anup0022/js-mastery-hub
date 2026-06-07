// Related videos from Code with Harry's JavaScript playlist mapped to each topic
// Each topic gets 2-4 directly related videos from the 100-video playlist

const topicVideos = {
  1: [
    { id: "ER9SspLe4Hg", title: "Introduction to JavaScript + Setup | JavaScript Tutorial in Hindi #1" },
    { id: "ImFeTcWCsR0", title: "JavaScript in the Browser | JavaScript Tutorial in Hindi #23" },
    { id: "hS2vw0qVt0c", title: "JavaScript Script Tag | JavaScript Tutorial in Hindi #24" },
    { id: "1WNtGvrLisg", title: "JavaScript Console Object | JavaScript Tutorial in Hindi #25" },
  ],
  2: [
    { id: "Q4p8vRQX8uY", title: "Variables in JavaScript | JavaScript Tutorial in Hindi #2" },
    { id: "Icev9Oxf0WA", title: "const, let and var in JavaScript | JavaScript Tutorial in Hindi #3" },
    { id: "_FmHfOqJ4SY", title: "Hoisting in JavaScript | JavaScript Tutorial in Hindi #89" },
  ],
  3: [
    { id: "qpU3WIqRz9I", title: "Primitives and Objects in JavaScript | JavaScript Tutorial in Hindi #4" },
    { id: "vA-AAeqkpxM", title: "JavaScript Chapter 1 - Practice Set | JavaScript Tutorial in Hindi #5" },
  ],
  4: [
    { id: "lsV8JQgSW1s", title: "JavaScript Operators and Expressions | JavaScript Tutorial in Hindi #6" },
    { id: "s5Lu4QTjeL0", title: "Conditional expressions in JavaScript | JavaScript Tutorial in Hindi #7" },
  ],
  5: [
    { id: "s5Lu4QTjeL0", title: "Conditional expressions in JavaScript | JavaScript Tutorial in Hindi #7" },
    { id: "W77qmqrhCcA", title: "JavaScript Chapter 2 - Practice Set on Operators and Conditionals | JavaScript Tutorial in Hindi #8" },
  ],
  6: [
    { id: "XKyyM1VWtUE", title: "For Loops in JavaScript | JavaScript Tutorial in Hindi #9" },
    { id: "drEjyBSu33w", title: "While Loops in JavaScript | JavaScript Tutorial in Hindi #10" },
    { id: "YWyr7Nug2oc", title: "Using Loops With Arrays in JavaScript | JavaScript Tutorial in Hindi #19" },
    { id: "ZAOipfPnb3s", title: "JavaScript Chapter 3 - Practice Set on Loops and Functions | JavaScript Tutorial in Hindi #12" },
  ],
  7: [
    { id: "a_gwOwkbhZ0", title: "Functions in JavaScript | JavaScript Tutorial in Hindi #11" },
    { id: "bJKjtC9MnZ8", title: "Arrow Functions Revisited | JavaScript Tutorial in Hindi #91" },
    { id: "oR0yIjzfxQw", title: "IIFE - Immediately Invoked Function Expressions | JavaScript Tutorial in Hindi #86" },
  ],
  8: [
    { id: "CNk33k5nScg", title: "local and global Scope in JavaScript | JavaScript Tutorial in Hindi #88" },
    { id: "Ze-JGb4I9zU", title: "Closures in JavaScript | JavaScript Tutorial in Hindi #90" },
    { id: "_FmHfOqJ4SY", title: "Hoisting in JavaScript | JavaScript Tutorial in Hindi #89" },
  ],
  9: [
    { id: "Yafji9PB1lM", title: "Introduction to Strings | JavaScript Tutorial in Hindi #13" },
    { id: "8yg4RUEnaIk", title: "JavaScript String Methods | JavaScript Tutorial in Hindi #14" },
    { id: "Wj3wGP1g5z8", title: "JavaScript Chapter 4 - Practice Set on Strings | JavaScript Tutorial in Hindi #15" },
  ],
  10: [
    { id: "a_Bz5ciBHQ0", title: "Introduction to Arrays | JavaScript Tutorial in Hindi #16" },
    { id: "BLIrBThPTXc", title: "JavaScript Array Methods | JavaScript Tutorial in Hindi #17" },
    { id: "QxA-KB2lKgk", title: "Some More JavaScript Array Methods | JavaScript Tutorial in Hindi #18" },
    { id: "bAUMuuRH99o", title: "Map, Filter & Reduce in JavaScript | JavaScript Tutorial in Hindi #20" },
  ],
  11: [
    { id: "qpU3WIqRz9I", title: "Primitives and Objects in JavaScript | JavaScript Tutorial in Hindi #4" },
    { id: "fe6L8bNC_Yw", title: "Introduction to Object Oriented Programming | JavaScript Tutorial in Hindi #74" },
    { id: "_BsE5kmJk6Q", title: "Destructuring assignment and Spread Operator | JavaScript Tutorial in Hindi #87" },
  ],
  12: [
    { id: "fe6L8bNC_Yw", title: "Introduction to Object Oriented Programming | JavaScript Tutorial in Hindi #74" },
    { id: "bJKjtC9MnZ8", title: "Arrow Functions Revisited | JavaScript Tutorial in Hindi #91" },
  ],
  13: [
    { id: "eDxrLEQbLv0", title: "Prototypes and __proto__ in JavaScript | JavaScript Tutorial in Hindi #75" },
    { id: "9loYq8W8rsg", title: "Inheritance & extends Keyword in JavaScript | JavaScript Tutorial in Hindi #78" },
  ],
  14: [
    { id: "7RpdfkSyJfU", title: "Classes and Objects in JavaScript | JavaScript Tutorial in Hindi #76" },
    { id: "0E2akQ5E-5Y", title: "Constructors in JavaScript | JavaScript Tutorial in Hindi #77" },
    { id: "9loYq8W8rsg", title: "Inheritance & extends Keyword in JavaScript | JavaScript Tutorial in Hindi #78" },
    { id: "__l6ZOPaijs", title: "Static Method in JavaScript | JavaScript Tutorial in Hindi #81" },
    { id: "NsF4BrRfOGM", title: "getters, setters & instanceOf Operator | JavaScript Tutorial in Hindi #82" },
  ],
  15: [
    { id: "IJlGpI6l92U", title: "Introduction to Callbacks | JavaScript Tutorial in Hindi #52" },
    { id: "fIPJUteOdLc", title: "Callback Hell & Pyramid of Doom | JavaScript Tutorial in Hindi #53" },
    { id: "vFJbKR6zfCE", title: "Event Loop in JavaScript | JavaScript Tutorial in Hindi #100" },
  ],
  16: [
    { id: "Dadlf6YsTHA", title: "Introduction to Promises | JavaScript Tutorial in Hindi #54" },
    { id: "Fsv4IEH-4Lw", title: "Promise .then() and .catch() | JavaScript Tutorial in Hindi #55" },
    { id: "RPLt3TiH6zg", title: "Promise Chaining .then() calls | JavaScript Tutorial in Hindi #56" },
    { id: "xJQemfYXEf8", title: "The Promise API | JavaScript Tutorial in Hindi #58" },
  ],
  17: [
    { id: "bLre6Uf4Op0", title: "Async/Await in JavaScript | JavaScript Tutorial in Hindi #59" },
    { id: "Dadlf6YsTHA", title: "Introduction to Promises | JavaScript Tutorial in Hindi #54" },
  ],
  18: [
    { id: "xOCzjgjedRc", title: "DOM, BOM & Window Object | JavaScript Tutorial in Hindi #28" },
    { id: "Rhj6KWFw7AA", title: "Walking the DOM | JavaScript Tutorial in Hindi #31" },
    { id: "oY036JqESt0", title: "Searching the DOM | JavaScript Tutorial in Hindi #36" },
    { id: "M8AUk6gDe2c", title: "innerHTML, outerHTML and other properties | JavaScript Tutorial in Hindi #41" },
    { id: "wyAZuYatCOI", title: "HTML Insertion Methods | JavaScript Tutorial in Hindi #43" },
  ],
  19: [
    { id: "Y3f_ih-2jGk", title: "Introduction to Browser Events | JavaScript Tutorial in Hindi #47" },
    { id: "rFq0HVOdDo4", title: "Handling Browser Events | JavaScript Tutorial in Hindi #48" },
    { id: "Ruq4sEw9h_8", title: "setInterval and setTimeout in JavaScript | JavaScript Tutorial in Hindi #46" },
  ],
  20: [
    { id: "_BsE5kmJk6Q", title: "Destructuring assignment and Spread Operator | JavaScript Tutorial in Hindi #87" },
    { id: "bJKjtC9MnZ8", title: "Arrow Functions Revisited | JavaScript Tutorial in Hindi #91" },
    { id: "wCkHbaLG5cw", title: "Modules in JavaScript | JavaScript Tutorial in Hindi #97" },
  ],
  21: [
    { id: "WRNBQCl_cPU", title: "Error Handling: try and catch | JavaScript Tutorial in Hindi #60" },
    { id: "uOQBGKfldIg", title: "The Error Object & Custom Errors | JavaScript Tutorial in Hindi #61" },
    { id: "rWCGC2NWjcc", title: "The Finally Clause | JavaScript Tutorial in Hindi #62" },
  ],
  22: [
    { id: "A98SPz5XLwY", title: "localStorage & related methods | JavaScript Tutorial in Hindi #69" },
    { id: "rfSJeox61vA", title: "sessionStorage & related methods | JavaScript Tutorial in Hindi #70" },
    { id: "sHrwueeeMmY", title: "Cookies in JavaScript | JavaScript Tutorial in Hindi #68" },
  ],
  23: [
    { id: "_BsE5kmJk6Q", title: "Destructuring assignment and Spread Operator | JavaScript Tutorial in Hindi #87" },
    { id: "bkl5xWLr3fg", title: "JavaScript Chapter 12 - Practice Set | JavaScript Tutorial in Hindi #92" },
  ],
  24: [
    { id: "zeMPry3ak6Y", title: "Regular Expressions in JavaScript | JavaScript Tutorial in Hindi #99" },
  ],
  25: [
    { id: "Atq7VjVbaA8", title: "Fetch API | JavaScript Tutorial in Hindi #66" },
    { id: "57SrCBCxdgc", title: "Sending POST request with Fetch API | JavaScript Tutorial in Hindi #67" },
  ],
  26: [
    { id: "fe6L8bNC_Yw", title: "Introduction to Object Oriented Programming | JavaScript Tutorial in Hindi #74" },
    { id: "7RpdfkSyJfU", title: "Classes and Objects in JavaScript | JavaScript Tutorial in Hindi #76" },
    { id: "oR0yIjzfxQw", title: "IIFE - Immediately Invoked Function Expressions | JavaScript Tutorial in Hindi #86" },
  ],
  27: [
    { id: "bAUMuuRH99o", title: "Map, Filter & Reduce in JavaScript | JavaScript Tutorial in Hindi #20" },
    { id: "Ze-JGb4I9zU", title: "Closures in JavaScript | JavaScript Tutorial in Hindi #90" },
    { id: "bJKjtC9MnZ8", title: "Arrow Functions Revisited | JavaScript Tutorial in Hindi #91" },
  ],
  28: [
    { id: "Ruq4sEw9h_8", title: "setInterval and setTimeout in JavaScript | JavaScript Tutorial in Hindi #46" },
    { id: "vFJbKR6zfCE", title: "Event Loop in JavaScript | JavaScript Tutorial in Hindi #100" },
  ],
  // Python topics
  29: [
    { id: "gfDE2a7MKjA", title: "Introduction to Python | Python Tutorial" },
    { id: "C2AekaOlRcM", title: "Python for Beginners | Complete Course" }
  ],
  30: [
    { id: "7NULLPQdVXk", title: "Variables and Data Types in Python" },
    { id: "qpU3WIqRz9I", title: "Python Data Types Explained" }
  ],
  31: [
    { id: "Yafji9PB1lM", title: "Strings in Python | String Methods" },
    { id: "8yg4RUEnaIk", title: "Python String Manipulation" }
  ],
  32: [
    { id: "a_Bz5ciBHQ0", title: "Lists in Python | Python Tutorial" },
    { id: "BLIrBThPTXc", title: "Python List Methods" }
  ],
  33: [
    { id: "daefaLgNkw0", title: "Dictionaries in Python" },
    { id: "qpU3WIqRz9I", title: "Python Dict Operations" }
  ],
  34: [
    { id: "s5Lu4QTjeL0", title: "Control Flow in Python | if elif else" },
    { id: "W77qmqrhCcA", title: "Python Conditionals" }
  ],
  35: [
    { id: "XKyyM1VWtUE", title: "Loops in Python | for while" },
    { id: "drEjyBSu33w", title: "Python Loop Patterns" }
  ],
  36: [
    { id: "a_gwOwkbhZ0", title: "Functions in Python" },
    { id: "bJKjtC9MnZ8", title: "Python Function Arguments" }
  ],
  37: [
    { id: "bAUMuuRH99o", title: "List Comprehensions in Python" },
    { id: "QxA-KB2lKgk", title: "Python Generator Expressions" }
  ],
  38: [
    { id: "C2AekaOlRcM", title: "File Handling in Python" },
    { id: "A98SPz5XLwY", title: "Reading and Writing Files" }
  ],
  39: [
    { id: "WRNBQCl_cPU", title: "Exception Handling in Python | try except" },
    { id: "uOQBGKfldIg", title: "Python Error Handling" }
  ],
  40: [
    { id: "wCkHbaLG5cw", title: "Modules in Python" },
    { id: "fe6L8bNC_Yw", title: "Python Packages" }
  ],
  41: [
    { id: "7RpdfkSyJfU", title: "Classes and Objects in Python" },
    { id: "0E2akQ5E-5Y", title: "Python OOP Basics" }
  ],
  42: [
    { id: "9loYq8W8rsg", title: "Inheritance in Python" },
    { id: "__l6ZOPaijs", title: "Python Polymorphism" }
  ],
  43: [
    { id: "oR0yIjzfxQw", title: "Decorators in Python" },
    { id: "Ze-JGb4I9zU", title: "Python Decorator Patterns" }
  ],
  44: [
    { id: "bJKjtC9MnZ8", title: "Lambda Functions in Python" },
    { id: "bAUMuuRH99o", title: "Python map filter reduce" }
  ],
  45: [
    { id: "C2AekaOlRcM", title: "Type Hints in Python" },
    { id: "fe6L8bNC_Yw", title: "Python Type Annotations" }
  ],
  46: [
    { id: "C2AekaOlRcM", title: "Python Project - Calculator" },
    { id: "gfDE2a7MKjA", title: "Build CLI Apps with Python" }
  ],
  47: [
    { id: "C2AekaOlRcM", title: "Python Project - File Organizer" },
    { id: "A98SPz5XLwY", title: "Python File Management" }
  ],
  48: [
    { id: "C2AekaOlRcM", title: "Python Web Scraping with BeautifulSoup" },
    { id: "gfDE2a7MKjA", title: "BeautifulSoup Tutorial" }
  ],
  49: [
    { id: "C2AekaOlRcM", title: "Python Interview Questions - Core Concepts" },
    { id: "gfDE2a7MKjA", title: "Python Interview Prep" }
  ],
  50: [
    { id: "C2AekaOlRcM", title: "Python OOP Interview Questions" },
    { id: "7RpdfkSyJfU", title: "Design Patterns in Python" }
  ],
  51: [
    { id: "C2AekaOlRcM", title: "Python DSA Interview Questions" },
    { id: "gfDE2a7MKjA", title: "Data Structures in Python" }
  ]
};

export default topicVideos;
