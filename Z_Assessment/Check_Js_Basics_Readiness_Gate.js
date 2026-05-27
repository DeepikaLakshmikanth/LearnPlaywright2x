// Problem Description:
// Derived from JavaScript chapters 1 to 3: JavaScript basics, engine setup, comments, identifiers, literals, null, undefined, and equality. Create a small readiness gate for students before they move to the next practice step. Rules: - Return READY only when all three flags are true. - Return BLOCKED otherwise. - Do not coerce strings like "true"; use boolean values. Starter code: ```js function checkJsBasicsReadinessGate(hasSetup, hasPractice, hasNotes) { // write your code here } ``` Interview focus: JavaScript setup, identifiers, literals, typeof behavior, and clean QA naming.

// Input:checkJsBasicsReadinessGate(true, true, true)
// Expected Output:"READY"

// Input:checkJsBasicsReadinessGate(true, false, true)
// Expected Output:"BLOCKED"
checkJsBasicsReadinessGate(true, false, true);


function checkJsBasicsReadinessGate(hasSetup, hasPractice, hasNotes) {
    console.log(hasSetup === true && hasPractice === true && hasNotes === true ? "READY" : "BLOCKED");
}