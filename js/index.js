const introSection = document.querySelector('.intro-section')
const btnEnter = document.querySelector('.btn__enter')
const btnLeave= document.querySelector('.btn__leave')
const titleWrapper = document.querySelector('.title-wrapper')

btnEnter.addEventListener('click',creatGeometricShapes )
btnEnter.addEventListener('click', enterWebSite)
btnEnter.addEventListener('click', playGreenLighSong)
btnLeave.addEventListener('click', leaveWebSite)
btnLeave.addEventListener('click', playHorrorEffect)

function creatGeometricShapes(){
    const body = document.querySelector('body')
    const shapes = document.createElement('span')

    shapes.innerHTML += '<i class="shape far fa-circle"></i> ';
    shapes.innerHTML += '<i class="shape fas fa-play"></i> ';
    shapes.innerHTML += '<i class="shape far fa-square"></i> ';

    let size = Math.random() * 10;
    shapes.style.fontSize = `${size}rem`;

    body.appendChild(shapes)

    setInterval(creatGeometricShapes, 3000)
    
    settimeout(() => {
        shapes.remove()
    }, 6000);
}

function enterWebSite(){

    titleWrapper.innerHTML = `<div class="d-flex justify-content-center flex-column align-items-center">
        <span class="emphasised-text display-2 lh-lg">Carregando</span>
        <div class="spinner-border text-danger" style="width: 4rem; height: 4rem;">
            <span class="visually-hidden"></span>
        </div>
        </div>`;

    setTimeout(()=>{
        location.href = "home.html";
    }, 10000)
}

function leaveWebSite(){
    introSection.classList.add('fadeOut')
    setTimeout(()=>{
        location.href = "leave.html"
    }, 4000)
}

function playGreenLighSong(){
    const greenLighSong = document.querySelector('#greenLighSong')
    greenLighSong.play();
}

function playHorrorEffect(){
    const greenLighSong = document.querySelector('#horrorEffect')
    greenLighSong.play();
}