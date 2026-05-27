// Problem Description:Derived from JavaScript chapters 1 to 3: JavaScript basics, engine setup, comments, identifiers, literals,
// null, undefined, and equality. Given a noisy list of topic labels, keep only supported chapter terms and remove duplicates.
// Rules: - Trim and lowercase each item. - Allow known aliases from the chapter group. - Return canonical topic keys in first-seen
// order. - Skip unsupported values. Starter code: ```js function filterSupportedJsBasicsTopics(topics) { // write your code here }
// // ``` Interview focus: JavaScript setup, identifiers, literals, typeof behavior, and clean QA naming.

// Input:filterSupportedJsBasicsTopics(["NODE"," v8 ","unknown"])   Expected Output:["node","v8"]
// Input:filterSupportedJsBasicsTopics(["node","runtime","node"])   Expected Output:["node"] Explanation:Removes duplicates



topics = ["NODE", " v8 ", "unknown"];
filterSupportedJsBasicsTopics(topics)
function filterSupportedJsBasicsTopics(topics) {
    const aliases = {
        "node": "node",
        "runtime": "node",
        "v8": "v8",
        "engine": "v8",
        "npm": "npm",
        "package-manager": "npm",
        "vscode": "vscode",
        "editor": "vscode"
    };
    const result = [];
    for (const topic of topics) {
        const canonical = aliases[String(topic ?? "").trim().toLowerCase()];
        if (canonical && !result.includes(canonical)) result.push(canonical);
    }
    console.log(result);
}