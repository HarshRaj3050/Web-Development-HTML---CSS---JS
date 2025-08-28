let number = document.querySelector("h1")
let value = 0
number.innerText = value;
let increase = document.querySelector("#increase")
let decrease = document.querySelector("#decrease")


let add = increase.addEventListener("click", ()=> {
    console.log("increase was clicked")
    value += 1;
    number.innerText = value;
})


decrease.addEventListener("click", ()=> {
    console.log("decrease was clicked");
    value -= 1;
    number.innerText = value;
})

