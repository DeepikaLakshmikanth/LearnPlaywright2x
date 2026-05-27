let fruits = ["banana", "apple", "cherry"];
console.log(fruits.sort()); //[ 'apple', 'banana', 'cherry' ]


let number = [3, 1, 4];
console.log(number.sort());

let num = [10, 1, 21, 2];
console.log(num.sort()); //[ 1, 10, 2, 21 ] Natural sorting or Lexicographic Sorting

num.sort((a, b) => a - b); // Ascending order  [ 1, 2, 10, 21 ]
console.log(num);

num.sort((a, b) => b - a); // Descending order  [ 21, 10, 2, 1 ]
console.log(num);