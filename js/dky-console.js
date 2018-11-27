function clear() {
    location.reload();
}

function help() {
    console.log(`COMMAND LIST:`);
    console.log(`clear()           - Clears console.`);
    console.log(`help()            - Shows all commands and explains them.`);
    console.log(`getImageData('url') - Gets image filename, width, and height.`);
}

function getImageData(url) {
    var img = new Image();
    img.src = url;

    console.log(`Loading image data...`);
    
    img.onload = function(){
        
        var filename = url.split('/').pop();
        var height   = img.height;
        var width    = img.width;
        
        console.log(`Image Data loaded! Variables saved.`);
        console.log(`--------[VARIABLES]--------`);
        console.log(`url:      ` + url);
        console.log(`filename: ` + filename);
        console.log(`width:    ` + width);
        console.log(`height:   ` + height);
        
        document.getElementById("image").src = url;
        document.getElementById("link").innerHTML = filename;
        document.getElementById("link").href = url;
        document.getElementById("resolution").innerHTML = width + " x " + height;
    };
}

console.log(`Ducky's Console script is running! Type 'help()' for commands.`);