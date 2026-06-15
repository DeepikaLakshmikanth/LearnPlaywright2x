
//openbrowser();
//goToLoginPage();
//enterCredentials();
//clickLogin();


function openbrowser() {
    return new Promise(function (resolve) {
        resolve("Browser Opened");
    });
}

function goToLoginPage() {
    return new Promise(function (resolve) {
        resolve("Navigated to Login Page");
    });
}

function enterCredentials() {
    return new Promise(function (resolve) {
        resolve("Entered Credentials");
    });
}
function clickLogin(callback) {
    return new Promise(function (resolve) {
        resolve("Clicked on Login button");
    });
}


async function runE2E() {
    let msg1 = await openbrowser();
    console.log("Step 1: " + msg1);

    let msg2 = await goToLoginPage();
    console.log("Step 2: " + msg2);

    let msg3 = await enterCredentials();
    console.log("Step 3: " + msg3);

    let msg4 = await clickLogin();
    console.log("Step 4: " + msg4);
    console.log(msg1 + " , " + msg2 + " , " + msg3 + " , " + msg4);
}
runE2E();