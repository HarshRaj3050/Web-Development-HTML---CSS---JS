function sum(a, b) {
    let c = a + b;
    return c;
}
let result = sum(20,20);
console.log("Sum is : ", result);

f
// defult parameter
function summ(a, b, c = 5) {
    let d = a+b+c;
    return d;
}
let resultt = summ(20,20);
console.log("Sum is : ", resultt);

// OverWrite defult parameter
function summ(a, b, c = 5) {
    let d = a+b+c;
    return d;
}
let resulttt = summ(20,20,20);
console.log("Sum is : ", resulttt);


// Arrow Function
const func1 = (x) => {
    console.log("I am an arrow function", x);
}
func1(5);