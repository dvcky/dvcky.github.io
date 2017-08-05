var isMobile;
function checkMobile() {
    if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
        isMobile = true;
    } else {
        isMobile = false;
        document.getElementById("mobile").remove();
    }
};
