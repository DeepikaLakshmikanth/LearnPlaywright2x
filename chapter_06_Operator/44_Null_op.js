
console.log(null >= 0);
console.log(null == 0);

// NUllish operator

let amul = null;
let milk_required = amul ?? "nandini milk"; // if amul is null or undefined then we will take 1 as default value
console.log(milk_required);

let amul = "amul is present ";
let milk_required = amul ?? "nandini milk"; //
console.log(milk_required);