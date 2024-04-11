// Variable declaration
var a = 34;
let b = 53;
console.log(a, b);
{
    let a = 51;
    let b = 93;
    var c = 38;
    const you = "Harsh"; // "const" variable Cannot Change
    console.log(a);
    console.log(b);
    console.log(you);
}
console.log(a, b, c);


// Check the data type
console.log("\n----Check data type----")
let x = 52;
let y = "Harsh";
let z = 34.5;
let w = true;
let v = null; // Null data type is: "Object"
let u = undefined;
console.log(typeof x, typeof y, typeof z, typeof w, typeof v, typeof u);


// Create and declaration Object
console.log("\n----Object----");
let info = {
    "name": "Harsh",
    "roll number": 1004,
}
console.log(info);
info.salary = "100crores";
console.log(info);
console.log(typeof info);