// let obj = {
//     "name": "Harsh",
//     "branch": "Computer Science"
// }

// for (const key in obj) {
//     let result = obj[key];
//     console.log(key, obj);
// }

let i = 0;
do {
    console.log(i);
    i++;
} while(i>5);


// for of loop is using for array
let arr = [3, 5, 6, "harsh"];
for (const element of arr) {
    console.log(element);
}

// for-in loop is using for object

let obj = {
    a: 1,
    b: 2,
    c: 3
}
for (const key in obj) {
    if (Object.hasOwnProperty.call(obj, key)) {
        const element = obj[key];
        console.log(element);
    }
}