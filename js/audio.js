function setCookie(c_name,value)
{
    var c_value=escape(value);
    document.cookie=c_name + "=" + c_value;
}

function getCookie(c_name)
{
    var i,x,y,ARRcookies=document.cookie.split(";");
    for (i=0;i<ARRcookies.length;i++)
    {
      x=ARRcookies[i].substr(0,ARRcookies[i].indexOf("="));
      y=ARRcookies[i].substr(ARRcookies[i].indexOf("=")+1);
      x=x.replace(/^\s+|\s+$/g,"");
      if (x==c_name)
        {
        return unescape(y);
        }
      }
}

/* audio src */
var audio = new Audio('../audio/Resonance%20-%20Loneliness%20%5Bmp3clan%5D.mp3');
var resumeTime = getCookie('resumeTime');

/* audio settings */
audio.autoplay = true;
audio.currentTime = resumeTime;
audio.loop = true;
audio.volume = 0.1;

/* audio play */
audio.play();

/* audio resume */
load()
function load() {
    setInterval(function() {
        setCookie('resumeTime', audio.currentTime);
    }, 1);
}
