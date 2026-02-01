# Fundementals.js
Yes this includes ai, but for studying purposes only.

// ============================================
// JAVASCRIPT FUNDAMENTALS - COMPLETE GUIDE
// ============================================

// ============================================
// 1. VARIABLES AND DATA TYPES
// ============================================

// Variables can be declared using: let, const, or var
// - let: can be reassigned, block-scoped
// - const: cannot be reassigned, block-scoped (use for values that won't change)
// - var: old way, function-scoped (avoid using)

let name = "John";           // String - text data
const age = 25;              // Number - integers and decimals
let isStudent = true;        // Boolean - true or false
let salary = null;           // Null - intentionally empty
let address;                 // Undefined - not yet assigned

// Numbers
let integer = 42;
let decimal = 3.14;
let negative = -10;

// Strings - text enclosed in quotes
let singleQuote = 'Hello';
let doubleQuote = "World";
let backticks = `Template literal with ${name}`; // String interpolation

// ============================================
// 2. OPERATORS
// ============================================

// Arithmetic Operators
let sum = 10 + 5;           // Addition: 15
let difference = 10 - 5;    // Subtraction: 5
let product = 10 * 5;       // Multiplication: 50
let quotient = 10 / 5;      // Division: 2
let remainder = 10 % 3;     // Modulus (remainder): 1
let power = 2 ** 3;         // Exponentiation: 8

// Increment and Decrement
let counter = 0;
counter++;                  // Increment by 1 (counter is now 1)
counter--;                  // Decrement by 1 (counter is now 0)

// Comparison Operators
let isEqual = (5 == "5");           // true (loose equality, converts types)
let isStrictEqual = (5 === "5");    // false (strict equality, checks type too)
let isNotEqual = (5 != 3);          // true
let isStrictNotEqual = (5 !== "5"); // true
let isGreater = (10 > 5);           // true
let isLess = (5 < 10);              // true
let isGreaterOrEqual = (10 >= 10);  // true
let isLessOrEqual = (5 <= 10);      // true

// Logical Operators
let andOperator = (true && false);  // AND: false (both must be true)
let orOperator = (true || false);   // OR: true (at least one must be true)
let notOperator = !true;            // NOT: false (inverts the value)

// ============================================
// 3. CONDITIONAL STATEMENTS
// ============================================

// if statement
let temperature = 25;
if (temperature > 30) {
    console.log("It's hot!");
}

// if-else statement
if (temperature > 30) {
    console.log("It's hot!");
} else {
    console.log("It's comfortable.");
}

// if-else if-else chain
if (temperature > 30) {
    console.log("It's hot!");
} else if (temperature > 20) {
    console.log("It's warm.");
} else if (temperature > 10) {
    console.log("It's cool.");
} else {
    console.log("It's cold!");
}

// Ternary operator (shorthand for if-else)
let status = (age >= 18) ? "Adult" : "Minor";

// Switch statement
let day = "Monday";
switch (day) {
    case "Monday":
        console.log("Start of the week");
        break;
    case "Friday":
        console.log("Almost weekend!");
        break;
    case "Saturday":
    case "Sunday":
        console.log("Weekend!");
        break;
    default:
        console.log("Midweek day");
}

// ============================================
// 4. LOOPS
// ============================================

// for loop - when you know the number of iterations
for (let i = 0; i < 5; i++) {
    console.log("Iteration: " + i);
}

// while loop - when condition is checked before execution
let count = 0;
while (count < 5) {
    console.log("Count: " + count);
    count++;
}

// do-while loop - executes at least once, then checks condition
let num = 0;
do {
    console.log("Number: " + num);
    num++;
} while (num < 5);

// for...of loop - iterates over array values
let colors = ["red", "green", "blue"];
for (let color of colors) {
    console.log(color);
}

// for...in loop - iterates over object keys
let person = { name: "Alice", age: 30, city: "NYC" };
for (let key in person) {
    console.log(key + ": " + person[key]);
}

// ============================================
// 5. ARRAYS
// ============================================

