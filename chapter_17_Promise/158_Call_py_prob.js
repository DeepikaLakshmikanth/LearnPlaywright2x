function openBrowser() {
    return new Promise(function (resolve) {
        // code to open the Browser ;
        resolve("Open the Browser");
    })
}

function goToLogin() {
    return new Promise(function (resolve) {
        resolve("Login function ")

    });
}

function enterCredentials() {
    return new Promise(function (resolve) {
        resolve("enterCredentials is entered");
    })
}

function clickLogin() {
    return new Promise(function (resolve) {
        resolve("Logged in sucessfully");
    })
}


openBrowser()
    .then(function (mdg) {
        console.log("Step 1 :" + mdg);
        return goToLogin();
    }).then(function (mdg) {
        console.log("Step 2 : " + mdg);
        return enterCredentials();
    }).then(function (mdg) {
        console.log("Step 3 : " + mdg);
        return clickLogin();
    }).then(function (mdg) {
        console.log("Step 4: " + mdg);
    }).catch(function (error) {
        console.log("Error :" + error);
    }).finally(function () {
        console.log("Done Execution");

    })

