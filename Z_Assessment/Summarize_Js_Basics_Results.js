// Problem Description:Derived from JavaScript chapters 1 to 3: JavaScript basics, engine setup, comments, identifiers, literals, null, undefined, and equality. Build a compact summary object from test result labels. Rules: - Count total items. - Count items containing pass, fail, and skip. - Return an object with total, passed, failed, skipped. Starter code: ```js function summarizeJsBasicsResults(results) { // write your code here } ``` Interview focus: JavaScript setup, identifiers, literals, typeof behavior, and clean QA naming.

// Input:summarizeJsBasicsResults(["login-pass","api-fail","profile-skip"])
// Expected Output:{"total":3,"passed":1,"failed":1,"skipped":1}

// Input:summarizeJsBasicsResults([])  Expected Output:{"total":0,"passed":0,"failed":0,"skipped":0}

results = ["login-pass", "api-fail", "profile-skip"];
summarizeJsBasicsResults(results)
function summarizeJsBasicsResults(results) {
    const normalized = results.map((result) => String(result).toLowerCase());
    console.log({
        total: results.length,
        passed: normalized.filter((result) => result.includes("pass")).length,
        failed: normalized.filter((result) => result.includes("fail")).length,
        skipped: normalized.filter((result) => result.includes("skip")).length,
    });
}