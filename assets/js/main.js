

/*=============== SHOW CART ===============*/

const cart = document.querySelector('#cart') ;
const cart_shop = document.querySelector('#cart_shop');
const cart_close = document.querySelector('.cart_close');

cart_shop.addEventListener("click" , () =>{
    cart.classList.add("show-cart");
});

cart_close.addEventListener("click" , () =>{
    cart.classList.remove("show-cart");
});

/*=============== SHOW MENU ===============*/

const menu = document.querySelector('.nav_small');
const menu_icon = document.querySelector('.nav_toggle');
const nav_close = document.querySelector('.nav_close');


/*===== MENU SHOW =====*/
/* Validate if constant exists */

menu_icon.addEventListener("click" , () =>{
    menu.classList.add("nav_small-show");
    console.log(menu);
});

/*===== MENU HIDDEN =====*/
/* Validate if constant exists */

nav_close.addEventListener("click" , () =>{
    menu.classList.remove("nav_small-show");
    console.log(menu);
});



/*===== CART SHOW =====*/
/* Validate if constant exists */



/*===== CART HIDDEN =====*/
/* Validate if constant exists */


/*=============== SHOW LOGIN ===============*/


/*===== LOGIN SHOW =====*/
/* Validate if constant exists */

const select = document.querySelector('.login-container .selected');
const loginbtn = document.querySelector('.login-container #login-switch ');
const regbtn = document.querySelector('.login-container #reg-switch ');
const login = document.querySelector('.login-container .login');
const reg = document.querySelector('.login-container .registeration');
const splitter = document.querySelector('.login-container .splitter')

loginbtn.style.color = '#fff';
console.log(select , loginbtn , regbtn ,login ,reg , splitter);

regbtn.addEventListener('click' , () =>{
    select.classList.add('reg-select');
    splitter.classList.add('work');     
    regbtn.style.color = '#fff';
    loginbtn.style.color = 'var(--title-color)';
});

loginbtn.addEventListener('click' , () =>{
    select.classList.remove('reg-select');
    splitter.classList.remove   ('work'); 
    regbtn.style.color = 'var(--title-color)';
    loginbtn.style.color = '#fff';
});



/*===== LOGIN HIDDEN =====*/
/* Validate if constant exists */


/*=============== HOME SWIPER ===============*/

const homeSwiper = new Swiper('.home-swiper', {
    
    spaceBetween : 30,
    Loop : true,

    autoplay: {
        delay: 3000, // Time between each slide transition (in milliseconds)
    // Keep autoplay running even after user interactions
    },

    pagination: {
        el: ".swiper-pagination",
      },
});

/*=============== CHANGE BACKGROUND HEADER ===============*/

function bgheader() {
    const header = document.querySelector('#header');
    this.scrollY >= 50 ? header.classList.add('scroll-header') : header.classList.remove('scroll-header');

}

window.addEventListener('scroll' , bgheader);

/*=============== NEW SWIPER ===============*/

const newSwiper = new Swiper('.new-swiper', {
    spaceBetween : 16,
    slidesPerView : "auto",
    Loop : true,
    centeredSlides: true,
    initialSlide: 2,
    autoplay: {
        delay: 3000, // Time between each slide transition (in milliseconds)
    // Keep autoplay running even after user interactions
    },
});


/*=============== SHOW SCROLL UP ===============*/ 
const scroll_up = document.querySelector('.scroll-up');

 function  show() {
    window.scrollY > 200 ? scroll_up.classList.add('show_scroll') : scroll_up.classList.remove('show_scroll')
 }

 window.addEventListener('scroll' , show);


scroll_up.addEventListener("click" , () =>{
    window.scrollTo({
        top : 0,
        behavior : "smooth"
    });
    console.log(window.scrollY);
})


/*=============== LIGHT BOX ===============*/


/*=============== QUESTIONS ACCORDION ===============*/


/*=============== STYLE SWITCHER ===============*/