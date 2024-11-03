let cat; 

function preload() {
    cat = loadImage("cat.jpg");


  }
  
  function setup() {
    createCanvas(cat.width, cat.height);
  }
  
  function draw() {
    cat.loadPixels(); 

    // make every 2nd pixel green (every 8th cat.pixel)
    for (i = 0; i < cat.pixels.length; i += 8) {
      cat.pixels[i + 0] = 0;
      cat.pixels[i + 1] = 10;
      cat.pixels[i + 2] = 50;
      cat.pixels[i + 3] = 255;
    }

    // erase horizontal line 
    for (x = 0; x < cat.width; x++) {
      for (y = 0; y < cat.height; y++) {
        let j = (x + y * cat.width) * 4;
        
        if ((y <= cat.height/2 + 5) && (y >= cat.height/2 - 5)) {
          cat.pixels[j + 3] = 0;  // only alpha
        }
      }
     }

     // make blue vertical line 
     for (x = 0; x < cat.width; x++) {
      for (y = 0; y < cat.height; y++) {
        let k = (x + y * cat.width) * 4;
        
        if ((x <= cat.width/2 + 5) && (x >= cat.width/2 - 5)) {
          cat.pixels[k + 0] = 0;
          cat.pixels[k + 1] = 255;
          cat.pixels[k + 2] = 0;
          cat.pixels[k + 3] = 50;
        }
      }
     } 

    cat.updatePixels();
    image(cat, 0, 0);
  }