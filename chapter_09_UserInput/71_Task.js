//Task 1 : HTTP Status Code Categorizer

// Problem: Given an HTTP status code, print which category it belongs to.

let httpstatusCode = 300;

if (httpstatusCode >= 200 && httpstatusCode < 300) {
    console.log(httpstatusCode + "  Success ");

} else if (httpstatusCode >= 300 && httpstatusCode < 400) {
    console.log(httpstatusCode + "  Redirection ");
} else if (httpstatusCode >= 400 && httpstatusCode < 500) {
    console.log(httpstatusCode + " Client Error ");
} else if (httpstatusCode >= 500 && httpstatusCode < 600) {
    console.log(httpstatusCode + " Server Error ");

} else {
    console.log(httpstatusCode + " Invalid status code.");
}

//Task 2 : Question 2 — Test Case Pass/Fail Verdict

// Problem: Compare actual result with expected result and print test verdict.

expected = "Login Successful";
actual = "Invalid Credential";

if (expected === actual) {
    console.log("✅ Test Passed")
} else {
    console.log(`❌ Test Failed : Expected ${expected} , Got : ${actual}`);
}

// Task 3 Question 3 — Bug Severity Classifier

// Problem: Given a bug's impact score (1–10), classify the severity.

let score = 2;
if (score >= 9 && score <= 10) {
    console.log("Severity : Critical (block release)");
} else if (score >= 7 && score <= 8) {
    console.log("Severity High");
} else if (score >= 4 && score <= 6) {
    console.log("Severity Medium");
} else if (score >= 1 && score <= 3) {
    console.log("Severity Low");
} else {
    console.log(" Invalid Score");
}

// Question 4 — Build Health Reporter

// Problem: Given the percentage of test cases passed in a CI build, report build health.

percentage = 110

if (percentage === 100) {
    console.log(" 🟢 Green Build ");
} else if (percentage >= 90 && percentage <= 99) {
    console.log(" 🟡 Stable (investigate failures) ");
} else if (percentage >= 70 && percentage <= 89) {
    console.log(" 🟠Unstable ");
} else if (percentage < 70) {
    console.log(" 🔴 Broken Build (block deployment) ");
}
else {
    console.log("Invalid percentage");
}
// //Question 5 — Login Logout After Failed Attempts

// Problem: Track failed login attempts. Lock the account after 3 failed attempts.

let attempts = 5;

if (attempts < 3) {
    console.log(` ${3 - attempts} attempt(s) left before lockout`);
} else if (attempts === 3) {
    console.log("🔒 Account Locked — Contact support");
} else {
    console.log("Invalid attempts");
}