// *This is a JavaScript File, we can only write a JavaScript code in this file
// *To the computer, comments are just ignored text that do not affect how the program runs. They are meant only for humans to understand the code better.
// This is a one line comment in JavaScript
/*
this is a multi-line comment in JavaScript
* Why Use Comments in Code?
--> Comments help make your code easier to understand by explaining what it does. They are useful for:
    - Clarifying complex logic for yourself and others.
    - Making notes to remember why you wrote certain code.
    - Temporarily disabling code without deleting it.
* Download "Better Comments" by "Aaron Bond" for making comments more readable and organized by using different colors and styles.
*/

// ?What are variables?
/*
 * Variables are like containers that store data in your JavaScript programs.
 * They allow you to store, manipulate, and reuse information efficiently.
 * Instead of writing the same value multiple times,
 * you can assign it to a variable and use it whenever needed.
 */
// ?Why do we use variables?
/*
 *✅ Avoid Repetition: Store values once and reuse them.
 *✅ Improve Readability: Variables make code easier to understand.
 *✅ Enable Dynamic Changes: Easily update values without changing multiple places in your code.
 */

// ?How can we declare a variable in JavaScript?
var age;

// ?How can we add a value in this variable?
age = 25;

// *Best Practices for Naming Variables in JavaScript
/*
 * Use meaningful names:        ✅ userName (Good)                     ❌ x (Bad)
 * Follow camelCase convention: ✅ totalPrice (Good)                   ❌ Total_price (Bad)
 * Avoid reserved keywords:     ✅ var numberOfPages = 100; (Good)     ❌ var var = 100; (Invalid)
 */

// ?What can we add as values in variables in JavaScript?
// *Data types:

// String: Represent text
var userName = "Joe";
// Number: Represent numerical values
var age = 25;
// Boolean: Represent truth values, either true or false.
var underAge = false;
//Null: Represents an intentional absence of any value. It means "nothing" or "empty". It is often used when you want to reset a variable.
var exist = null;
//Undefined: Represents a variable that has been declared but has not been assigned a value.
var totalPrice;
console.log(totalPrice); // Output: undefined

// Arrays: Ordered collections of values
var hobbies = ["football", "gaming", "tennis"];

// *print messages or values to the console or the terminal
// *this can help developers check values, debug code, and understand how their program is working
console.log(userName);

// Order of Operations in JavaScript (PEMDAS)
// PEMDAS stands for:
// P - Parentheses ()
// E - Exponents ** (like squared or cubed numbers)
// M - Multiplication * and D - Division /
// A - Addition + and S - Subtraction -

// Example 1: Parentheses first
var result1 = (2 + 3) * 4; // (5) * 4 = 20
console.log("Result 1:", result1);

// Example 2: Exponents next
var result2 = 2 ** 3 + 4; // (2^3) + 4 = 8 + 4 = 12
console.log("Result 2:", result2);

// Example 3: Multiplication and Division (left to right)
var result3 = (10 / 2) * 5; // (10/2) * 5 = 5 * 5 = 25
console.log("Result 3:", result3);

// Example 4: Addition and Subtraction (left to right)
var result4 = 10 - 5 + 3; // (10 - 5) + 3 = 5 + 3 = 8
console.log("Result 4:", result4);

// Example 5: All operations together
var result5 = (2 + 3) ** 2 / 5 + 4 - 1; // (5^2) / 5 + 4 - 1 = 25 / 5 + 4 - 1 = 5 + 4 - 1 = 8
console.log("Result 5:", result5);

// Remember: Always solve inside parentheses first, then follow PEMDAS!
