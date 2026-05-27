// Problem Description:Derived from JavaScript chapters 1 to 3: JavaScript basics, engine setup, comments, identifiers, literals, 
// null, undefined, and equality. Create a QA-friendly score classifier for practice readiness. Rules: - 90 and 
// above => EXCELLENT. - 75 to 89 => GOOD. - 50 to 74 => NEEDS_PRACTICE. - Below 50 => REVISIT. Starter code: 
// ```js function classifyJsBasicsScore(score) { // write your code here } ``` 
// // Interview focus: JavaScript setup, identifiers, literals, typeof behavior, and clean QA naming.

// Input:classifyJsBasicsScore(95)    Expected Output:"EXCELLENT"
// Input:classifyJsBasicsScore(75)    Expected Output:"GOOD"
score = "90";
classifyJsBasicsScore(score)
function classifyJsBasicsScore(score) {
    if (score >= 90) console.log("EXCELLENT");
    else if (score >= 75) console.log("GOOD");
    else if (score >= 50) console.log("NEEDS_PRACTICE");
    else console.log("REVISIT");
}