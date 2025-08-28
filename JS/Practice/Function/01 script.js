// Write a JavaScript function that returns array elements larger than a number.

let arr = [3,6,7,2,8,9,1,4];
let num = 3;
function array(arr, num) {
    let largerArr = [];
    for(let i=0; i<=arr.length; i++) {
        if(arr[i] > num) {
            largerArr.push(arr[i]);
        }
    }
    return largerArr;
}
let result = array(arr, num);
console.log(result);