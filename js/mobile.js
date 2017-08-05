var isMobile;
function checkMobile() {
    if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
        isMobile = true;
        document.getElementById("content").remove();
        document.getElementById("menu").remove();
    } else {
        isMobile = false;
        document.getElementById("mobile").remove();
    }
};
