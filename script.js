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
    delay: function(el, i, l){return i * 1000},
    autoplay: false
})


document.querySelector('.play').onclick = playPause.play
document.querySelector('.pause').onclick = playPause.pause 

function stop(){
    location. reload()
}

