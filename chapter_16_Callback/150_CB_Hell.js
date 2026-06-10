// Real QA Sccenario END to END Login with app.vwo.com

//openbrowser();
//goToLoginPage();
//enterCredentials();
//clickLogin();


function openbrowser(callback) {
    console.log("Opening the Chrome browser");
    setTimeout(function () {
        callback();
    }, 2000);
}

function goToLoginPage(callback) {
    setTimeout(function () {
        console.log("Step 2 . Go to Login Page");
        callback();
    }, 2000);
}

function enterCredentials(callback) {
    setTimeout(function () {
        console.log("Step 3 . Enter the Credentials");
        callback();
    }, 1000);
}
function clickLogin(callback) {
    setTimeout(function () {
        console.log("Step 4 . Login button clicked");
        callback();
    }, 1000);
}

openbrowser(function () {
    goToLoginPage(function () {
        enterCredentials(function () {
            clickLogin(function () {
                console.log("Test is completed")
            })
        })
    })
})