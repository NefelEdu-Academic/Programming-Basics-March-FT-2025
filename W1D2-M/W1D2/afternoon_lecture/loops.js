// *LOOPS
// Let's imagine now Lina that works at a library and is responsible for checking in returned books.
// One day, 10 students return books at the same time!
// As each student steps forward, Lina greets them with a warm smile and says,
// "Hi there! Are you returning a book today? Let me check it in for you!"
// Basic example of a for loop:
// Let's print this message to welcome all 10 students:

console.log(
  "Hi there! Are you returning a book today? Let me check it in for you!"
);
console.log(
  "Hi there! Are you returning a book today? Let me check it in for you!"
);
console.log(
  "Hi there! Are you returning a book today? Let me check it in for you!"
);
console.log(
  "Hi there! Are you returning a book today? Let me check it in for you!"
);
console.log(
  "Hi there! Are you returning a book today? Let me check it in for you!"
);
console.log(
  "Hi there! Are you returning a book today? Let me check it in for you!"
);
console.log(
  "Hi there! Are you returning a book today? Let me check it in for you!"
);
console.log(
  "Hi there! Are you returning a book today? Let me check it in for you!"
);
console.log(
  "Hi there! Are you returning a book today? Let me check it in for you!"
);
console.log(
  "Hi there! Are you returning a book today? Let me check it in for you!"
);
// Instead of writing the same instruction many times, we use a loop to do it for us!
// ?Why do we use for loops?
// For loops help us repeat actions multiple times without writing the same code again and again.
//      start     stop  step
for (var i = 1; i <= 10; i++) {
  console.log(
    "Hi there! Are you returning a book today? Let me check it in for you!"
  );
}
// 💡 Now Lina thinks:
// "I could check each book one by one, but that would take forever! There must be a faster way."

// Instead of manually checking each book, Lina decides to use a loop to process all books automatically!

// 🔍 Solution Using a Loop
// Lina makes a list of books and tells the system to loop through each book and mark it as returned.
// *For Loop
// !insist on 3ss with examples
var returnedBooks = ["Math Book", "Science Book", "History Book", "Art Book"];
//      start        stop                 step
for (var i = 0; i < returnedBooks.length; i++) {
  console.log(returnedBooks[i] + " has been checked in. ✅");
}
// ?What Happens?
// ✅ Instead of checking books one by one, the loop automates the process.
// ✅ No mistakes! Every book is marked as "returned" without forgetting any.
// ✅ Saves time! The process runs in seconds instead of minutes.

// *Now, let's try another way to loop using 'for...of'.
// This loop is even simpler and easier to read!
console.log("Using for...of loop:");
for (var book of returnedBooks) {
  console.log(book + " has been checked in. ✅");
}

// *WHILE LOOP
// Just when Lina thinks she’s done for the day, she notices a student standing near the counter looking worried.
// "Excuse me, I lost my library card, and I can't remember my ID number," the student says.

// Lina reassures them, "No worries! I can check the system and keep searching until I find your correct ID."

var studentID = 1000; // Start checking from this ID
const correctID = 1005; // The student's actual ID

while (studentID !== correctID) {
  console.log("Checking ID: " + studentID); // Simulating checking each ID
  studentID++; // Move to the next ID
}

console.log("Found it! The correct ID is: " + studentID + ". ✅");

// ✅ The while loop helps Lina keep searching until she finds the correct ID.
// ✅ Instead of manually checking each ID one by one, the loop does it automatically!
// ✅ This makes the process faster and more efficient.

// ?Why use a while loop?
// We use while loops when we don’t know exactly how many times we need to repeat something.
//  - A while loop repeats a task while a condition is true.
//  - It’s useful when we don’t know how many times we need to repeat something.
//! - Always make sure the condition will eventually become false, or the loop will never stop! (infinite loop ⚠️)
