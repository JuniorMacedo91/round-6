const menuWrapper = document.querySelector('.menu-wrapper')
const menuBurguer = document.querySelector('.menu-btn')

menuBurguer.addEventListener('click', openMenu)

let menuToggle = false;

function openMenu(){
    if(!menuToggle){
        menuBurguer.classList.add('open')
        menuWrapper.style.height = "100vh"
        menuToggle = true;
    }else{
        menuBurguer.classList.remove('open')
        menuWrapper.style.height = "0%"
        menuToggle = false;
    }
}
