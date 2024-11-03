let vid;
let showCanvas;
let showStroke;
let thresholdSlider;

function setup() {
  createCanvas(400, 400);
  vid = createCapture(VIDEO,{flipped:true}); // flip horizontally 
  vid.hide();
  // vid = createCapture(VIDEO, function() {
  //   vid.hide(); // Hide the original video element
  // });
  // // videoHide();

  thresholdSlider = createSlider(0, 255, 100);
  showCanvas = createCheckbox('show', true);
  showStroke = createCheckbox('stroke', true);
}

function draw() {
  if (showCanvas.checked()) {
    // Mirror the video -> not working????
    push();
    translate(width, 0);
    scale(-1, 1);
    image(vid, 0, 0, width, height);
    pop();
    
    vid.loadPixels();

    if (showStroke.checked()) {
      stroke(0);
    } else {
      noStroke();
    }

    let threshold = thresholdSlider.value();
    
    for (x = 0; x < vid.width; x += 20) {
      for (y = 0; y < vid.height; y += 20) {
        var index = (x + y * vid.width) * 4;
        var r = vid.pixels[index + 0];
        var g = vid.pixels[index + 1];
        var b = vid.pixels[index + 2];
        var a = vid.pixels[index + 3];

        var brightVal = (r + g + b) / 3;

        if (brightVal >= threshold) {
          fill(255);
        } else {
          fill(0);
        }
        rect(x, y, 20, 20);
      }
    }
  } else {
    // Draw white background when checkbox is unchecked
    background(255);
  }

  // for (let i = 0; i < vid.pixels.length; i+=4){
  //   for (let x = 0; x < width; x+=40){
  //     for (let y = 0; y < width; y+=40){
  //       let r = vid.pixels[i+0];
  //       let g = vid.pixels[i+1];
  //       let b = vid.pixels[i+2];
  //       let a = vid.pixels[i+3];
  //     }
  //   }
  // }
}