//* Arrays in JavaScript
// ?What is an Array in JavaScript?
// An array is a special type of variable that can hold multiple values in a single container.
// Instead of creating separate variables for each value, we use an array to store them in one place.
// ?Why Do We Need Arrays?
// ✅ Organized Data – Instead of creating multiple variables, we store values in one structured list.
// ✅ Easy Access – We can access any item using its index (position in the array).
// ✅ Better Performance – Arrays make it easy to loop through and process large amounts of data efficiently.

// Imagine a shopping list 🛒:
var shoppingList = ["Milk", "Eggs", "Bread", "Butter"];
//                    0        1        2       3
// Instead of using 4 separate variables, we use one array to make it simpler

// 1. Declaring a variable 'users' that contains an array
var users = ["Alice", "Bob", "Charlie"];
//              0       1       2
console.log("Initial users:", users); // Output: ["Alice", "Bob", "Charlie"]
// 2. Accessing values in an array
console.log("First user:", users[0]); // Output: "Alice"
console.log("Second user:", users[1]); // Output: "Bob"
// 3. Adding a new item to the array (at the end)
users.push("David");
console.log("After adding David:", users); // Output: ["Alice", "Bob", "Charlie", "David"]

// 4. Removing the last item from the array
users.pop();
console.log("After removing last user:", users); // Output: ["Alice", "Bob", "Charlie"]

// 5. Updating a value in the array
users[1] = "Ben"; // Changing "Bob" to "Ben"
console.log("After updating second user:", users); // Output: ["Alice", "Ben", "Charlie"]

// 6. Finding the length of the array
console.log("Total number of users:", users.length); // Output: 3

// ?How is an Array Different from Other Data Types?
// *Feature	                    Arrays	                        Other Data Types (Numbers, Strings, ...)
// Stores Multiple Values?	    ✅ Yes	                        ❌ No (stores a single value)
// Dynamic Size?	            ✅ Yes, can grow or shrink	    ❌ No (fixed for primitive types)
// Uses Index to Access Data?	✅ Yes	                        ❌ No

// For example, a string can Only holds a single name
var name = "Lina"; // Only holds a single name
// But an array can hold multiple names:
var students = ["Lina", "Adam", "Sara"];
