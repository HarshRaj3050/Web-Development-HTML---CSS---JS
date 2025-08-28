// High order function (Return)

function test(request) {
    if(request == "even") {
        return (n)=> {
            console.log((n%2==0));
        }
    } else if(request == "odd") {
        return (n)=> {
            console.log(!(n%2==0));
        }
    } else {
        console.log("Wrong request");
    }
}

let request = "even";
let func = test(request)