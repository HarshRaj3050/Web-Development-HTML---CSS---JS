// Write a javaScript function to extract unique characters from a string.
// Example: str = "abcdabcdefgggh"
//          ans = "abcdefgh"

let str = "abcdabcdefgggh";
function unique(str) {
    let ans = "";
    for(let i=0; i<str.length; i++) {
        let currChar = str[i];
        if(ans.indexOf(currChar) == -1) {
            ans += currChar;
        }
    }
    return ans;
}

console.log(unique(str));


/*

~ currChar represents the current character from the string str being processed in the loop.
~ ans.indexOf(currChar) checks if currChar exists in the string ans.

    - indexOf returns the index of the first occurrence of currChar in ans.
    - If currChar is not found, indexOf returns -1.

*/
