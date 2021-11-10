const menuBurguer = document.querySelector('.menu-btn')

menuBurguer.addEventListener('click', openMenu)

let menuToggle = false;

function openMenu(){
    if(!menuToggle){
        menuBurguer.classList.add('open')
        menuToggle = true;
    }else{
        menuBurguer.classList.remove('open')
        menuToggle = false;
    }
}
