// Problem Description: Derived from JavaScript chapters 1 to 3: JavaScript basics, engine setup, comments, identifiers, literals, null, undefined,
// and equality. Count how many check result strings represent a pass. Rules: - Treat matching as case-insensitive. - A passing
//  item contains the word "pass". - Return only the count. Starter code: ```js function countPassingJsBasicsChecks(results)
//  { // write your code here } ``` Interview focus: JavaScript setup, identifiers, literals, typeof behavior, and clean QA naming.

// Input:countPassingJsBasicsChecks(["login-pass","api-fail","logout-pass"])   Expected Output:2
// Input:countPassingJsBasicsChecks(["SETUP PASS","CONFIG PASS"])   Expected Output:2

results = ["login-pass", "api-fail", "logout-pass"];
countPassingJsBasicsChecks(results)
function countPassingJsBasicsChecks(results) {
    console.log(results.filter((result) => String(result).toLowerCase().includes("pass")).length);
}