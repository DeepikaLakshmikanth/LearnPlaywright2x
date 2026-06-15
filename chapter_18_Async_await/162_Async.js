function getToken() {
    return Promise.resolve("abcc123");
}
//await page.goto();
async function run() {
    let token = await getToken();
    console.log(token);

}

run();