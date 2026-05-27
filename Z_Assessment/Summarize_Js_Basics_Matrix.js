// Problem Description:
// Derived from JavaScript chapters 1 to 3: JavaScript basics, engine setup, comments, identifiers, literals, null, undefined, and equality. Summarize a two-dimensional matrix of suite results. Rules: - The input is an array of arrays. - Each cell is a result string. - Count total, passed, failed, and collect failedCases. Starter code: ```js function summarizeJsBasicsMatrix(matrix) { // write your code here } ``` Interview focus: JavaScript setup, identifiers, literals, typeof behavior, and clean QA naming.

// Input:summarizeJsBasicsMatrix([["login-pass"],["checkout-fail"]])
// Expected Output:{"total":2,"passed":1,"failed":1,"failedCases":["checkout-fail"]}

// Input:summarizeJsBasicsMatrix([["a-pass","b-pass"],["c-pass"]])
// Expected Output:{"total":3,"passed":3,"failed":0,"failedCases":[]}

matrix = [["a-pass", "b-pass"], ["c-pass"]];
summarizeJsBasicsMatrix(matrix)
function summarizeJsBasicsMatrix(matrix) {
    const flat = matrix.flat();
    const failedCases = flat.filter((item) => String(item).toLowerCase().includes("fail"));
    console.log({
        total: flat.length,
        passed: flat.filter((item) => String(item).toLowerCase().includes("pass")).length,
        failed: failedCases.length,
        failedCases,
    });
}