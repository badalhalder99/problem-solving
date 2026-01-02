/*
────────────────────────────────────────────────────────────────────────────
PROBLEM STATEMENT (FizzBuzz)
────────────────────────────────────────────────────────────────────────────
Problem: Write a program that prints numbers from 1 to n?

Rules:
- If the number is divisible by 3 → print "Fizz"
- If the number is divisible by 5 → print "Buzz"
- If the number is divisible by BOTH 3 and 5 → print "FizzBuzz"
- Otherwise → print the number itself

This is one of the MOST IMPORTANT beginner interview problems.

────────────────────────────────────────────────────────────────────────────
EXAMPLE
────────────────────────────────────────────────────────────────────────────
Input:
n = 15

Output:
1
2
Fizz
4
Buzz
Fizz
7
8
Fizz
Buzz
11
Fizz
13
14
FizzBuzz

────────────────────────────────────────────────────────────────────────────
KEY IDEA (Very Easy)
────────────────────────────────────────────────────────────────────────────
We use the MODULO operator (%)

number % 3 === 0 → divisible by 3
number % 5 === 0 → divisible by 5

IMPORTANT:
Check divisible by BOTH (3 AND 5) FIRST
because:
15 is divisible by 3 AND 5

────────────────────────────────────────────────────────────────────────────
CORNER CASES TO HANDLE
────────────────────────────────────────────────────────────────────────────
1. n <= 0 → do nothing
2. n is not a number → do nothing

────────────────────────────────────────────────────────────────────────────
@params
────────────────────────────────────────────────────────────────────────────
@param {number} n - The maximum number to print up to

────────────────────────────────────────────────────────────────────────────
@returns
────────────────────────────────────────────────────────────────────────────
@return {void} - Prints output to console
*/


/*
────────────────────────────────────────────────────────────────────────────
SOLUTION (Beginner Friendly)
────────────────────────────────────────────────────────────────────────────
*/

const fizzBuzz = (n) => {

  if (typeof n !== "number" || n <= 0) return;

  for (let i = 1; i <= n; i++) {

    if (i % 3 === 0 && i % 5 === 0) {
      console.log("FizzBuzz");
    }
    else if (i % 3 === 0) {
      console.log("Fizz");
    }
    else if (i % 5 === 0) {
      console.log("Buzz");
    }
    else {
      console.log(i);
    }
  }
};

fizzBuzz(15);

/*
────────────────────────────────────────────────────────────────────────────
SIMPLIFIED VIA DIAGRAM
────────────────────────────────────────────────────────────────────────────

Number: 15

15 % 3 === 0  ✔
15 % 5 === 0  ✔

Both conditions true
→ Print "FizzBuzz"


Number: 9

9 % 3 === 0   ✔
9 % 5 === 0   ✖

Only divisible by 3
→ Print "Fizz"


Number: 10

10 % 3 === 0  ✖
10 % 5 === 0  ✔

Only divisible by 5
→ Print "Buzz"
*/


/*
────────────────────────────────────────────────────────────────────────────
SIMPLIFIED PSEUDOCODE
────────────────────────────────────────────────────────────────────────────
START
  for i from 1 to n
    if i divisible by 3 and 5
      print "FizzBuzz"
    else if i divisible by 3
      print "Fizz"
    else if i divisible by 5
      print "Buzz"
    else
      print i
END
*/

