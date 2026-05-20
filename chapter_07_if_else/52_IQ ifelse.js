// if ("hello") console.log("String is truthy");
// if (42) console.log("Number is truthy");
// if ({}) console.log("Object is truthy");
// if ([]) console.log("Array is truthy");


if ("") console.log("Wont print");
if (0) console.log("Wont print");
if (null) console.log("Wont print");
if (undefined) console.log("Wont print");
if (NaN) console.log("Wont print");


let name = 0;
if (name) {
    console.log("Hi " + name);
} else {
    console.log("Bye " + name);
}