// Creating arrays
let fruits = ["apple", "banana", "orange"];
let numbers = [1, 2, 3, 4, 5];
let mixed = [1, "two", true, null];

// Accessing array elements (zero-indexed)
console.log(fruits[0]);     // "apple"
console.log(fruits[2]);     // "orange"

// Array properties and methods
console.log(fruits.length); // 3 (number of elements)

// Adding elements
fruits.push("grape");       // Add to end: ["apple", "banana", "orange", "grape"]
fruits.unshift("mango");    // Add to beginning: ["mango", "apple", "banana", "orange", "grape"]

// Removing elements
let lastFruit = fruits.pop();      // Remove from end, returns "grape"
let firstFruit = fruits.shift();   // Remove from beginning, returns "mango"

// Finding elements
let index = fruits.indexOf("banana");  // Returns 1 (index of "banana")
let exists = fruits.includes("apple"); // Returns true

// Slicing and splicing
let someFruits = fruits.slice(1, 3);   // Returns elements from index 1 to 2 (not including 3)
fruits.splice(1, 1, "kiwi");           // Remove 1 element at index 1, add "kiwi"

// Array iteration methods
fruits.forEach(function(fruit, index) {
    console.log(index + ": " + fruit);
});

// map - transform each element
let lengths = fruits.map(function(fruit) {
    return fruit.length;
});

// filter - keep elements that match condition
let longNames = fruits.filter(function(fruit) {
    return fruit.length > 5;
});

// reduce - combine all elements into single value
let total = numbers.reduce(function(sum, num) {
    return sum + num;
}, 0);

// ============================================
// 6. OBJECTS
// ============================================

// Creating objects
let student = {
    firstName: "John",
    lastName: "Doe",
    age: 20,
    grades: [85, 90, 88],
    isEnrolled: true
};

// Accessing object properties
console.log(student.firstName);     // Dot notation: "John"
console.log(student["lastName"]);   // Bracket notation: "Doe"

// Modifying properties
student.age = 21;
student["isEnrolled"] = false;

// Adding new properties
student.major = "Computer Science";

// Deleting properties
delete student.isEnrolled;

// Methods - functions inside objects
let calculator = {
    value: 0,
    add: function(num) {
        this.value += num;
        return this;
    },
    subtract: function(num) {
        this.value -= num;
        return this;
    },
    getValue: function() {
        return this.value;
    }
};

calculator.add(5).add(3).subtract(2); // Method chaining
console.log(calculator.getValue());    // 6

// Object methods
let keys = Object.keys(student);       // Returns array of keys
let values = Object.values(student);   // Returns array of values
let entries = Object.entries(student); // Returns array of [key, value] pairs

// ============================================
// 7. FUNCTIONS
// ============================================

// Function declaration
function greet(name) {
    return "Hello, " + name + "!";
}

// Function expression
const greetExpression = function(name) {
    return "Hello, " + name + "!";
};

// Arrow functions (ES6+) - shorter syntax
const greetArrow = (name) => {
    return "Hello, " + name + "!";
};

// Arrow function with single expression (implicit return)
const greetShort = (name) => "Hello, " + name + "!";

// Arrow function with single parameter (parentheses optional)
const double = num => num * 2;

// Arrow function with no parameters
const sayHi = () => "Hi!";

// Function with default parameters
function multiply(a, b = 1) {
    return a * b;
}

console.log(multiply(5));      // 5 (b defaults to 1)
console.log(multiply(5, 3));   // 15

// Function with rest parameters (variable number of arguments)
function sum(...numbers) {
    return numbers.reduce((total, num) => total + num, 0);
}

console.log(sum(1, 2, 3, 4, 5)); // 15

// ============================================
// 8. STRING METHODS
// ============================================

let text = "JavaScript is awesome!";

// String properties
console.log(text.length);              // 22

// Case conversion
console.log(text.toLowerCase());       // "javascript is awesome!"
console.log(text.toUpperCase());       // "JAVASCRIPT IS AWESOME!"

