/**
 * JavaScript `every()` Method
 *
 * Description:
 * The `every()` method tests whether **all elements in an array pass a given condition**.
 * - Returns true if all elements satisfy the condition, otherwise false.
 * - Stops checking as soon as one element fails (short-circuit).
 * - Does not mutate the original array.
 * - Returns true for an empty array by default.
 *
 * Syntax:
 * array.every(callback(element, index, array))
 *
 * Parameters:
 *   - element: The current element being processed.
 *   - index: Index of the current element (optional).
 *   - array: The array being traversed (optional).
 *
 * Return value:
 *   - Boolean: true if all elements pass the test, false otherwise.
 *
 * Key Notes:
 * 1. Short-circuits immediately if one element fails the test.
 * 2. Useful for validating data, checking conditions on arrays, and complex data structures.
 * 3. Does not change the original array.
 */

/*--------------------------------------------
  Example 1: Simple numbers check
--------------------------------------------*/

/**
 * Checks if all numbers in an array are positive.
 *
 * Line-by-line explanation:
 * 1. function areAllPositive(arr) {
 *      - Declares a function `areAllPositive` taking an array `arr`.
 * 2.   return arr.every(num => num > 0);
 *      - `arr.every()` iterates over each number `num`.
 *      - Checks if `num > 0`.
 *      - Returns false immediately if any number <= 0.
 * 3. }
 *
 * @param {Array<number>} arr - Array of numbers to check.
 * @returns {boolean} - True if all numbers are positive, else false.
 */
function areAllPositive(arr) {
  return arr.every(num => num > 0);
}

// Test cases
console.log(areAllPositive([1, 2, 3, 4])); // true
console.log(areAllPositive([1, -2, 3]));   // false

/*--------------------------------------------
  Example 2: Strings starting with a specific letter
--------------------------------------------*/

/**
 * Checks if all strings in an array start with the letter "A".
 *
 * Line-by-line explanation:
 * 1. function allStartWithA(arr) {
 *      - Declares a function taking an array of strings `arr`.
 * 2.   return arr.every(word => word[0].toUpperCase() === 'A');
 *      - Iterates over each `word`.
 *      - Converts first character to uppercase and checks if it is 'A'.
 *      - Returns false if any word fails this condition.
 * 3. }
 *
 * @param {Array<string>} arr - Array of strings to check.
 * @returns {boolean} - True if all strings start with 'A', else false.
 */
function allStartWithA(arr) {
  return arr.every(word => word[0].toUpperCase() === 'A');
}

// Test cases
console.log(allStartWithA(["Apple", "Ant", "Arrow"])); // true
console.log(allStartWithA(["Apple", "Banana", "Arrow"])); // false

/*--------------------------------------------
  Example 3: Complex objects — validating users
--------------------------------------------*/

/**
 * Checks whether all users in an array are adults (age >= 18)
 * and have valid emails (contain '@').
 *
 * Line-by-line explanation:
 * 1. function validateUsers(users) {
 *      - Declares a function `validateUsers` accepting an array of user objects.
 * 2.   return users.every(user => {
 *      - Iterates over each `user` object.
 * 3.     const isAdult = user.age >= 18;
 *      - Checks if user's age is >= 18.
 * 4.     const hasValidEmail = user.email.includes("@");
 *      - Checks if user's email contains '@'.
 * 5.     return isAdult && hasValidEmail;
 *      - Returns true only if both conditions are true.
 *      - Stops iteration immediately if false.
 * 6.   });
 * 7. }
 *
 * @param {Array<{name: string, age: number, email: string}>} users - Array of user objects.
 * @returns {boolean} - True if all users are adults and have valid emails.
 */
function validateUsers(users) {
  return users.every(user => {
    const isAdult = user.age >= 18;
    const hasValidEmail = user.email.includes("@");
    return isAdult && hasValidEmail;
  });
}

// Test cases
const users1 = [
  { name: "Alice", age: 22, email: "alice@example.com" },
  { name: "Bob", age: 30, email: "bob@example.com" },
  { name: "Charlie", age: 18, email: "charlie@example.com" }
];

const users2 = [
  { name: "Alice", age: 22, email: "alice@example.com" },
  { name: "Bob", age: 17, email: "bobexample.com" }, // underage & invalid email
  { name: "Charlie", age: 16, email: "charlie@example.com" }
];

console.log(validateUsers(users1)); // true
console.log(validateUsers(users2)); // false

/*--------------------------------------------
  Interview Notes:
--------------------------------------------
1. Use `every()` to **validate all elements** in arrays or object arrays.
2. Short-circuiting improves performance — stops at first failure.
3. Non-mutating method — original array stays unchanged.
4. Can be used with numbers, strings, objects, nested arrays.
5. Common interview examples:
   - Check all numbers positive
   - Check all strings start with a letter
   - Validate objects (age, email, required properties)
   - Check all values in a matrix or nested array meet a condition
*/
