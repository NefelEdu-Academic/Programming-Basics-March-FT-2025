//🧑‍🍳 **Assignment: Sarah’s Coffee Shop Orders**
//🎯 Objective:
// Help Sarah process multiple drink orders using JavaScript **functions, arrays, for loops, and conditions**!

//📝 **Instructions:**

// 1. Sarah receives a list of customer drink orders in an array.
// 2. She wants to make each drink **only if the drink is available** in her café.
// 3. For each valid order, she wants to:
//    - Prepare the drink.
//    - Get a message using `return`.
//    - Print the message: `"Serving: [drink] is ready! ☕"`
// 4. If the drink is **not available**, print: `"Sorry, we don't have [drink]."`

// 📋 Starter Code:
// Available drinks in Sarah's café
var availableDrinks = ["coffee", "tea", "hot chocolate", "latte", "espresso"];

// Customer orders
var customerOrders = ["coffee", "green tea", "espresso", "smoothie", "tea"];

// Function to prepare the drink and return a message
function prepareDrink(drinkType) {
  return drinkType + " is ready! ☕";
}

// TODO: Use a for loop to go through customerOrders
// For each order:
// - Check if the drink is available (hint: use if condition and availableDrinks.includes())
// - If yes, prepare the drink and print the message
// - If not, print "Sorry, we don't have [drink]."

// Example output:
// Serving: coffee is ready! ☕
// Sorry, we don't have green tea.
// Serving: espresso is ready! ☕
// Sorry, we don't have smoothie.
// Serving: tea is ready! ☕

//💡 Bonus Challenge:
// Can you **count** how many drinks Sarah served at the end and print:
// `Total drinks served: X`

// !Solution
// Available drinks in Sarah's café
var availableDrinks = ["coffee", "tea", "hot chocolate", "latte", "espresso"];

// Customer orders
var customerOrders = ["coffee", "green tea", "espresso", "smoothie", "tea"];

// Function to prepare the drink and return a message
function prepareDrink(drinkType) {
  return drinkType + " is ready! ☕";
}

// Counter for drinks served
var drinksServed = 0;

// Loop through each customer order
for (var i = 0; i < customerOrders.length; i++) {
  var order = customerOrders[i];

  // Check if the drink is available
  if (availableDrinks.includes(order)) {
    var message = prepareDrink(order);
    console.log("Serving: " + message);
    drinksServed++; // Increase the counter
  } else {
    console.log("Sorry, we don't have " + order + ".");
  }
}

// Print total drinks served
console.log("Total drinks served: " + drinksServed);
