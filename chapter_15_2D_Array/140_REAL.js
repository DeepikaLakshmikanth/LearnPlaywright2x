let test_Matrix = [
    ["login", "pass", 200],
    ["checkkout", "fail", 400],
    ["search", "pass", 180]
];

/* for (i = 0; i < test_Matrix.length; i++) {
    for (j = 0; j < test_Matrix[i].length; j++) {
        console.log(test_Matrix[i][j]);
    }
    console.log();

} */

/* for (let row of test_Matrix) {
    for (let cell of row) {
        process.stdout.write(cell + " ")
    }
    console.log();
} */

// forEach
test_Matrix.forEach(row => {
    row.forEach(
        cell => process.stdout.write(cell + " ")
    );
    console.log();
});