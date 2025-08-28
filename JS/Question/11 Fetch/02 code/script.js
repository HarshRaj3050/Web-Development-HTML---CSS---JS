let url = "https://catfact.ninja/fact";
async function getFact(url) {
    try {
        let res = await fetch(url)
        let data = await res.json();
        console.log(data)
        console.log("fact - ", data.fact)
    } catch(err) {
        console.log("ERROR - ", err)
    }
}
getFact(url)