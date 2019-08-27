//Data banner------------------
var bannerArr = [{
    idNumber: 1001,
    title: 'Activitee',
    text: 'T shirts from dribb ble...',
    price: '$25.00',
    img: 'images/activitee_large.png',
    background: '#58dbd3'
}, {
    idNumber: 1002,
    title: 'Ampersan dwich Tee',
    text: '',
    price: '$18.00',
    img: 'images/301_large.png',
    background: '#e4ce9a'
}, {
    idNumber: 1003,
    title: 'Bally Rog er Glow Tee',
    text: 'dribb ble...',
    price: '$25.00',
    img: 'images/bally_large.png',
    background: '#ffa7ce'
}, {
    idNumber: 1004,
    title: '50%',
    text: 'off',
    price: 'lets go',
    img: '',
    background: '#f2ca66'
}];

//Data product------------------
var productArr = [{
    idNumber: 1001,
    name: 'Levis Jeans-071',
    img: 'images/product_Levis%20Jeans-071.jpg',
    price: '61.99'
}, {
    idNumber: 1002,
    name: 'Levis Jeans-072',
    img: 'images/product_Levis%20Jeans-072.jpg',
    price: '59.99'
}, {
    idNumber: 1003,
    name: 'Levis Jeans-073',
    img: 'images/product_Levis%20Jeans-073.jpg',
    price: '46.99'
}, {
    idNumber: 1004,
    name: 'Levis Jeans-074',
    img: 'images/product_Levis%20Jeans-074.jpg',
    price: '38.99'
}, {
    idNumber: 1005,
    name: 'Levis Jeans-075',
    img: 'images/product_Levis%20Jeans-075.jpg',
    price: '20.99'
}];

var bannerCard = '';
var productCard = '';
var produrtCards = document.querySelector('#arr-product-card');
var selectedName = document.querySelectorAll('.selected-name');
var selectedPrice = document.querySelector('.selected-price p span');
var selectedImg = document.querySelector('.selected-img');
var selectedDescription = document.querySelector('.selected-description');
var bannerBody = document.querySelectorAll('.banner-body') ;
//Render banner card---------------

(function renderBannerCard() {
    for (var i = 0; i < bannerArr.length; i++) {
        bannerCard +=
            `<a href="#" class="banner-body">
    <p class="banner-title">${bannerArr[i].title}</p>
    <p class="banner-text">${bannerArr[i].text}</p>
    <p class="banner-price">${bannerArr[i].price}</p>
    <img class="banner-img"></img>
    </a>`
       
    };
    document.querySelector('.banner-wrapper').innerHTML += bannerCard;
    bannerBody = document.querySelectorAll('.banner-body') ; 
    for(var i = 0; i< bannerArr.length; i++ ){
        bannerBody[i].style.backgroundColor = bannerArr[i].background;
        bannerBody[i].childNodes[7].src =   bannerArr[i].img;
    }
})();

//Render product card---------------
(function renderProductCard() {
    for (var i = 0; i < productArr.length; i++) {
        productCard += `
        <div class="product-card" data-idnumber="${productArr[i].idNumber}">
        <div class="card-photo-product">
        <img class="product-img" src="${productArr[i].img}"></div>
        <div class="product-name">${productArr[i].name}</div>
        </div>`
    };
    document.querySelector('#arr-product-card').innerHTML = productCard;
})();


//Filling content first product card-----------------------
var cardPhotoProduct = document.querySelectorAll('.card-photo-product');
var numSelect = '0';
cardPhotoProduct[0].classList.add("select");
selectedName[0].textContent = 'Mens ' + productArr[0].name;
selectedPrice.textContent = '$ ' + productArr[0].price;
selectedImg.src = productArr[0].img;

//Product change on click---------------------------------
produrtCards.addEventListener('click', function(event) {

    if (event.target.parentElement.className == 'card-photo-product' || event.target.parentElement.className == 'card-photo-product select') {

        for (var i = 0; i < productArr.length; i++) {

            if (event.path[2].attributes[1].value == productArr[i].idNumber) {
                selectedName[0].textContent = 'Mens ' + productArr[i].name;
                selectedPrice.textContent = '$ ' + productArr[i].price;
                selectedImg.src = productArr[i].img;
                event.target.parentElement.classList.toggle("select");
                cardPhotoProduct[numSelect].classList.toggle("select");
                numSelect = i;
            };
        };
    };
});

