// Problem Description:
// Derived from JavaScript chapters 1 to 3: JavaScript basics, engine setup, comments, identifiers, literals, null, undefined, and equality. Calculate a simple weighted practice score. Rules: - Each passed item gives 2 points. - Each failed item subtracts 1 point. - Skipped items are 0 points. - Return the final number. Starter code: ```js function calculateJsBasicsWeightedScore(passed, failed, skipped) { // write your code here } ``` Interview focus: JavaScript setup, identifiers, literals, typeof behavior, and clean QA naming.

// Input:calculateJsBasicsWeightedScore(5, 2, 1)         Expected Output:8
// Input:calculateJsBasicsWeightedScore(3, 0, 0)         Expected Output:6
calculateJsBasicsWeightedScore(5, 2, 1);
function calculateJsBasicsWeightedScore(passed, failed, skipped) {
    console.log(passed * 2 - failed + skipped * 0);
}