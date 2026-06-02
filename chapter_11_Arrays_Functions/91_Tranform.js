let scores = [45, 67, 23, 56, 89];

//map - transform every element , return a new arrays 

let grades = scores.map(x => x > 40 ? "Pass" : "Fail");
console.log(grades); //[ 'Pass', 'Pass', 'Fail', 'Pass', 'Pass' ]


// filter keeps the elemnts that pass a test 
let passsing = scores.filter(x => x > 50);
console.log(passsing); //[ 67, 56, 89 ]
let scores = [45, 67, 23, 56, 89];
// reduce - accumulates to a single value 
let total = scores.reduce((a, b) => a + b, 5);
console.log(total); //280

let nested = [[1, 2], [3, 4], [5]];
console.log(nested.flat()); //[ 1, 2, 3, 4, 5 ]