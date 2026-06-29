class BasePage {
    verify() {
        console.log("Verifying Base Page");

    }
}

class LoginPage extends BasePage {
    verify() {
        console.log("Verify : user fields exists");
        console.log("Verify : password fields exists");
        console.log("Verify : Login button is visible");
    }
}
class DashboardPage extends BasePage {
    verify() {
        console.log("Verify : Welcome message");
        console.log("Verify : side bar menu loaded");
        //console.log("Verify : Login button is visible");
    }
}

let pages = [new BasePage(), new LoginPage(), new DashboardPage()]
pages.forEach(function (test) {
    test.verify();
    console.log("--------");
})