function help() {
    console.log(`[DKY] COMMAND LIST:`);
    console.log(`[DKY] help()            - Shows all commands and explains them.`);
    console.log(`[DKY] getImageData(url) - Gets image filename, width, and height.`);
}

function getImageData(url) {
    var img = new Image();
    img.src = url;

    console.log(`[DKY] Loading image data...`);
    
    img.onload = function(){
        
        var filename = url.split('/').pop();
        var height   = img.height;
        var width    = img.width;
        
        console.log(`[DKY] Image Data loaded!`);
        console.log(`[DKY] Filename: ` + filename);
        console.log(`[DKY] Width:    ` + width);
        console.log(`[DKY] Height:   ` + height);
    };
}

console.log(`[DKY] Ducky's Console is running! Type 'help()' for commands.`);