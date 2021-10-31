btnMenu.addEventListener('click', openMenu)

// Menu
let menuToggle = false;

const menuWrapper = document.querySelector('.menu-wrapper')

function openMenu(){
    if(!menuToggle){
        btnMenu.classList.add('open')
        menuWrapper.style.height = "100vh";
        menuToggle = true;
    } else{
        btnMenu.classList.remove('open')
        menuWrapper.style.height = "0%";
        menuToggle = false;
    }
}