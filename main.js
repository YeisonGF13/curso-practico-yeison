// CREANDO Y DEFINIENDO VARIABLES
const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const menuHamburguesa = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');
const carrito = document.querySelector('.navbar-shopping-cart');
const productDetail = document.querySelector('.product-detail');
const productDetailContainer = document.querySelector('.product-detail-detalle')
const productDetailCloseIcon = document.querySelector('.product-detail-close')


// AGREGANDO EL EVENTO DE CLICK JUNTO CON LAS FUNCIONES
menuEmail.addEventListener('click', toggleDesktopMenu);
menuHamburguesa.addEventListener('click', toggleMobileMenu);
carrito.addEventListener('click', toggleCarrito);
productDetailCloseIcon.addEventListener('click', addproductDetailCloseIcon)

// CREANDO LAS FUNCIONES QUE SE ENCARGAN DE OCULTAR LOS MENUS DESPLEGABLES CUANDO SE ABRE OTRO
function toggleDesktopMenu() {
    const productDetailClosed = productDetail.classList.contains('inactive')

    if (!productDetailClosed) {
        productDetail.classList.add('inactive')
    }
    desktopMenu.classList.toggle('inactive');


}

function toggleMobileMenu() {
    const isCarritoClosed = productDetail.classList.contains('inactive');

    if (!isCarritoClosed) {
        productDetail.classList.add('inactive')
    }

    else {
        mobileMenu.classList.toggle('inactive')
    }

}

function toggleCarrito() {
    const isMobileMenuClosed = mobileMenu.classList.contains('inactive');

    if (!isMobileMenuClosed) {
        mobileMenu.classList.add('inactive')
    }

    else {
        productDetail.classList.toggle('inactive');
        desktopMenu.classList.add('inactive');
        productDetailContainer.classList.add('inactive')
    }


}

function addproductDetailCloseIcon() {
    productDetailContainer.classList.add('inactive');
}

function openProductDetailAside() {
    const productDetailClosed = productDetail.classList.contains('inactive')

    if (!productDetailClosed) {
        productDetail.classList.add('inactive')
    }

    productDetailContainer.classList.remove('inactive');

}


// CREANDO UN ARRAY DONDE SE VAN A CREAR LOS ELEMENTOS DE VENTA COMO LA IMAGEN, NOMBRE Y PRECIO
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

// FUNCION DONDE SE CREAN LOS ELEMENTOS HTML
function productos(array) {

    for (product of array) {
        const cardsContainer = document.querySelector('.cards-container');

        const productCard = document.createElement('div');
        productCard.classList.add('product-card');

        const productImg = document.createElement('img');
        productImg.setAttribute('src', product.image)
        productImg.addEventListener('click', openProductDetailAside)

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

// ACÁ SE EJECUTA LA FUNCION PASANDOLE COMO PARAMETRO EL ARRAY PRODUCTLIST
productos(productList)
