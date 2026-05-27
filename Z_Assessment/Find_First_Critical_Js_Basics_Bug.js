// Problem Description:
// Derived from JavaScript chapters 1 to 3: JavaScript basics, engine setup, comments, identifiers, literals, null, undefined, and equality. Find the first critical bug title from a bug list. Rules: - Each bug has title and severity. - Return the title of the first bug with severity "critical". - Return "No critical bug" when none exists. Starter code: ```js function findFirstCriticalJsBasicsBug(bugs) { // write your code here } ``` Interview focus: JavaScript setup, identifiers, literals, typeof behavior, and clean QA naming.

// Input: findFirstCriticalJsBasicsBug([{"title":"Typo","severity":"low"},{"title":"Login crash","severity":"critical"}])
// Expected Output:"Login crash"

// Input:findFirstCriticalJsBasicsBug([{"title":"Spacing issue","severity":"low"}])
// Expected Output:"No critical bug"


bugs = [{ "title": "Typo", "severity": "low" }, { "title": "Login crash", "severity": "critical" }];
findFirstCriticalJsBasicsBug(bugs)
function findFirstCriticalJsBasicsBug(bugs) {
    const bug = bugs.find((item) => item.severity === "critical");
    console.log(bug ? bug.title : "No critical bug");
}