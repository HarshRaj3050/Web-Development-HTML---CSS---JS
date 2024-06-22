let arr = [2,3,4,5,6];

// const arr2 = [];
// for(let i = 0; i<arr.length; i++) {
//     const element = arr[i];
//     arr2.push(element**2);
// }
// arr.forEach(element => {
//     console.log(element)
// });
// console.log("After Squaring the array")
// arr2.forEach(element => {
//     console.log(element)
// })


// Map
let arr2 = arr.map (e => {
    return e**2
})

arr2.forEach(element => {
    console.log(element)
});


// Filter
console.log(arr2.filter(e => {
    if(e > 4) {
        return true
    }
    return false
}))


//Reduce
let newarr = [1,2,3,4,5]
const fact = (a,b) =>{
    return a*b
}
console.log(newarr.reduce(fact))


// Console.from
console.log(Array.from("Harsh"))

