let scores = [
    [87, 90, 56],
    [55, 77, 99],
    [87, 45, 89]
];

let rowSums = scores.map(x => x.reduce((x, y) => x + y, 0));
console.log(rowSums);

let suiteResults = [
    ["login-pass", "register-pass", "logout-pass"],  // Auth suite
    ["search-pass", "filter-fail", "sort-pass"],  // Search suite
    ["checkout-fail", "payment-fail", "confirm-pass"]   // Payment suite
];

for (let i = 0; i < suiteResults.length; i++) {
    for (let j = 0; j < suiteResults[i].length; j++) {
        if (suiteResults[i][j].includes("fail")) {
            console.log(suiteResults[i][j]);
        }

    }

}

let array_2d = [
    [1, 2, 3],
    [4, 5],
    [6]
]