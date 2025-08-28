let h1 = document.querySelector("h1");
let button = document.querySelector(".button");
let box = document.querySelector(".box");

let color = ()=> {
    let r = Math.floor(Math.random() * 256)
    let g = Math.floor(Math.random() * 256)
    let b = Math.floor(Math.random() * 256)
    let color = `${r}, ${g}, ${b}`;
    return color;
}

button.addEventListener("click", ()=> {
    box.style.backgroundColor = `rgb(${color()})`;
    h1.innerText = `rgb(${color()})`;
})

