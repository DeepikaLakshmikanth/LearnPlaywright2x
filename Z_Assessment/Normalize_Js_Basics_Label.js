// Problem Description:Derived from JavaScript chapters 1 to 3: JavaScript basics, engine setup, comments, identifiers, literals, null,
// undefined, and equality. Create a reusable label normalizer for JavaScript QA utilities. Rules: - Trim leading and trailing spaces.
//  - Convert text to lowercase. - Replace non-alphanumeric groups with a single hyphen. - Prefix the result with "js-basic-".
//   Starter code: ```js function normalizeJsBasicsLabel(label) { // write your code here } ``` Interview focus: JavaScript setup,
//   //  identifiers, literals, typeof behavior, and clean QA naming.

// Input : normalizeJsBasicsLabel(" Login Button ")   Expected Output : "js-basic-login-button"
// Input : normalizeJsBasicsLabel("User Profile: Edit!")     Expected Output:"js-basic-user-profile-edit"
label = " Login Button "
normalizeJsBasicsLabel()
function normalizeJsBasicsLabel(label) {
    const clean = String(label ?? "")
        .trim()
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/^-+|-+$/g, "");
    console.log(clean ? "js-basic-" + clean : "js-basic");
}