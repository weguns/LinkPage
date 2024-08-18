// alert('Page is currently only available on desktop.\nGame Controls => D:Right A:Left Space:Jump')

const object = document.getElementById('object');
const jumpBut = document.querySelector('#jump');
const rightBut = document.querySelector('#right');
const leftBut = document.querySelector('#left');

document.body.addEventListener('keydown', (e) => handelGameMoves(e))
document.body.addEventListener('keyup', (e) => {
    if (e.keyCode === 68 || e.keyCode === 65) {
        object.classList.add('stop');
        object.classList.remove('move');
    }

    if (e.keyCode === 65) {
        leftBut.classList.remove('activeBut');
        leftBut.classList.add('deactivateBut');
    } else if (e.keyCode === 68) {
        rightBut.classList.remove('activeBut');
        rightBut.classList.add('deactivateBut');
    } else if (e.keyCode === 32) {
        jumpBut.classList.remove('activeBut');
        jumpBut.classList.add('deactivateBut');
    }
})

let objectXPos = 0;
let objectAlign = 1;

function handelGameMoves(e) {
    if (e.keyCode === 65) {
        objectXPos -= 7.5;
        objectAlign = -1;
    } else if (e.keyCode === 68) {
        objectXPos += 7.5;
        objectAlign = 1;
    } else if (e.keyCode === 32) {
        object.classList.add('jump');
        setTimeout(() => {
            object.classList.remove('jump')
            object.classList.add('stop');
            object.classList.remove('move');
        }, 1000)
    }

    if (e.keyCode === 65 || e.keyCode === 68 || e.keyCode === 32) {
        object.classList.remove('stop');
        object.classList.add('move')
    }

    if (e.keyCode === 65) {
        leftBut.classList.add('activeBut');
        leftBut.classList.remove('deactivateBut');
    } else if (e.keyCode === 68) {
        rightBut.classList.add('activeBut');
        rightBut.classList.remove('deactivateBut');
    } else if (e.keyCode === 32) {
        jumpBut.classList.add('activeBut');
        jumpBut.classList.remove('deactivateBut');
    }
    object.style.transform = `translateX(${objectXPos}px) scaleX(${objectAlign})`;
    console.log(e.keyCode)
}