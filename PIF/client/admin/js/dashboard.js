const sideMenu = document.querySelector('aside')
const menuBtn = document.querySelector('#menu-btn')
const closeBtn = document.querySelector('#close-btn')
const themeToggler = document.querySelector(".theme-toggler")

//show sidebar
menuBtn.addEventListener('click',()=>{
    sideMenu.style.display = 'block';
})

//close sidebar
closeBtn.addEventListener('click',()=>{
    sideMenu.style.display = 'none';   
})

//change theme
themeToggler.addEventListener('click',()=>{
    document.body.classList.toggle('dark-theme-variables');

    themeToggler.querySelector('span:nth-child(1)').classList.toggle('active');
    themeToggler.querySelector('span:nth-child(2)').classList.toggle('active');
})

// Notation des etoiles

const stars = document.querySelectorAll('.star');
stars.forEach(star => {
    star.addEventListener('mouseover', selectStars);
    star.addEventListener('mouseleave', unselectStars);
});

function selectStars(e){
    const data = e.target;
    data.classList.add('hover');
}

function unselectStars(e){
    const data = e.target;
    data.classList.remove('hover');
}