// Searching
console.log(text.indexOf("is"));       // 11 (first occurrence)
console.log(text.lastIndexOf("a"));    // 17 (last occurrence)
console.log(text.includes("awesome")); // true
console.log(text.startsWith("Java"));  // true
console.log(text.endsWith("!"));       // true

// Extracting parts
console.log(text.slice(0, 10));        // "JavaScript"
console.log(text.substring(0, 10));    // "JavaScript"
console.log(text.substr(0, 10));       // "JavaScript" (deprecated)

// Replacing
console.log(text.replace("awesome", "great"));      // Replace first occurrence
console.log(text.replaceAll("a", "@"));             // Replace all occurrences

// Trimming whitespace
let padded = "  hello  ";
console.log(padded.trim());            // "hello"
console.log(padded.trimStart());       // "hello  "
console.log(padded.trimEnd());         // "  hello"

// Splitting and joining
let words = text.split(" ");           // Split into array: ["JavaScript", "is", "awesome!"]
let joined = words.join("-");          // Join with separator: "JavaScript-is-awesome!"

// Template literals (backticks)
let firstName = "John";
let lastName = "Doe";
let fullName = `${firstName} ${lastName}`;  // "John Doe"
let multiline = `
    This is a
    multi-line
    string
`;

// ============================================
// 9. TYPE CONVERSION
// ============================================

// Converting to String
let num1 = 42;
let str1 = String(num1);           // "42"
let str2 = num1.toString();        // "42"
let str3 = "" + num1;              // "42" (implicit conversion)

// Converting to Number
let str = "123";
let num2 = Number(str);            // 123
let num3 = parseInt(str);          // 123 (integer)
let num4 = parseFloat("3.14");     // 3.14 (decimal)
let num5 = +str;                   // 123 (unary plus operator)

// Converting to Boolean
let bool1 = Boolean(1);            // true
let bool2 = Boolean(0);            // false
let bool3 = Boolean("text");       // true
let bool4 = Boolean("");           // false
let bool5 = Boolean(null);         // false
let bool6 = Boolean(undefined);    // false

// Falsy values: false, 0, "", null, undefined, NaN
// Everything else is truthy

// ============================================
// 10. ERROR HANDLING
// ============================================

// try-catch-finally
function divide(a, b) {
    try {
        if (b === 0) {
            throw new Error("Cannot divide by zero!");
        }
        return a / b;
    } catch (error) {
        console.log("Error: " + error.message);
        return null;
    } finally {
        console.log("Division operation completed");
    }
}

console.log(divide(10, 2));  // 5
console.log(divide(10, 0));  // null (with error message)

// ============================================
// 11. BASIC DOM MANIPULATION (for web pages)
// ============================================

// Note: These work in browsers with HTML documents

// Selecting elements
// let element = document.getElementById("myId");
// let elements = document.getElementsByClassName("myClass");
// let elements2 = document.getElementsByTagName("div");
// let element2 = document.querySelector(".myClass");  // First match
// let elements3 = document.querySelectorAll(".myClass"); // All matches

// Modifying content
// element.textContent = "New text";
// element.innerHTML = "<strong>Bold text</strong>";

// Modifying attributes
// element.setAttribute("class", "newClass");
// element.getAttribute("class");
// element.removeAttribute("class");

// Modifying styles
// element.style.color = "red";
// element.style.backgroundColor = "yellow";

// Adding event listeners
// element.addEventListener("click", function() {
//     console.log("Element clicked!");
// });

// ============================================
// 12. CONSOLE METHODS
// ============================================

console.log("Normal message");          // Regular output
console.error("Error message");         // Error (red in console)
console.warn("Warning message");        // Warning (yellow in console)
console.info("Info message");           // Information
console.table([{ name: "John", age: 30 }, { name: "Jane", age: 25 }]); // Table format
console.clear();                        // Clear console

// ============================================
// 13. TIMING FUNCTIONS
// ============================================

// setTimeout - execute once after delay
setTimeout(function() {
    console.log("Executed after 2 seconds");
}, 2000);

// setInterval - execute repeatedly at intervals
let intervalId = setInterval(function() {
    console.log("Executed every 3 seconds");
}, 3000);

