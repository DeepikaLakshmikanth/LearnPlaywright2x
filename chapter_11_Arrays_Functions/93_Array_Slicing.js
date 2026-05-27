let arr = [1, 2, 3, 4, 5];
console.log(arr.slice(1, 3)); // index (start, end-1 )
console.log(arr.slice(2, 4)); // o/p :[ 3, 4 ]
console.log(arr.slice(2, 5)); // o/p :[ 3, 4, 5 ]
console.log(arr.slice(2)); // o/p :[ 3, 4, 5 ]
console.log(arr.slice(-2)); // o/p : [ 4, 5 ]

console.log(arr.slice(-4, -2)); // o/p : [ 2, 3 ]
console.log(arr.slice(0)); // [ 1, 2, 3, 4, 5 ]

let arr = [10, 20, 30, 40, 50];
let s = arr.slice(2, 4);
console.log(s);

let arr = [10, 20, 30, 40, 50];
let s = arr.splice(3, 2); // removes one element
console.log(arr); //[10, 20 , 30 ]
console.log(s); //[40 , 50 ]