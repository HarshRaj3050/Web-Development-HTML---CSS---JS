const button = document.querySelector("button");
let p = document.querySelector("#fact");

let url = "https://catfact.ninja/fact";
async function getFact(url) {
    try {
        let res = await axios.get(url);
        let data = res.data;
        return data.fact;
    } catch(err){
        console.log("ERROR - ", err);
        return "No fact found"
    }
    
}

button.addEventListener("click", async()=> {
    let newFact = await getFact(url);
    p.innerText = newFact;
})
