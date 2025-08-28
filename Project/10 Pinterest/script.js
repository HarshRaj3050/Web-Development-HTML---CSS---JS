let imgArr = [
    {name: "anime bluelock", link: "./assets/bluelock.jpg"},
    {name: "anime naruto", link: "./assets/animeNaruto.jpg"},
    {name: "place building", link: "./assets/placeBuilding.jpg"},
    {name: "car bmw", link: "./assets/carsBMW.jpg"},
    {name: "bike blue", link: "./assets/bikeBlue.jpg"},

    {name: "bike black", link: "./assets/bikeBlack.jpg"},
    {name: "car porsche", link: "./assets/carsPorsche.jpg"},
    {name: "fruit orange", link: "./assets/fruitOrange.jpg"},
    {name: "place sky", link: "./assets/placeSky.jpg"},
    {name: "fruit apple", link: "./assets/fruitApple.jpg"},

    {name: "laptop", link: "./assets/laptop.jpg"},
    {name: "place road", link: "./assets/placeBuilding2.jpg"},
    {name: "Game RDR2", link: "./assets/gameRDR2.jpg"},
    {name: "Game PUBG", link: "./assets/gamePubg.jpg"},
    {name: "anime itachi", link: "./assets/animeItachi.jpg"},

    {name: "Table PC", link: "./assets/pcTable.jpg"},
    {name: "Table Aesthetic", link: "./assets/tableA.jpg"},

]

function showTheCards() {
    let clutter = "";
    imgArr.forEach(obj => {
        clutter += `<div class="box">
                    <img class="cursor-pointer" src="${obj.link}" alt="image">
                    <div class="caption text-xs">Lorem ipsum</div>
                </div>`
    })
    let cont = document.querySelector(".container");
    cont.innerHTML = clutter;
}

function handleSearchFunctionality() {
    let input = document.querySelector("#searchinput");
    input.addEventListener("focus", () => {
        document.querySelector(".overlay").style.display = "block";
    })

    input.addEventListener("blur", () => {
        document.querySelector(".overlay").style.display = "none";
        document.querySelector(".searchdata").style.display = "none";
    })


    input.addEventListener("input", () => {
        let filteredArray = imgArr.filter(obj => obj.name.toLowerCase().startsWith(input.value.toLowerCase()));
        let clutter = "";
        
        for(let i=0; i<filteredArray.length; i++) {
            clutter += `<div class="res flex px-8 py-3">
                            <i class="ri-search-line font-semibold mr-5"></i>
                            <h4 class="font-semibold">${filteredArray[i].name}</h4>
                        </div>`;
        }
        let searchData = document.querySelector(".searchdata");
        searchData.innerHTML = clutter;
        searchData.style.display = "block";
        

        let result = "";
        filteredArray.forEach(obj => {
            for(let i=0; i<imgArr.length; i++) {
                if(obj.name.toLowerCase() == imgArr[i].name.toLowerCase()) {
                    result += `<div class="box">
                    <img class="cursor-pointer" src="${imgArr[i].link}" alt="image">
                    <div class="caption text-xs">Lorem ipsum</div>
                </div>`
                }
            }
        })
        let cont = document.querySelector(".container");
        cont.innerHTML = result;
    })
}

showTheCards();
handleSearchFunctionality();