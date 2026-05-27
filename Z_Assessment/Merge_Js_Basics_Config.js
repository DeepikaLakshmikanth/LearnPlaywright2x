// Problem Description:
// Derived from JavaScript chapters 1 to 3: JavaScript basics, engine setup, comments, identifiers, literals, null, undefined, and equality. Merge default and override configuration values for a test helper. Rules: - Override values must win. - If retries is missing from both objects, default it to 0. - Do not mutate the input objects. Starter code: ```js function mergeJsBasicsConfig(defaultConfig, overrideConfig) { // write your code here } ``` Interview focus: JavaScript setup, identifiers, literals, typeof behavior, and clean QA naming.

// Input:mergeJsBasicsConfig({"retries":1,"env":"dev"}, {"retries":3})   Expected Output:{"retries":3,"env":"dev"}
// Input:mergeJsBasicsConfig({"env":"qa"}, {"timeout":5000}) Expected Output:{"env":"qa","timeout":5000,"retries":0}
defaultConfig = { "retries": 1, "env": "dev" };
overrideConfig = { "retries": 3 };

mergeJsBasicsConfig(defaultConfig, overrideConfig)
function mergeJsBasicsConfig(defaultConfig, overrideConfig) {
    const merged = { ...defaultConfig, ...overrideConfig };
    if (merged.retries === undefined) merged.retries = 0;
    console.log(merged);
}