var audio = new Audio('audio/Resonance%20-%20Loneliness.mp3');

function changeImage() {
    if(document.getElementById('play').src == 'pause.jpg') {
        document.getElementById('play').src = 'play.jpg';
    } else if(document.getElementById('play').src == 'play.jpg') {
        document.getElementById('play').src = 'pause.jpg';
    }
}

function play() { 
    audio.play(); 
} 

function pause() { 
    audio.pause(); 
}