// ============================================================
// Topic: Single Quote vs Double Quote vs Backtick in JS
// File: 29_Backtick_single_double.js
// ============================================================

/*
  ONE SIMPLE EXPLANATION:

  Single ('') and Double ("") quotes are almost the same — both create simple strings.
  Backticks (``) are special — they allow variables inside (${}) and multi-line text.

  Think of it like this:
  - '' or "" -> Plain text
  - ``       -> Smart text (can inject values & line breaks)
*/

// --------------------------------------------------------
// 1. Single Quotes
// --------------------------------------------------------

let singleQuoteString = 'Hello, World! from single quotes';
console.log(singleQuoteString); // Hello, World!

// --------------------------------------------------------
// 2. Double Quotes
// --------------------------------------------------------
let doubleQuoteString = "Hello, World! from double quotes";
console.log(doubleQuoteString); // Hello, World!

// --------------------------------------------------------
// 3. Backticks (Template Literals)
// --------------------------------------------------------

let name = "Pramod";
let age = 30;

let greeting = `My name is ${name} and I am ${age} years old.`;
console.log(`Backtick with the variable: ${greeting}`); // My name is Pramod and I am 30 years old.

let multiline = `
Line 1 
Line 2
Line 3
`;
console.log(`Backtick with multiline: ${multiline}`);

//Expression inside backticks
let sum = ` The sum of 5 + 10 is ${5 + 10}`;
console.log(`Backtick with expression: ${sum}`);


// --------------------------------------------------------
// 4. Quick Comparison
// --------------------------------------------------------

/*
  Feature              |  '' or ""  |  ``
  ---------------------|------------|------------
  Simple text          |     ✓      |   ✓
  Variable injection   |     ✗      |   ✓  -> ${var}
  Multi-line           |     ✗      |   ✓
  Expression inside    |     ✗      |   ✓  -> ${a + b}
*/

// --------------------------------------------------------
// 5. Real Example
// --------------------------------------------------------
let product = "Laptop";
let price = 999.99;

let oldway = "The " + product + "costs " + price + "rupees.";

//new way with backticks
let newway = `The ${product} costs ${price} rupees.`;

console.log(`New way: ${newway}`); // The Laptop costs 999.99 rupees.