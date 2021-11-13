const introSection = document.querySelector('.intro-section')
const btnEnter = document.querySelector('.btn__enter')
const btnLeave= document.querySelector('.btn__leave')
const titleWrapper = document.querySelector('.title-wrapper')
const buttonBox = document.getElementById('button-box')

btnEnter.addEventListener('click', () =>{
    creatGeometricShapes();
    enterWebSite();
    playGreenLighSong();
})

btnLeave.addEventListener('click', ()=>{
    leaveWebSite();
    playHorrorEffect();
})

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
    
    setTimeout(() => {
        shapes.remove()
    }, 6000);
}

function enterWebSite(){

    buttonBox.style.display="none";

    titleWrapper.innerHTML = `<div class="d-flex justify-content-center flex-column align-items-center">
        <span class="emphasised-text fs-1">Carregando</span>
        <div class="spinner-border text-danger" style="width: 2rem; height: 2rem;">
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