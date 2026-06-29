class BaseTest {
    setup() {
        console.log("Base : Open Browser");
    }

    teardown() {
        console.log("Base : Close Browser");
    }
}

class UITest extends BaseTest {
    setup() {
        super.setup(); // This calls the parent setup()
        console.log("UI : maximise window");
    }

    teardown() {
        console.log("UI : take screenshot");
        super.teardown();
    }
}
let test = new UITest();
test.setup();