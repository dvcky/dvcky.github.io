var script = document.createElement('script');
script.src = 'http://code.jquery.com/jquery-1.11.0.min.js';
script.type = 'text/javascript';
document.getElementsByTagName('head')[0].appendChild(script);

$.getJSON("//api.eloot.gg/account/get", function (data) {
    console.log(data);
});
