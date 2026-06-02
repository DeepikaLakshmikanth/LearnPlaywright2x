function runTest(name, status, duration) {
    return `Test ${name} has status ${status} and duration ${duration}`;
}

const result = runTest("Login ", "passed", 120);
console.log(result);    