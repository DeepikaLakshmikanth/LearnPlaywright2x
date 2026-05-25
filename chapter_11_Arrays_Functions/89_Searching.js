let results = ["pass", "fail", "pass", "error", "fail"];
/// indexof  return the first index of the value encountered and -1 if not found 
console.log(results.indexOf("fail")); //1
console.log(results.indexOf("skip")); //-1


// it searches from the end
console.log(results.lastIndexOf("pass")); //2


console.log(results.includes("error")); //true
console.log(results.includes("skip")); //false


// find returns the first matching element
let nums = [10, 20, 30, 40, 45];
console.log(nums.find(x => x > 20)); //30

console.log(nums.findIndex(n => n > 20)); //2
console.log(nums.lastIndexOf(n => n > 20)); // -1