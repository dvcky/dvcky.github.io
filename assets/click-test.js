var clicks = 0;
var cps;
var isDone = false;
var millisec = 0;
var seconds = 0;
var timer;

function onClick() {
    clicks += 1;
    document.getElementById("clicks").innerHTML = clicks;
}

function display(){

  if (seconds>=10) {
     isDone = true
  }
  if (isDone) {
	cps = clicks / 10
	document.getElementById("results").innerHTML = "Your average CPS is " + cps + <a href="click-test.html">Retry</a>;
    document.getElementById("status").remove();
  }
  if (millisec>=9){
     millisec=0
     seconds+=1
  }
  else
     millisec+=1
     document.getElementById("stopwatch").innerHTML = seconds + "." + millisec;
     timer = setTimeout("display()",100);
  }

function starttimer() {
  isDone = false
  if (timer > 0) {
	return;
  }
  display();	
}