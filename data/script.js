let bagItems = [ ]

onLoad();
function onLoad(){
    displayItemonHomePage();
    displayBagIcon();
    let bagItemsStr = localStorage.getItem('bagItems');
    bagItems = bagItemsStr ? JSON.parse(bagItemsStr) : []
}

function addToBag(itemId) {
    bagItems.push(itemId);
    displayBagIcon();
    localStorage.setItem('bagItems', JSON.stringify(bagItems));
}

function displayBagIcon(){
    let bagItemsCountElement = document.querySelector(".bag-item-count");
    if(bagItems.length > 0){
        bagItemsCountElement.style.visibility = "visible";
        bagItemsCountElement.innerText = bagItems.length;
    }else{
        bagItemsCountElement.style.visibility = "hidden";
    }
}

function displayItemonHomePage() {
    let itemContainerElement = document.querySelector(".items-container");
    if(!itemContainerElement){
        return
    }
    let innerHTML = "";
    items.forEach(item => {
        innerHTML += `<div class="item-container">
    <img src="${item.image}" alt="img" class="item-image">
    <div class="rating">${item.rating.stars} ⭐ ${item.rating.count}</div>
    <div class="company">${item.company}</div>
    <div class="item-name">${item.item_name}</div>
    <div class="price">
        <span class="current-price">Rs. ${item.current_price}</span>
        <span class="original-price">Rs. ${item.original_price}</span>
        <span class="discount-price">(${item.discount} off)</span>
    </div>
    <button class="btn-add-bag" onclick = "addToBag(${item.id})">Add to Bag</button>
    </div>`
    });
    itemContainerElement.innerHTML = innerHTML;
}
