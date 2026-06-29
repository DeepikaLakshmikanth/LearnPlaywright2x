class BasePage {

    constructor(pageName) {
        this.pageName = pageName;

    }
    open() {
        console.log("Opening the page");

    }
    closed() {

        console.log("Closing the page");
    }

}

class LoginPage extends BasePage {


}

const page = new LoginPage();
page.open();
page.closed();