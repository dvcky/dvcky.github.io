function setContentHeight() {     
    setInterval(
        function(){
            var windowHeight = window.innerHeight;
            var topOfDiv = document.getElementById("center").offsetTop;
            var divHeight = windowHeight - topOfDiv + 192;
            var contentHeight = divHeight - 64;
        
            console.log("Window height: " + windowHeight + "px");
            console.log("Top of div: " + topOfDiv + "px");
            console.log("Div height: " + divHeight + "px");
            console.log("Content height: " + contentHeight + "px");
            document.getElementById("center").style.height = divHeight;
            document.getElementById("content").style.height = contentHeight;
            document.getElementById("home").style.height = contentHeight;
            document.getElementById("page1").style.height = contentHeight;
            document.getElementById("page2").style.height = contentHeight;
        }
    , 1000);
}