// Clear interval
clearInterval(intervalId);

// ============================================
// 14. JSON (JavaScript Object Notation)
// ============================================

// Convert object to JSON string
let user = { name: "Alice", age: 25, city: "NYC" };
let jsonString = JSON.stringify(user);
console.log(jsonString); // '{"name":"Alice","age":25,"city":"NYC"}'

// Convert JSON string to object
let parsedUser = JSON.parse(jsonString);
console.log(parsedUser.name); // "Alice"

// ============================================
// 15. MATH OBJECT
// ============================================

console.log(Math.PI);                  // 3.141592653589793
console.log(Math.E);                   // 2.718281828459045

console.log(Math.round(4.7));          // 5 (round to nearest integer)
console.log(Math.ceil(4.1));           // 5 (round up)
console.log(Math.floor(4.9));          // 4 (round down)
console.log(Math.trunc(4.9));          // 4 (remove decimals)

console.log(Math.abs(-5));             // 5 (absolute value)
console.log(Math.pow(2, 3));           // 8 (2 to the power of 3)
console.log(Math.sqrt(16));            // 4 (square root)

console.log(Math.min(1, 5, 3));        // 1 (minimum)
console.log(Math.max(1, 5, 3));        // 5 (maximum)

console.log(Math.random());            // Random number between 0 and 1
console.log(Math.floor(Math.random() * 10)); // Random integer 0-9
console.log(Math.floor(Math.random() * 11)); // Random integer 0-10

// ============================================
// 16. DATE OBJECT
// ============================================

let now = new Date();                  // Current date and time
let specificDate = new Date(2024, 0, 1); // January 1, 2024 (months are 0-indexed)
let fromString = new Date("2024-01-01");

console.log(now.getFullYear());        // Year (e.g., 2024)
console.log(now.getMonth());           // Month (0-11)
console.log(now.getDate());            // Day of month (1-31)
console.log(now.getDay());             // Day of week (0-6, Sunday is 0)
console.log(now.getHours());           // Hours (0-23)
console.log(now.getMinutes());         // Minutes (0-59)
console.log(now.getSeconds());         // Seconds (0-59)
console.log(now.getMilliseconds());    // Milliseconds (0-999)
console.log(now.getTime());            // Milliseconds since Jan 1, 1970

// ============================================
// 17. DESTRUCTURING (ES6+)
// ============================================

// Array destructuring
let [first, second, third] = ["apple", "banana", "orange"];
console.log(first);  // "apple"
console.log(second); // "banana"

// Skipping elements
let [a, , c] = [1, 2, 3];
console.log(a); // 1
console.log(c); // 3

// Rest pattern
let [head, ...tail] = [1, 2, 3, 4, 5];
console.log(head); // 1
console.log(tail); // [2, 3, 4, 5]

// Object destructuring
let personObj = { name: "Bob", age: 30, city: "LA" };
let { name: personName, age: personAge } = personObj;
console.log(personName); // "Bob"
console.log(personAge);  // 30

// Shorter syntax when variable names match property names
let { name, age } = personObj;
console.log(name); // "Bob"

// Default values
let { name: n, country = "USA" } = personObj;
console.log(country); // "USA" (default value)

// ============================================
// 18. SPREAD OPERATOR (ES6+)
// ============================================

// Spread in arrays
let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];
let combined = [...arr1, ...arr2];     // [1, 2, 3, 4, 5, 6]
let copy = [...arr1];                  // Create a copy

// Spread in objects
let obj1 = { a: 1, b: 2 };
let obj2 = { c: 3, d: 4 };
let combinedObj = { ...obj1, ...obj2 }; // { a: 1, b: 2, c: 3, d: 4 }
let objCopy = { ...obj1 };              // Create a copy

// Spread in function calls
let nums = [1, 2, 3, 4, 5];
console.log(Math.max(...nums));         // 5 (spread array as arguments)

// ============================================
// 19. CLASSES (ES6+)
// ============================================

class Animal {
    // Constructor
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    
    // Method
    speak() {
        console.log(`${this.name} makes a sound`);
    }
    
