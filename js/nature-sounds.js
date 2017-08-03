var dropdown = document.getElementById("dropdown");
dropdown.onchange = function() {
    var audio = document.getElementById('audio');
    var source = document.getElementById('source');
    source.src = dropdown.value;

    audio.load();
    audio.play();
};