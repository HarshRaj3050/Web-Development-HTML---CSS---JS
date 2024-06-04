// Cannot run (Answer is not display in Chrome)

/* Create a faulty calculator using JavaScript

This faulty calculator does following:
1. It takes two number as input from the user
2. It perfoms wrong operations as follows:

+ ----> -
- ----> /
* ----> +
/ ----> **

*/

function correct(x, y, num) {
    var result;
    switch(num) {
        case 1: {
            result = x + y;
            break;
        }
        case 2: {
            result = x - y;
            break;
        }
        case 3: {
            result = x * y;
            break;
        }
        case 4: {
            result = x / y;
            break;
        }
    }
    return result;
}

function fault(x, y, num) {
    var result;
    switch(num) {
        case 1: {
            result = x - y;
            break;
        }
        case 2: {
            result = x / y;
            break;
        }
        case 3: {
            result = x + y;
            break;
        }
        case 4: {
            result = x ** y;
            break;
        }
    }
    return result;
}

var x = prompt("Enter the first number : ");
var y = prompt("Enter the second number : ");
var num = prompt("Enter the operator : ")

var i = Math.floor(Math.random() * 10);
if(i > 0) {
    let result = correct(x,y,num);
    console.log("Value is Correct : ", result);
}
else {
    let result = fault(x,y,num)
    console.log("Value is Fault : ", result);
}
console.log("Random generate value : ", i);