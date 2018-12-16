function detectContentHeight() {
    setInterval(
        function(){
            var topOfContent = $('.content').offset().top;
            var bottomOfWindow = $(document).height();
            var contentHeight = bottomOfWindow - topOfContent;
        
            $('.content').css('height', contentHeight);
        }, 
    100);
}