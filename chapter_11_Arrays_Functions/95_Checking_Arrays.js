let result = Array.isArray([1, 2, 3]);
console.log(result);

let a = Array.isArray("A");
console.log(a);

// every & some 


console.log([60, 80, 90, 100].every(s => s >= 70)); //false
console.log([80, 90, 100].every(s => s >= 70));//true

// some - AT LEAST ONE must pass 

console.log([80, 60, 85].some(s => s < 70));
console.log([80, 90, 85].some(s => s < 70));