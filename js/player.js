var audio = new Audio('audio/Resonance%20-%20Loneliness.mp3');

function changeImage() {
    if(document.getElementById('player').src == 'pause.jpg') {
        document.getElementById('player').src = 'play.jpg';
    } else if(document.getElementById('player').src == 'play.jpg') {
        document.getElementById('player').src = 'pause.jpg';
    }
}

function play() { 
    audio.play(); 
} 

function pause() { 
    audio.pause(); 
}