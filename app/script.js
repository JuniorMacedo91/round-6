const btnEnter = document.querySelector('.btn-enter')

btnEnter.addEventListener('click',creatGeometricShapes )
btnEnter.addEventListener('click', playAudio)

function creatGeometricShapes(){
    const introSection = document.querySelector('body')
    const shapes = document.createElement('span')

    shapes.innerHTML += '<i class="shape far fa-circle"></i> ';
    shapes.innerHTML += '<i class="shape fas fa-play"></i> ';
    shapes.innerHTML += '<i class="shape far fa-square"></i> ';

    let size = Math.random() * 10;
    shapes.style.fontSize = `${size}rem`;

    introSection.appendChild(shapes)

    setInterval(creatGeometricShapes, 2000)
    
    settimeout(() => {
        shapes.remove()
    }, 7000);
}


function playAudio(){
    const greenLighSong = document.querySelector('#greenLighSong')
    greenLighSong.play()
}