    // Getter
    get info() {
        return `${this.name} is ${this.age} years old`;
    }
    
    // Setter
    set animalAge(age) {
        if (age > 0) {
            this.age = age;
        }
    }
    
    // Static method (called on class, not instance)
    static compare(animal1, animal2) {
        return animal1.age - animal2.age;
    }
}

// Creating instances
let dog = new Animal("Dog", 5);
dog.speak();                    // "Dog makes a sound"
console.log(dog.info);          // "Dog is 5 years old"
dog.animalAge = 6;              // Use setter
console.log(Animal.compare(dog, new Animal("Cat", 3))); // 3

// Inheritance
class Dog extends Animal {
    constructor(name, age, breed) {
        super(name, age);       // Call parent constructor
        this.breed = breed;
    }
    
    // Override parent method
    speak() {
        console.log(`${this.name} barks`);
    }
    
    // New method
    fetch() {
        console.log(`${this.name} fetches the ball`);
    }
}

let myDog = new Dog("Buddy", 3, "Golden Retriever");
myDog.speak();                  // "Buddy barks"
myDog.fetch();                  // "Buddy fetches the ball"

// ============================================
// 20. PRACTICAL EXAMPLES
// ============================================

// Example 1: FizzBuzz
function fizzBuzz(n) {
    for (let i = 1; i <= n; i++) {
        if (i % 15 === 0) {
            console.log("FizzBuzz");
        } else if (i % 3 === 0) {
            console.log("Fizz");
        } else if (i % 5 === 0) {
            console.log("Buzz");
        } else {
            console.log(i);
        }
    }
}

// Example 2: Find maximum in array
function findMax(arr) {
    let max = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }
    return max;
}

// Example 3: Reverse a string
function reverseString(str) {
    return str.split("").reverse().join("");
}

// Example 4: Check if palindrome
function isPalindrome(str) {
    let cleaned = str.toLowerCase().replace(/[^a-z0-9]/g, "");
    let reversed = cleaned.split("").reverse().join("");
    return cleaned === reversed;
}

// Example 5: Count character occurrences
function countCharacters(str) {
    let counts = {};
    for (let char of str) {
        counts[char] = (counts[char] || 0) + 1;
    }
    return counts;
}

// Example 6: Factorial
function factorial(n) {
    if (n <= 1) return 1;
    return n * factorial(n - 1);
}

// Example 7: Fibonacci sequence
function fibonacci(n) {
    if (n <= 1) return n;
    return fibonacci(n - 1) + fibonacci(n - 2);
}

// Example 8: Remove duplicates from array
function removeDuplicates(arr) {
    return [...new Set(arr)];
}

// Example 9: Sum of array
function sumArray(arr) {
    return arr.reduce((sum, num) => sum + num, 0);
}

// Example 10: Find even numbers
function findEvens(arr) {
    return arr.filter(num => num % 2 === 0);
}

// ============================================
// RUNNING EXAMPLES
// ============================================

console.log("=== FizzBuzz ===");
fizzBuzz(15);

console.log("\n=== Find Max ===");
console.log(findMax([3, 7, 2, 9, 1])); // 9

console.log("\n=== Reverse String ===");
console.log(reverseString("hello")); // "olleh"

console.log("\n=== Palindrome Check ===");
console.log(isPalindrome("A man, a plan, a canal: Panama")); // true

console.log("\n=== Count Characters ===");
console.log(countCharacters("hello")); // { h: 1, e: 1, l: 2, o: 1 }

console.log("\n=== Factorial ===");
console.log(factorial(5)); // 120

console.log("\n=== Fibonacci ===");
console.log(fibonacci(7)); // 13

console.log("\n=== Remove Duplicates ===");
console.log(removeDuplicates([1, 2, 2, 3, 3, 4])); // [1, 2, 3, 4]

console.log("\n=== Sum Array ===");
console.log(sumArray([1, 2, 3, 4, 5])); // 15

console.log("\n=== Find Evens ===");
console.log(findEvens([1, 2, 3, 4, 5, 6])); // [2, 4, 6]
