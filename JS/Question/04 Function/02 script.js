// Array callback Function

// find() or findIndex()
let arr = [10,12,14,8,4,2,1]
let a = (num)=>num<10;
console.log(arr.find(a));
console.log(arr.findIndex(a));

// forEach
console.log('----Display the "arr" array element----');
arr.forEach(e => {
    console.log(e);
})

// map()
let mapArr = arr.map(e => {
    return e*e;
})
console.log('----Display the "mapArr" array element----');
mapArr.forEach(e => {
    console.log(e);
})
