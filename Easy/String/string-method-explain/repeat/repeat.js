/*
What is String.prototype.repeat()?

repeat() is a JavaScript string method that lets you repeat a string multiple times.

Syntax
string.repeat(count)

string → the original string
count → how many times you want to repeat it (must be 0 or a positive number)

Simple Example
const text = "Hi ";
console.log(text.repeat(3));

Output
Hi Hi Hi

👉 "Hi " is repeated 3 times.

Another Example
"*".repeat(5);

Output
*****

Super useful for separators, loading bars, stars ⭐, etc.

Real-Life Use Cases

1️⃣ Creating a divider line
console.log("-".repeat(20));

--------------------

2️⃣ Padding text (basic way)
const level = 3;
console.log("Level: " + "#".repeat(level));

Level: ###

3️⃣ Making a simple pattern
for (let i = 1; i <= 5; i++) {
  console.log("*".repeat(i));
}

Output:
*
**
***
****
*****

Important Rules ⚠️

❌ Negative numbers are NOT allowed
"hi".repeat(-1); // ❌ Error

❌ Infinity is NOT allowed
"hi".repeat(Infinity); // ❌ Error

✅ Zero is allowed
"hi".repeat(0);

Output:
""   // empty string

Common Beginner Mistake
repeat("3"); // ❌ Wrong

Correct:
"hi".repeat(3); // ✅

repeat() is called on the string, not by itself.

Quick Summary 🧠
- repeat() repeats a string
- Takes one number as input
- Returns a new string
- Original string stays unchanged
*/
