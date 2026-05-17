const video = document.querySelector("#video")
const buttonPlay = document.querySelector("#button-play")
const buttonPause = document.querySelector("#button-pause")
const buttonStop = document.querySelector("#button-stop")
const buttonMute = document.querySelector("#button-mute")
const volume = document.querySelector('#volume')
const buttonParts = document.querySelectorAll('.button-part')
const buttonRewind = document.querySelector("#button-rewind")
const buttonForward = document.querySelector("#button-forward")

video.volume = 0.05;

buttonParts.forEach(item => {
    const time = item.getAttribute('data-current-time')
    item.addEventListener('click', () => {
        video.currentTime = time
        video.play()
    })
})

buttonPlay.addEventListener('click', () => video.play())

buttonPause.addEventListener('click', () => video.pause())

buttonStop.addEventListener('click', () => {
    video.pause()
    video.currentTime = 0
})

buttonMute.addEventListener('click', () => {
    if (video.muted) {
        video.muted = false;
    } else {
        video.muted = true;
    }
})

buttonRewind.addEventListener('click', () => video.currentTime -= 5)

buttonForward.addEventListener('click', () => video.currentTime += 5)

volume.addEventListener('change', () => {
    const value = volume.value
    video.volume = value / 100
})