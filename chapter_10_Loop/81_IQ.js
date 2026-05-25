for (let i = 0; i < 3; i++) {
    if (i === 1) continue;
    console.log(i);
}

console.log(typeof (NaN));
console.log(x); let x = 5;

let y;
console.log(y);

const arr = [1, 2, 3];
arr.push(4);
console.log(typeof arr);

console.log('5' - 3);
console.log(true + true);

console.log(0 || 'hello');
console.log(0 ?? 'hello');

if (null) { console.log('yes'); } else { console.log('no'); }
console.log(Boolean([]));

for (let i = 0; i < 5; i++) {
    if (i === 3) break;
} console.log(i);


let statusCode = 404;
switch (statusCode) {
    case 200: console.log("PASS - OK: Request successful");
        break;
    case 201: console.log("PASS - Created: Resource created successfully");
        break;
    case 301: console.log("WARNING - Moved Permanently: URL has changed");
        break;
    case 400: console.log("FAIL - Bad Request: Check request payload");
        break;
    case 401: console.log("FAIL - Unauthorized: Check auth token");
        break;
    case 403: console.log("FAIL - Forbidden: Insufficient permissions");
        break;
    case 404: console.log("FAIL - Not Found: Check endpoint URL");
        break;
    case 500: console.log("FAIL - Internal Server Error: Backend issue");
        break;
    default: console.log("UNKNOWN - Unhandled status code");
}



// After a test suite runs, you receive an array of test results (strings: "pass", "fail", "skip"). Write a JavaScript program using 
// a for loop that counts how many tests passed, failed, and were skipped. Print a test report with total tests, counts, 
// pass rate percentage, and a verdict (all passed → ready for release, ≤2 failures → review, >2 failures → block release).


testResults = ["pass", "pass", "fail", "pass", "skip", "pass", "fail", "pass"];
console.log(testResults.length);
let count1 = 0;
for (i = 0; i < testResults.length; i++) {
    //console.log(i + testResults[i]);
    if (testResults[i] === "pass") {
        count1++;
        console.log(count1);
    }
    console.log(`Number of tests passed is ${count1}`);
}

