//challenge 10 
// Find the first critical bug title from a bug list.

// Rules:
// - Each bug has title and severity.
// - Return the title of the first bug with severity "critical".
// - Return "No critical bug" when none exists.
findFirstCriticalJsBasicsBug([{ "title": "Typo", "severity": "low" }, { "title": "Login crash", "severity": "critical" }]);
function findFirstCriticalJsBasicsBug(bugs) {

    const issues = bugs;
    for (i = 0; i < issues.length; i++) {

        if (issues[i]["severity"].includes("critical") > 0) {
            console.log(issues[i]["title"]);
        }

    }

}





//challenge 9
buildJsBasicsRunLabel(" Smoke Suite ", " STAGING ", 42)
function buildJsBasicsRunLabel(suiteName, environment, buildNumber) {
    // write your code here

    const suite = suiteName.trim();
    const env = environment.toLowerCase().trim();
    const bnum = Number(buildNumber);

    //return `${suite} | ${env} | build-${bnum}`
    console.log(`${suite} | ${env} | build-${bnum}`);

}
//challenge 7 
results = ["login-pass", "api-fail", "profile-skip"];
summarizeJsBasicsResults(results)
function summarizeJsBasicsResults(results) {
    //let passed, failed, skipped;
    // for (i = 0; i < results.length; i++) {
    const passed = results.reduce((acc, str) =>
        str.toLowerCase().includes("pass") ? acc + 1 : acc, 0);
    // }
    const failed = results.reduce((acc, str) =>
        str.toLowerCase().includes("fail") ? acc + 1 : acc, 0);

    const skipped = results.reduce((acc, str) =>
        str.toLowerCase().includes("skip") ? acc + 1 : acc, 0);


    console.log(results.length, passed, failed, skipped);
}





//challenge 6 
countPassingJsBasicsChecks(["login-pass", "api-fail", "logout-pass"])
function countPassingJsBasicsChecks(results) {

    // const count = results.reduce((a, b) =>
    //     a.toLowerCase().includes("pass") ? acc + 1 : acc, 0);
    // console.log(count);

    const count = results.reduce((acc, str) =>
        str.toLowerCase().includes("pass") ? acc + 1 : acc, 0);

    console.log(count)

    // const count = results.reduce((a, b) =>
    //     a.toLowerCase().includes("pass") ? acc + 1 : acc, 0
    // )
}




// // challenge 5 
// - Allow known aliases from the chapter group.
// - Return canonical topic keys in first-seen order.
// - Skip unsupported values.


function filterSupportedJsBasicsTopics(topics) {
    const termDictionary = {
        "node": "runtime",
        "v8": "engine",
        "npm": "node package manager",
        //"not-a-topic": "unknown"    
    };
    const normalizedterm = topics.trim().toLowerCase();
    console.log(normalizedterm)
}



// challenge 4


function lookupTerm(input) {


    const termDictionary = {
        "node": "runtime",
        "v8": "engine",
        "npm": "node package manager",
        //"not-a-topic": "unknown"    
    };
    // Normalize by trimming whitespace and converting to lowercase
    const normalizedInput = input.trim().toLowerCase();

    // Return the mapped meaning if it exists, otherwise return "unknown"
    return termDictionary.hasOwnProperty(normalizedInput)
        ? termDictionary[normalizedInput]
        : "unknown";
}

// Example usage:
console.log(lookupTerm("  NODE "));
// Output: "Containers for storing data values"

console.log(lookupTerm("v8"));
















// Challenge 3
classifyJsBasicsScore(96)

function classifyJsBasicsScore(score) {
    switch (true) {
        case score > 90:
            console.log("EXCELLENT");
            break;
        case score > 75 && score < 89:
            console.log("GOOD");
            break;
        case score > 50 && score < 74:
            console.log("NEEDS_PRACTICE");
            break;
        case score < 50:
            console.log("REVISIT");
    }
}



name = "let"; //"loginButton"
isValidJsBasicsIdentifier(name)
function isValidJsBasicsIdentifier(name) {

    // if (name.charAt(0) === name.charAt(0).toLowerCase()) {
    //     const regex = /^[_$][\w$]*$/;
    //     console.log(regex.test(name));
    // }
    // 1. Must be a string and non-empty after trimming
    if (typeof name !== 'string') console.log(false);
    const trimmedValue = name.trim();
    if (trimmedValue.length === 0) console.log(false);

    // 2. Reject reserved words: let, const, var, class, function, return
    const reservedWords = ['let', 'const', 'var', 'class', 'function', 'return'];
    if (reservedWords.includes(trimmedValue)) console.log(false);

    /**
     * 3. Regex Pattern breakdown:
     * ^[a-zA-Z_$]      : Must start with a letter, underscore, or dollar sign.
     * [a-zA-Z0-9_$]*   : Remaining characters can be letters, digits, underscores, or dollar signs.
     * $                : End of string.
     */
    const namePattern = /^[a-zA-Z_$][a-zA-Z0-9_$]*$/;
    console.log(namePattern.test(trimmedValue));

}








//Challenge One
label = "---Search@@Box---";//" Login Button "; "User Profile: Edit!"  "---Search@@Box---"
normalizeJsBasicsLabel(label)
function normalizeJsBasicsLabel(label) {
    label = label.trim();
    if (label.length > 0) {
        console.log("js-basic-" + label.replace(/[^a-zA-Z0-9]+/g, " ").trim().toLowerCase().replace(/[^a-zA-Z0-9]+/g, "-"));
    }
    else
        console.log("js-basic");

}