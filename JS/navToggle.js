
const lockSrcolling = document.getElementsByTagName('body');
// const headerStatic = document.querySelector('.container-header__static');


//? Navigation menu search of .header-nav
const headerMenu = document.querySelector('.header-menu');
const navSearch = document.querySelector('.nav-search');
const searchIconQuit = document.querySelector('.search-icon__quit');

//? Navigation cart total of header-cart
const headerCart = document.querySelector('.header-cart');
const navCart = document.querySelector('.nav-cart');
const cartIconQuit = document.querySelector('.cart-icon__quit');


//* ON toggle
headerMenu.addEventListener("click", function(){
    navSearch.classList.toggle('nav-visible');

    document.body.classList.add('body-lock__screen');
    // headerStatic.classList.add('container-header__static');
})

headerCart.addEventListener("click", function(){
    navCart.classList.toggle('nav-visible');


    document.body.classList.add('body-lock__screen');

})

//* OFF toggle

searchIconQuit.addEventListener("click", function(){
    navSearch.classList.toggle('nav-visible');
    document.body.classList.remove('body-lock__screen');

})

cartIconQuit.addEventListener("click", function(){
    navCart.classList.toggle('nav-visible');

    document.body.classList.remove('body-lock__screen');
})





