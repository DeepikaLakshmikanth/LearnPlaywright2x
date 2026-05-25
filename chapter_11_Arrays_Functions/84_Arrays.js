let browser = ["Chrome", "Safari", "Edge", "Firefox"];


//Using Array Constructirs 

let scores = new Array(3); // here its the length 
scores[0] = 1;
scores[1] = 1;
scores[2] = 1;
let scores2 = new Array(1, 2, 3); // here its the array values 
console.log(scores);
console.log(scores2);

let numbers = new Array(100, 200, 300, 400);
console.log(numbers);

let test = Array.of(10, 20, 30, 40, 50);
console.log(test);

let char = Array.from("hello");
console.log(char); //[ 'h', 'e', 'l', 'l', 'o' ]

let numbers = Array.from("123456789123");
console.log(numbers); //[
//   '1', '2', '3', '4',
//   '5', '6', '7', '8',
//   '9', '1', '2', '3'
// ]