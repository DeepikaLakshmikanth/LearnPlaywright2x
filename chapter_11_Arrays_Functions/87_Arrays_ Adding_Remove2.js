let arr = [1, 2, 3];
arr.push(4, 5, 6);
console.log(arr);

// arr.splice(3, 2)
// console.log(arr); // it will delete the 2 elements from the arr[3] position

arr.splice(2, 0, 99); // it will  0 elements and place 99 in arr[2]
console.log(arr);

arr.splice(3, 1, 19); // it will delete 1 elements and place 19 in arr[3]
console.log(arr);

arr.splice(1, 2, 19, 20); // it will delete 1 elements and place 19 in arr[3]
console.log(arr);