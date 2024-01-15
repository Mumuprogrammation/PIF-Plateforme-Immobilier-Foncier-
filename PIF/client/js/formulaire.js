const sign_in_btn = document.querySelector("#sign-in-btn");
const sign_up_btn = document.querySelector("#sign-up-btn");
const container = document.querySelector(".container");

sign_up_btn.addEventListener('click',()=>{
    container.classList.add("sign-up-mode");
});

sign_in_btn.addEventListener('click',()=>{
    container.classList.remove("sign-up-mode");
});


const Button1 = document.querySelector('#btn-solid')
Button1.addEventListener("click", ()=>{
    container.style.opacity = '0'
    container.classList.add('containt')
})

const Container = document.querySelector('.containt')

const X = document.querySelector('#btn-close')
X.addEventListener("click", ()=>{
    Container.style.display = 'none';
})
