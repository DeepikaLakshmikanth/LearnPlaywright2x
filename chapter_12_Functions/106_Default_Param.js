function retry(testName, maxretires = 3, delay = 1000) {
    console.log(`Running test ${testName} with max retries ${maxretires} and delay ${delay}`);
}

retry("Login Test");
retry("Registeration Test", 5, 500);