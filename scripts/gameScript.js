alert('Page is currently only available on desktop.\nGame Controls => D:Right A:Left Space:Jump')

const object = document.getElementById('object');

document.body.addEventListener('keydown', (e) => handelGameMoves(e))
document.body.addEventListener('keyup', (e) => {
    if (e.keyCode === 68 || e.keyCode === 65) {
        object.classList.add('stop');
        object.classList.remove('move');
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
    object.style.transform = `translateX(${objectXPos}px) scaleX(${objectAlign})`;
    console.log(e.keyCode)
}
