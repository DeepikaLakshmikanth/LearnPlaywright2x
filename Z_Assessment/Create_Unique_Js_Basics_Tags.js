// Problem Description:
// Derived from JavaScript chapters 1 to 3: JavaScript basics, engine setup, comments, identifiers, literals, null, undefined, and equality. Normalize and deduplicate tags used for organizing tests. Rules: - Trim each tag. - Lowercase each tag. - Remove blank values. - Keep first-seen order. Starter code: ```js function createUniqueJsBasicsTags(tags) { // write your code here } ``` Interview focus: JavaScript setup, identifiers, literals, typeof behavior, and clean QA naming.
// Input:createUniqueJsBasicsTags([" Smoke ","smoke","Regression"])
// Expected Output:["smoke","regression"]

// Input:createUniqueJsBasicsTags([""," API ","   ","api"])
// Expected Output:["api"]

tags = ["", " API ", "   ", "api"];
createUniqueJsBasicsTags(tags)
function createUniqueJsBasicsTags(tags) {
    const result = [];
    for (const tag of tags) {
        const value = String(tag ?? "").trim().toLowerCase();
        if (value && !result.includes(value)) result.push(value);
    }
    console.log(result);
}