var clicks = 0;
function onClick() {
    clicks += 1;
    document.getElementById("clicks").innerHTML = clicks;
}
sleep(10000);
var cps = clicks / 10;
document.getElementById("cps").innerHTML = cps;
