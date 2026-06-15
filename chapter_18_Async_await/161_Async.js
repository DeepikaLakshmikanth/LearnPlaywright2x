async function test_api() {
    try {
        let result = await Promise.reject("502 Error resolved");
    }
    catch (error) {
        console.log("Error " + error);

    }
    finally {
        console.log("Cleaup!!!");

    }
}
test_api();