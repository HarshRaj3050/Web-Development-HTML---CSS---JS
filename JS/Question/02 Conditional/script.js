// if-else Statement
let a = 5;
let b = 3;
let c;
if(a>b) {
    c = a + b;
} else {
    c = a - b;
}
console.log(c);


// Check data and data-type
console.log("\n----Check data and data-type----")
let d = 5;
let e = "5";
// '==' only check data
if(d == e) {
    console.log("Is equal");
}else{
    console.log("Not equal");
}
// '===' is check both data and data-type
if(d === e) {
    console.log("Is equal");
}else{
    console.log("Not equal");
}


// One line if-else statement
console.log("\n----Ternary operator----")
let x = 5;
let y = 2;
let z = x > y ? (x + y) : (x - y);
console.log(z);


// if-else ladder
console.log("\n----if-else ladder----")
let age = 19;
if(age >= 18) {
    console.log("You are adult");
} else if (age >= 12) {
    console.log("You are teenagers");
} else {
    console.log("You are child");
}