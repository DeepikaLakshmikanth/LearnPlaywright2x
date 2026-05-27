// Problem Description:
// Derived from JavaScript chapters 1 to 3: JavaScript basics, engine setup, comments, identifiers, literals, null, undefined, and equality. Convert a list of tasks into a numbered checklist. Rules: - Keep the original task text after trimming. - Number items from 1. - Append " - TODO" to each item. - Skip blank values. Starter code: ```js function buildJsBasicsChecklist(items) { // write your code here } ``` Interview focus: JavaScript setup, identifiers, literals, typeof behavior, and clean QA naming.

// Input:buildJsBasicsChecklist(["Install Node","Create GitHub repo"])
// Expected Output:["1. Install Node - TODO","2. Create GitHub repo - TODO"]
// Input:buildJsBasicsChecklist(["Practice switch"," ","Push code"])
// Expected Output:["1. Practice switch - TODO","2. Push code - TODO"]

buildJsBasicsChecklist(["Install Node", "Create GitHub repo"])
function buildJsBasicsChecklist(items) {
    console.log(items
        .map((item) => String(item ?? "").trim())
        .filter(Boolean)
        .map((item, index) => (index + 1) + ". " + item + " - TODO"));
}