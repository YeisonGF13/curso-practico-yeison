// JS DE LA NAVBAR Y LA SIDEBAR RESPOSIVE

const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const menuHamburguesa = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');
const carrito = document.querySelector('.navbar-shopping-cart');
const productDetail = document.querySelector('.product-detail');


menuEmail.addEventListener('click', toggleDesktopMenu);
menuHamburguesa.addEventListener('click', toggleMobileMenu);
carrito.addEventListener('click', toggleCarrito);

function toggleDesktopMenu() {
    desktopMenu.classList.toggle('inactive');
}

function toggleMobileMenu() {
    const isCarritoClosed = productDetail.classList.contains('inactive');

    if (!isCarritoClosed) {
        productDetail.classList.add('inactive')
    }

    mobileMenu.classList.toggle('inactive')

}

function toggleCarrito() {
    const isMobileMenuClosed = mobileMenu.classList.contains('inactive');

    if (!isMobileMenuClosed) {
        mobileMenu.classList.add('inactive')
    }

    productDetail.classList.toggle('inactive');
    desktopMenu.classList.add('inactive');
}

// JS DE LA NAVBAR Y LA SIDEBAR RESPOSIVE

// JS DEL SECTION

const productList = []

productList.push({
    name: 'Bike',
    price: 120,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});

productList.push({
    name: 'Pantalla',
    price: 220,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});

productList.push({
    name: 'Compu',
    price: 620,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});


function productos(array) {

    for (product of array) {
        const cardsContainer = document.querySelector('.cards-container');

        const productCard = document.createElement('div');
        productCard.classList.add('product-card');

        const productImg = document.createElement('img');
        productImg.setAttribute('src', product.image)

        const productInfo = document.createElement('div');
        productInfo.classList.add('product-info');

        const productName = document.createElement('p')
        productName.innerText = '$' + product.name;

        const productPrice = document.createElement('p')
        productPrice.innerText = '$' + product.price;

        const productInfoDiv = document.createElement('div')

        productInfoDiv.appendChild(productName)
        productInfoDiv.appendChild(productPrice)


        const productInfoFigure = document.createElement('figure')
        const productImgCart = document.createElement('img')
        productImgCart.setAttribute('src', './icons/bt_add_to_cart.svg')

        productInfoFigure.appendChild(productImgCart);

        productInfo.appendChild(productInfoDiv);
        productInfo.appendChild(productInfoFigure);

        productCard.appendChild(productImg)
        productCard.appendChild(productInfo)

        cardsContainer.appendChild(productCard)



    }
}

productos(productList)
// JS DEL SECTION