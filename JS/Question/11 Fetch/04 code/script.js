let btn = document.querySelector("button")
let ul = document.querySelector("ul")
let url = "http://universities.hipolabs.com/search?name=";

async function getCollege(url, input) {
  let res = await axios.get(url + input);
  return res.data;
}

function college(list) {
  ul.innerHTML = ""
  for(col of list) {
    let li = document.createElement("li")
    li.innerText = col.name;
    ul.appendChild(li);
  }
}

btn.addEventListener("click", async ()=> {
  let input = document.querySelector("input").value
  let collegeList = await  getCollege(url, input);
  college(collegeList);
  
})