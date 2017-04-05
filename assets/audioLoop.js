function audioLoop(url) {
	var audioLoop = document.getElementById(url);
	audio.loop=true;
	audio.load();
	audio.play();
}