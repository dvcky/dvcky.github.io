var rainbow = document.getElementById("rainbow");
var r = 255;
var g = 0;
var b = 0;

setInterval(
    for (var i = 0; i < 255; i++) {
        setInterval(
            function() {
                rainbow.style.color = "rgb(" + r + "," + g + "," + b + ")";
                g++
            }
        , 10);
    }
    for (var i = 0; i < 255; i++) {
        setInterval(
            function() {
                rainbow.style.color = "rgb(" + r + "," + g + "," + b + ")";
                r--;
            }
        , 10);
    }
    for (var i = 0; i < 255; i++) {
        setInterval(
            function() {
                rainbow.style.color = "rgb(" + r + "," + g + "," + b + ")";
                b++;
            }
        , 10);
    }
    for (var i = 0; i < 255; i++) {
        setInterval(
            function() {
                rainbow.style.color = "rgb(" + r + "," + g + "," + b + ")";
                g--;
            }
        , 10);
    }
    for (var i = 0; i < 255; i++) {
        setInterval(
            function() {
                rainbow.style.color = "rgb(" + r + "," + g + "," + b + ")";
                r++;
            }
        , 10);
    }
    for (var i = 0; i < 255; i++) {
        setInterval(
            function() {
                rainbow.style.color = "rgb(" + r + "," + g + "," + b + ")";
                b--;
            }
        , 10);
    }
)
, 15300);