// --------------------------------------------------------
// /* Simple definitions */
// --------------------------------------------------------
//undefined--> A variable that has been declared but not assigned a value yet.
// JavaScript automatically assigns the value undefined to such variables.
//null--> A variable exists, but the developer explicitly assigns "no value" or "empty" to it.
// It is intentional absence of any value.

let userName; // This variable is declared but not initialized, so it is an undefined literal
console.log(userName); // Output: undefined
console.log(typeof userName); // Output: "undefined"

function greet() {


}
console.log(greet()); // Output: undefined

let profilepicture = null; // developer explicitly assigned the null literal
console.log(profilepicture); // Output: null
console.log(typeof profilepicture); // Output: "object" (this is a historical quirk in JavaScript)

let score = 100;
score = null; // developer explicitly assigned the null literal
console.log(score); // Output: null




//3. Key Differences (Summary Table)
// --------------------------------------------------------

/*
  | Feature              | undefined                     | null                           |
  |----------------------|-------------------------------|--------------------------------|
  | Meaning              | Not assigned yet              | Intentionally empty            |
  | Who sets it?         | JavaScript automatically      | Developer manually             |
  | Type                 | undefined                     | object (historical bug in JS)  |
  | == comparison        | null == undefined  -> true    |                                |
  | === comparison       | null === undefined -> false   |                                |
*/