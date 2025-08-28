// Write a JavaScript function that accepts a list of country names as input and returns 
// the longest country name as output. 
//      Example: country = ["Australia","Germany","United States of America"]
//      output: "United States of America"

let conuntry = ["Australia", "Germany", "United States of America"];
function longestName(conuntry) {
    let maxLen = "";
    for(let i=0; i<conuntry.length; i++) {
        if(maxLen.length <= (conuntry[i].length)) {
            maxLen = conuntry[i]
        }
    }
    return maxLen;
}
console.log(longestName(conuntry));