// Problem Description: Derived from JavaScript chapters 1 to 3: JavaScript basics, engine setup, comments, identifiers, literals,
// null, undefined, and equality. Write a validator for names used in helper functions, variables, or test data keys.
//  Rules: - Value must be a non-empty string after trimming. - It must start with a letter, underscore, 
//  or dollar sign. - Remaining characters may include letters, digits, underscore, or dollar sign. - Reject reserved words used 
//  in this chapter: let, const, var, class, function, return. Starter code: ```js function isValidJsBasicsIdentifier(name) 
//  { // write your code here } ``` Interview focus: JavaScript setup, identifiers, literals, typeof behavior, and clean QA naming.

// Input:isValidJsBasicsIdentifier("$submit")   Expected Output:true
// Input:isValidJsBasicsIdentifier("loginButton")   Expected Output: true


name = "$loginButton";
isValidJsBasicsIdentifier(name)
function isValidJsBasicsIdentifier(name) {
    if (typeof name !== "string" || name.trim() === "") return false;
    const value = name.trim();
    const reserved = ["let", "const", "var", "class", "function", "return"];
    console.log(/^[A-Za-z_$][A-Za-z0-9_$]*$/.test(value) && !reserved.includes(value));
}