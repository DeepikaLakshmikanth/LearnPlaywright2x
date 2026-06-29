class BaseTest {
    setup() {
        console.log("Base : Open Browser");
    }
}

class APIPage extends BaseTest {
    setup() {
        console.log("APITest : Open Browser");

    }

}

let test = new APIPage();
test.setup();

