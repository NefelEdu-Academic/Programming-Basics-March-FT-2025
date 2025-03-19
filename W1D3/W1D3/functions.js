// * Imagine a Coffee Machine ☕
// --------------------------------
// Sarah works at a café, and every morning she makes coffee for customers.
// But she notices that making coffee step by step takes a lot of time!
// Let's look at how she does it manually:

console.log("Boil water...");
console.log("Add coffee grounds...");
console.log("Pour hot water into the cup...");
console.log("Stir well...");
console.log("Coffee is ready! ☕");

console.log("Boil water...");
console.log("Add coffee grounds...");
console.log("Pour hot water into the cup...");
console.log("Stir well...");
console.log("Coffee is ready! ☕");

// *Problem 1: Repetition
// Sarah has to repeat the same steps over and over again for each customer.
// This wastes time and makes the code long and messy.

// *Problem 2: No flexibility
// If a customer wants tea instead of coffee, Sarah would have to write a whole new set of steps!
// !solution: she need a machine
// --------------------------------
// 🛠️ Solution: Using Functions (Machine)
// --------------------------------
// Instead of repeating the same steps every time, Sarah decides to use a function!
//? What is a function?
// A function is a set of instructions that tells the computer what to do.
// We use functions to organize our code and make it reusable.
// For this example the function will make coffee whenever it's needed, without rewriting everything.
//? How do we create a function?
// We use the 'function' keyword, followed by a name and parentheses ()
// Then, we write the instructions inside curly braces {}
function makeCoffee() {
  console.log("Boil water...");
  console.log("Add coffee grounds...");
  console.log("Pour hot water into the cup...");
  console.log("Stir well...");
  console.log("Coffee is ready! ☕");
}
// Now, whenever Sarah needs to make coffee, she just calls (or we can say invoke) the function!
// ?How do we call (or invoke) a function?
// We write the function name followed by parentheses:
makeCoffee();
makeCoffee(); // No need to rewrite the steps again!

// ✅ The function makes the code shorter and easier to read!
// ✅ Sarah can now make coffee with just one line instead of repeating all steps manually.

// --------------------------------
// 🌟 Making the Function More Flexible
// --------------------------------
// ?What if a customer wants tea instead?
// We can use **parameters** to let Sarah choose what to make!
//? What are parameters?
// Parameters are special values we give to a function to use inside.
// They make functions more flexible and useful.
function makeDrink(drinkType) {
  console.log("Boil water...");
  console.log("Add " + drinkType + "...");
  console.log("Pour hot water into the cup...");
  console.log("Stir well...");
  console.log(drinkType + " is ready! ☕");
}

// Now Sarah can make different drinks using the same function!
// Calling the function and giving it different values
makeDrink("coffee");
makeDrink("tea");
makeDrink("hot chocolate");

// ✅ The function now works for any drink, not just coffee!
// ✅ It's reusable, saving time and effort!

// --------------------------------
// 🌟 Using Return Values
// --------------------------------
// Instead of just printing the steps, what if Sarah wants the machine to give her a message when the drink is ready?

function prepareDrink(drinkType) {
  return drinkType + " is ready! ☕";
}

// Store the returned value in a variable
var message1 = prepareDrink("coffee");
console.log(message1); // Prints: "coffee is ready! ☕"

var message2 = prepareDrink("green tea");
console.log(message2); // Prints: "green tea is ready! ☕"

// ✅ Now Sarah can save the drink message and use it anywhere!
// ✅ The function does the work, and she just gets the result.

// --------------------------------
// 🔥 Summary
// --------------------------------
// Without functions:
// ❌ Repeating the same steps again and again.
// ❌ Hard to change the process for different drinks.
// ❌ Code is long and messy.

// With functions:
// ✅ Code is reusable – we don’t repeat the same steps.
// ✅ We can make different drinks easily by passing parameters.
// ✅ The function returns useful information that can be used elsewhere.
