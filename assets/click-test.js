var clicks = 0;
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
	
  if (timer > 0) {
	return;
  }
  display();	
}

function cleartimer() {
    stoptimer();
	millisec = 0;
	seconds = 0;
}
function stoptimer() {
    clearTimeout(timer);
    timer = 0;
}