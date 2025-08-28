let res = "https://catfact.ninja/fact";
fetch(res)
    .then((res) => {
        console.log(res)
        return res.json();
    })
    .then((data) => {
        console.log(data)
        return fetch(res);
    })
    .then((res) => {
        return res.json()
    })
    .then((data) => {
        console.log("fact = " + data.fact)
    })
    .catch((err) => {
        console.log("ERROR = ", err);
    })

console.log("Hello World")