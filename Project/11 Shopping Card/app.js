let shop = document.querySelector("#shop");
let basket = [];

let shopItemData = [{
    id: "item1",
    name: "T-Shirt",
    disc: "Lorem ipsum dolor sit amet consectetur adipisicing.",
    price: 35,
    img: "src/t-shirt.jpg"
}, {
    id: "item2",
    name: "Sports Shoe",
    disc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
    price: 50,
    img: "src/shoe.png"
}, {
    id: "item3",
    name: "Casual Bag",
    disc: "Lorem ipsum dolor sit amet consectetur adipisicing.",
    price: 80,
    img: "src/bag.png"
}, {
    id: "item4",
    name: "Hoodie",
    disc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minus.",
    price: 65,
    img: "src/hoodie.png"
}];

let generateShop = () => {
    return shop.innerHTML = shopItemData.map((e) => {
        let {id,name,disc,price,img} = e;
        return `<div class="item" id="product-${id}">
            <img width="220" src="${img}" alt="">
            <div class="details">
                <h2>${name}</h2>
                <p>${disc}</p>
                <div class="quntity-list">
                    <h3>$ ${price}</h3>
                    <div class="button">
                        <i onClick="decrement(${id})" class="bi bi-dash-lg"></i>
                        <div id="${id}" class="quntity">0</div>
                        <i onClick="increment(${id})" class="bi bi-plus-lg"></i>
                    </div>
                </div>
            </div>
        </div>`
    }).join("")
}

generateShop();

let increment = (id) => {
    let selectedItem = id;
    let search = basket.find((e) => e.id === selectedItem.id);
    if(search == undefined) {
        basket.push({
            id: selectedItem.id,
            item: 1
        });
    } else {
        search.item++;
    }

    update(selectedItem.id);
}

let decrement = (id) => {
    let selectedItem = id;
    let search = basket.find((e) => e.id === selectedItem.id);
    if(search === undefined) {
        return;
    } else if(search.item === 0) {
        return;
    } else {
        search.item--;
    }

    update(selectedItem.id);
}

let update = (id) => {
    let search = basket.find((e) => e.id === id);
    document.querySelector(`#${id}`).innerHTML = search.item;

    calculate();
}

let calculate = () => {
    let cardNumber = document.querySelector("#card-number");
    cardNumber.innerHTML = basket.map((e) => e.item).reduce((x,y) => x+y, 0)
}

