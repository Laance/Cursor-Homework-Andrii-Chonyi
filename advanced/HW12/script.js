const keyS = document.querySelectorAll(".key");
const audioConst = document.querySelectorAll("audio");

window.addEventListener("keydown", playAudio);

function playAudio(e) {
    const audio = document.querySelector(`audio[id="${e.keyCode}"]`);
    const key = document.querySelector(`.key[id="${e.keyCode}"]`);
    if (!audio) return;
    audio.currentTime = 0;
    audio.play();
    key.classList.add("playing");
}

function removeTransition() {
    keyS.forEach(key => {
        if (key.classList.contains('playing')) 
        {
            key.classList.remove('playing');
        }
    });
}

keyS.forEach(key => key.addEventListener('click', 
    function() {
        removeTransition();
        const id = this.id;
        this.classList.add('playing');
        audioConst.forEach(audio => {
            if (audio.id === id) {
                audio.currentTime = 0;
                audio.play();
            }
        });
}));

keyS.forEach((key) => key.addEventListener('transitionend', removeTransition));