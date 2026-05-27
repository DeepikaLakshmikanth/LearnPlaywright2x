// Problem Description:
// Derived from JavaScript chapters 1 to 3: JavaScript basics, engine setup, comments, identifiers, literals, null, undefined, and equality. Create a standard label for a test run dashboard. Rules: - Trim the suite name. - Lowercase the environment. - Append build number as build-N. - Join the three parts with " | ". Starter code: ```js function buildJsBasicsRunLabel(suiteName, environment, buildNumber) { // write your code here } ``` Interview focus: JavaScript setup, identifiers, literals, typeof behavior, and clean QA naming.
// Input:buildJsBasicsRunLabel(" Smoke Suite ", " STAGING ", 42) Expected Output:"Smoke Suite | staging | build-42"
// Input:buildJsBasicsRunLabel("Regression", "PROD", 7)  Expected Output:"Regression | prod | build-7"

suiteName = " Smoke Suite ";
environment = " STAGING ";
buildNumber = 42;
buildJsBasicsRunLabel(suiteName, environment, buildNumber)
function buildJsBasicsRunLabel(suiteName, environment, buildNumber) {
    console.log(suiteName.trim() + " | " + environment.trim().toLowerCase() + " | build-" + buildNumber);
}