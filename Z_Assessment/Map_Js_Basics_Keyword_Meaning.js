// Problem Description: Derived from JavaScript chapters 1 to 3: JavaScript basics, engine setup, comments, identifiers, literals,
// null, undefined, and equality. Build a lookup function for important keywords or terms from this chapter group.
// Rules: - Normalize input by trimming and lowercasing. - Return the mapped meaning when the term exists.
//  - Return "unknown" for unmapped terms. Starter code: ```js function getJsBasicsKeywordMeaning(term)
//  { // write your code here } ``` Interview focus: JavaScript setup, identifiers, literals, typeof behavior, and clean QA naming.


// Input:getJsBasicsKeywordMeaning("NODE")     Expected Output:"runtime"
// Input:getJsBasicsKeywordMeaning(" v8 ")     Expected Output:"engine"

term = "NODE";
getJsBasicsKeywordMeaning(term)
function getJsBasicsKeywordMeaning(term) {
    const meanings = {
        "node": "runtime",
        "v8": "engine",
        "npm": "package-manager",
        "vscode": "editor"
    };
    console.log(meanings[String(term ?? "").trim().toLowerCase()] || "unknown");
}