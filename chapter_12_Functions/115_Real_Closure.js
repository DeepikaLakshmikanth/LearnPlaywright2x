function makeRetryTracker(max) {

    let attempts = 0;
    function tryagain(testName) {
        attempts++;
        if (attempts > max) {
            return `test ${testName} exceeds max retries ${max} `;
        }

        return `Attempt ${attempts} / ${max} for test ${testName}`;
    }
    return tryagain;
}

let retryTracker = makeRetryTracker(3);
console.log(retryTracker("Login")); // Attempt 1 / 3 for test test1