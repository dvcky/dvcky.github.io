/* audio src */
var audio = new Audio('../audio/Resonance%20-%20Loneliness%20%5Bmp3clan%5D.mp3');
var load = document.cookie;

/* audio settings */
audio.autoplay = true;
audio.currentTime = load;
audio.loop = true;
audio.volume = 0.1;

/* audio play */
audio.play();

/* audio resume */
load()
function load() {
    setInterval(function() {
        /* loop */
        document.cookie = audio.currentTime;
    }, 1);
}
