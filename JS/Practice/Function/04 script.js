// Write a JavaScript function to generate a random number with in a range (start, end).

let start = 10;
let end = 20;
function randomNumber(start, end) {
    return Math.floor(Math.random() * (end - start)) + start;
}

console.log(randomNumber(start, end));


