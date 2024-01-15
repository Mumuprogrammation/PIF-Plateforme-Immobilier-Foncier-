'use strict'

const preloader = document.querySelector("[data-preload]");

window.addEventListener("load", function(){
    preloader.classList.add("loaded");
    document.body.classList.add("loaded");  
})

const addEventOnElements = function (elements, eventType, callback){
    for (let i = 0, len = elements.length; i < len; i++){
        elements[i].addEventListener(eventType, callback);
    }
} 

const navbar = document.querySelector("[data-navbar]");
const navTogglers = document.querySelectorAll("[data-nav-toggler]");
const overlay = document.querySelector("[data-overlay]");

const toggleNavbar = function (){
    navbar.classList.toggle("active"); 
    overlay.classList.toggle("active")
    document.body.classList.toggle("nav-active")
}

addEventOnElements(navTogglers, "click", toggleNavbar)

const header = document.querySelector("[data-header]");

let lastScrollPos = 0;

const hideHeader = function(){
    const isScrollBottom = lastScrollPos < window.scrollY;
    if(isScrollBottom){
        header.classList.add("hide");
    }else{
        header.classList.remove("hide");
    }

    lastScrollPos = window.scrollY;
}

window.addEventListener("scroll", function(){
    if(this.window.scrollY >= 50){
        header.classList.add("active")
        hideHeader();
    }else{
        header.classList.remove("active")
    }
})

const heroSlider = document.querySelector("[data-hero-slider]");
const heroSliderItems = document.querySelectorAll("[data-hero-slider-item]");




















// let openShopping = document.querySelector('.shopping')
// let closeShopping = document.querySelector('.closeShopping')
// let body = document.querySelector('body')
// let Card = document.querySelector('.card')

// window.addEventListener('scroll', function(){
//     body.classList.remove('active')
//     // Card.style.display = "none"
//     hideHeader();
// })

// openShopping.addEventListener('click', ()=>{
//     body.classList.add('active')
// })

// closeShopping.addEventListener('click',()=>{
//     body.classList.remove('active')
// })