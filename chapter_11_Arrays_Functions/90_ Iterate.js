let tests = ["login", "search", "logout"];

for (i = 0; i < tests.length; i++) {
    console.log(tests[i]);
}
console.log('----------');
for (x of tests) {
    console.log(x);
}
console.log('----------');

tests.forEach((i, index) => {
    console.log(i, index)
})
console.log('----------');

let students = ["priya", "sunil", "ram", "rahul"];
for (let i in students) {
    console.log(i, "=> ", students[i]);
}
console.log('----------');

for (let [i, j] of tests.entries()) {
    console.log(i, j)
}