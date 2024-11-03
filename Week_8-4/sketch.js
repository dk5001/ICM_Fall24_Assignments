function setup() {
  createCanvas(400, 400);
  colorMode(HSB, 360, 100, 100); // change color mode to HSB
  
  showCanvas = createCheckbox('show', true);
  showStroke = createCheckbox('stroke', false);
  thresholdSlider = createSlider(0, 100, 50);
}

function draw() {
  if (showCanvas.checked()) {
    if (showStroke.checked()) {
      stroke(125);
      strokeWeight(0.3);
    } else {
      noStroke();
    }
    
    let threshold = thresholdSlider.value();
    let cols = threshold;
    let rows = threshold;
    let cellWidth = width / cols;
    let cellHeight = height / rows;
    
    for (let y = 0; y < rows; y++) {
      for (let x = 0; x < cols; x++) {
        let hue = map(x, 0, cols - 1, 0, 360);
        let saturation = map(y, 0, rows - 1, 100, 0);
        fill(hue, saturation, 100);
        rect(x * cellWidth, y * cellHeight, cellWidth, cellHeight);
      }
    }
  } else {
    background(0, 0, 100); // White background in HSB
  }
}