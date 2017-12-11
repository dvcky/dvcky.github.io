var centiseconds = 0;
var clicks = 0;
var cps = 0;
var deciseconds = 0;
var isDone = false;
var seconds = 0;
var stopwatch = 0;

function display(){

    if (seconds>=10) {
        isDone = true
    }
    if (isDone) {
        cps = clicks / 10
	document.getElementById("button").remove();
        document.getElementById("status").remove();
        document.getElementById("result").innerHTML = "Your average CPS is " + cps + ". <a href='#'>Retry?</a>";
    }

    if (deciseconds >= 9) {
        deciseconds = 0
        seconds += 1
    } else if (centiseconds >= 9){
        centiseconds = 0
        deciseconds += 1
    } else
        centiseconds+=1
        document.getElementById("stopwatch").innerHTML = seconds + "." + deciseconds + centiseconds;
        stopwatch = setTimeout("display()",10);

}

function onClick() {
	
    clicks += 1;
    document.getElementById("clicks").innerHTML = clicks;

}

function onStart() {

    if (stopwatch > 0) {
        return;
	}

    display();

}
