let playPause = 
anime({
    targets: 'div.box',
    translateY: [
        {value: 200, duration: 1000},
        {value: 0, duration: 800} 
    ],
    rotate: {
        value: '1turn',
        easing: 'easeInOutSine'
    },
    opacity: '0.5',
    borderRadius: '20%',
    border: '2px solid black',
    delay: function(el, i, l){return i * 1000},
    autoplay: false,
    loop: true
})


document.querySelector('.play').onclick = playPause.play
document.querySelector('.pause').onclick = playPause.pause 

const stopBtn = document.getElementById('stop')
stopBtn.addEventListener('click', stop)

function stop(){
    location. reload()
}

