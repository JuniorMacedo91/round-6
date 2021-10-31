const introSection =document.querySelector('.intro-section')
const btnEnter = document.querySelector('.btn-enter')
const btnLeave= document.querySelector('.btn-leave')

btnEnter.addEventListener('click',creatGeometricShapes )
btnEnter.addEventListener('click', playAudio)
btnEnter.addEventListener('click', enterWebSite)
btnLeave.addEventListener('click', leaveWebSite)

function creatGeometricShapes(){
    const body = document.querySelector('body')
    const shapes = document.createElement('span')

    shapes.innerHTML += '<i class="shape far fa-circle"></i> ';
    shapes.innerHTML += '<i class="shape fas fa-play"></i> ';
    shapes.innerHTML += '<i class="shape far fa-square"></i> ';

    let size = Math.random() * 10;
    shapes.style.fontSize = `${size}rem`;

    body.appendChild(shapes)

    setInterval(creatGeometricShapes, 2000)
    
    settimeout(() => {
        shapes.remove()
    }, 6000);
}


function playAudio(){
    const greenLighSong = document.querySelector('#greenLighSong')
    greenLighSong.play();
}

function enterWebSite(){
    setTimeout(()=>{
        location.href = "home.html"
    }, 10000)
}

function leaveWebSite(){
    introSection.classList.add('fadeOut')
    setTimeout(()=>{
        location.href = "leave.html"
    }, 3000)
}