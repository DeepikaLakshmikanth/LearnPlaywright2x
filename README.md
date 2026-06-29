# LearnPlaywright2x

This repository contains Playwright learning exercises and JavaScript concepts organized by chapter.

## Structure

- `chapter_01_Basics/` - Basic Playwright and JavaScript examples
- `chapter_02_Javascript_Concepts/` - JavaScript fundamentals and concepts
- `chapter_03_Identifier_Literals/` - Identifier and literal rules in JavaScript
- `chapter_04_Javascript_Concept/` - Advanced JavaScript concepts (var, let, const, hoisting, scope)
- `chapter_05_Literal/` - JavaScript literals (strings, template literals, null, undefined)
- `chapter_06_Operator/` - JavaScript operators (arithmetic, assignment, increment/decrement, comparison, logical)
- `chapter_07_if_else/` - Conditional statements with if, else if, and else
- `chapter_08_switch_statement/` - Switch statements and case handling
- `chapter_09_UserInput/` - User input examples and prompt handling
- `chapter_10_Loop/` - Loop constructs and iteration patterns in JavaScript
- `chapter_11_Arrays_Functions/` - Array methods and functional programming patterns in JavaScript
- `chapter_12_Functions/` - JavaScript functions, arrow functions, IIFE, default/rest/spread parameters, callbacks, scope, closures, higher-order functions, and pure functions
- `Chapter_13_String/` - String operations, searching, substring, transform, and string property examples
- `chapter_14_Objects/` - JavaScript objects, object properties, methods, getter/setter, destructuring, and spread operator
- `chapter_15_2D_Array/` - Two-dimensional arrays, matrix traversal, and data-driven examples
- `chapter_16_Callback/` - Callback functions, asynchronous patterns, and callback parameter handling
- `chapter_17_Promise/` - Promise examples and asynchronous flow control in JavaScript
- `chapter_18_Async_await/` - Async/await patterns and modern asynchronous code examples
- `chapter_19_Playwright_Basic/` - Basic Playwright test examples and automation scripts
- `chapter_20_Export_Import/` - JavaScript module export/import examples and utilities
- `chapter_20_TypeScript_Basic/` - TypeScript basics examples and JavaScript practice files
- `chapter_21_Objects_Class/` - Object-oriented JavaScript with classes, constructors, and methods
- `chapter_22_Encapsulation/` - Encapsulation examples using private/public members and class design
- `chapter_23_Inheritance/` - Inheritance examples, single and multiple style patterns, and class hierarchies
- `chapter_24_Polymorphism/` - Polymorphism examples and method overriding in OOP
- `chapter_25_OOPS_IQ/` - Object-oriented programming quiz and practice examples
- `chapter_26_TypeScript/` - Advanced TypeScript examples and interface practice files
- `chapter_27_TypeScript_Interface/` - TypeScript interface examples and readonly type patterns
- `Z_Assessment/` - Assessment exercises and project practice files

## Notes

This repo is used for learning and practicing Playwright automation along with JavaScript language concepts.

## Usage

- Run JavaScript examples with Node.js: `node <chapter>/<file>.js`
- Use Node.js 16+ for best compatibility.
- If you want to run Playwright tests, install dependencies and run from the project root:
  - `npm install`
  - `npx playwright test`

## Contribution

- Add new practice files to the appropriate chapter folder.
- Keep chapter folders organized by topic and filename.
- Commit descriptive messages for new exercises and examples.

## Playwright Tips

- Run Playwright tests from the project root or the specific chapter folder containing `playwright.config.*` and `tests/`.
- Install dependencies before running tests: `npm install`.
- Run a single test in headed mode from the project root:
  - `npx playwright test tests/example.spec.ts --headed`
- Common PowerShell pitfall: avoid using `cd /d` in PowerShell; instead use `Set-Location -Path 'D:\path\to\folder'` or open the terminal in the target folder.

If you want this README note expanded with more examples or links to Playwright docs, tell me what to add.
