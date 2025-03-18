// The Traffic Light Decision
// Let's imagine a person called Adam is driving his car to school. At an intersection, he sees a traffic light. He knows he must decide what to do based on the light's color.
// !Add a question here: What should he do now??? when he will move?
// ! make it a story about a little boy and his mum
// Adam thinks:
// "If the light is green, I can go. If it's red, I must stop. If it's yellow, I should slow down!"

// To make this decision, we can use an if statement in JavaScript:
//* The "if" statement is used to make decisions in code, just like how we decide what to do based on the weather!
//* It checks a condition and runs a block of code only if the condition is TRUE.
/*
if (condition) {    
    //* what to do if condition is true
}
else if (2nd condition) { // can have 0 to many of these statements    
    //* what to do if 2nd condition is true
}
else {  // can have 0 or 1 of these statements    
    //* what to do if none of the previous conditions are met
}
*/
/*
 ?Why do we use "if" statements?
 * To control the flow of the program based on conditions.
 * To execute specific code only when needed.
 * To handle different situations dynamically.
*/
// ?what to do based on the light's color?
var trafficLight = "green"; // The current light color

if (trafficLight === "green") {
  console.log("Go! 🚗💨");
} else if (trafficLight === "yellow") {
  console.log("Slow down! 🟡");
} else if (trafficLight === "red") {
  console.log("Stop! 🛑");
} else {
  console.log("Invalid light color! ⚠️");
}
// ?What Happens?
// ✅ If the light is green, Adam drives.
// ✅ If the light is yellow, Adam slows down.
// ✅ If the light is red, There isstops.
// ✅ If there’s a mistake (like an unknown color), the program warns us!
