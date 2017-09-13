function changeSound() {
	var audio = document.getElementById("audio");
	var source = document.getElementById("source");
	var sound = document.getElementById("sound").value;
	
	source.src = sound
	
	audio.load();
	audio.play();
}
