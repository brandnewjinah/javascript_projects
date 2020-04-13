document.addEventListener('keydown', function(e){
    const beats = document.querySelector(`audio[data-loop="${e.keyCode}"]`);
    const beats_key = document.querySelector(`.bkey[data-loop="${e.keyCode}"]`);
    if(beats) {
        stopMusic();
        stopStyle();
        beats.currentTime = 0;
        beats.play();
        beats.loop = true;
        beats_key.classList.add('beats_playing'); 
    }
})

document.addEventListener('keydown', function(e){ 
    const effects = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const effects_key = document.querySelector(`.ekey[data-key="${e.keyCode}"]`);
    if(!effects) {
        return;  
    }
    else {
        effects.currentTime = 0;
        effects.play();
        effects_key.classList.add('effects_playing');
    }
})

document.addEventListener('keydown', function(e){
    if(e.keyCode == 32) {
        stopMusic();
        stopStyle();
    }
})

const allAudio = document.querySelectorAll('audio');

function stopMusic(){
    allAudio.forEach(function(music){
        music.pause();
    })
}

const bpressStyle = document.querySelectorAll('.bkey');
function stopStyle(){
    bpressStyle.forEach(function(style){
        style.classList.remove('beats_playing');
    })
}

function removeTransition(e){
    if(e.propertyName !== 'transform') return;
    this.classList.remove('effects_playing');
}

const epressStyle = document.querySelectorAll('.ekey');
    epressStyle.forEach(function(style){
        style.addEventListener('transitionend', removeTransition)
})