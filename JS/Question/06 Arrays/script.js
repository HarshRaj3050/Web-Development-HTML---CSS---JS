// Array creating with literal
let arr = [4, 5, 6, "Harsh"];

// Array creating with directly
let array = new Array();
array = [1, 2, 3, "Raj"];

// Array creating withg constructor
let emp = new Array("Harsh", "Raj", "jai");
console.log(emp[0]);



// Print Arrays element using foreach
emp.forEach(element => {
    console.log(element);
});

// Array method
console.log(arr.concat(array, emp)); // marge "array" and "emp" array in "arr"
console.log(arr.join(" and ")); // array element sperate with " and "
console.log(arr.toString()); // array return as a String