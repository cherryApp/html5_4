// Canvas kitöltése.
function fillCanvas() {
    
    // Kiválasztjuk a keretet.
    var canvas = document.querySelector( "#myCanvas" );
    var context = canvas.getContext( "2d" );
    context.fillStyle = "#ff0000";
    context.fillRect( 10, 10, 180, 80 );
    
}

// Kitöltés indítása.
// fillCanvas();

// Kép betöltése.
function fillImg() {
    
    // Kiválasztjuk a keretet.
    var canvas = document.querySelector( "#myCanvas" );
    var context = canvas.getContext( "2d" );
    
    // Vonal rajzolása.
    context.moveTo( 100, 100 );
    context.lineTo( 300, 100 );
    context.stroke();
    
    // Kör rajzolása.
    context.beginPath();
    context.arc( 200, 50, 40, 0, 2*Math.PI );
    context.stroke();
    
    // Kép kiválasztása.
    var img = document.querySelector( "#myImg" );
    context.drawImage( img, 0, 0 );    
    
}

fillImg();