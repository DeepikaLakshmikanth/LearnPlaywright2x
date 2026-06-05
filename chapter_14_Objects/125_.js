// Objects 
// Key and value 

let student1 = { name: "Amit", age: 65 };

let student2 = { name: "Dutta" };

let student3 = { name: "Amir", age: 87, phone: 7979777898 };

// key will not be in the double  below key in the double quites is actualli JSon

let JSON_student4 = { "name": "Pramod", "age": 87, "phone": 979797979 };

console.log(student1.name, JSON_student4.name);

let a = { status: "pass" };

console.log(a.status);
console.log(a["status"]);

let a1 = { status: 'pass' };
console.log(a1.status);

let b = a;
b.status = "fail";
console.log(b.status, a.status); // fail , fail 

let c = { status: "pass" };
let d = { status: "pass" };
console.log(c);
console.log(d);

if (b === a) {
    console.log("true");
} else {
    console.log("false");
}










