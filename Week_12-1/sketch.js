let str = "I wish to wash my Irish wristwatch";
console.log(str, str.length, str.charAt(0));
let c = 0;
let x = 0;
let y = 0;
let sizeSlider;
let speedSlider;
let clearButton;

function setup() {
  createCanvas(windowWidth, windowHeight);
  textAlign(LEFT, TOP);
  
  // Create a paragraph element
  createP(str);
  
  // Create a slider element for text size
  sizeSlider = createSlider(10, 250, 64);
  sizeSlider.position(10, 10);
  
  // Create a slider element for speed
  speedSlider = createSlider(2, 60, 20);
  speedSlider.position(10, 40);
  
  // Create a button element to clear the canvas
  clearButton = createButton('Clear Canvas');
  clearButton.position(10, 70);
  clearButton.mousePressed(clearCanvas);
}

function draw() {
  // Get the value from the speed slider
  let speedValue = speedSlider.value();
  
  if(frameCount % speedValue == 1) {
    // Get the value from the size slider
    let textSizeValue = sizeSlider.value();
    textSize(textSizeValue);
    
    // Get the character from the string
    let character = str.charAt(floor(c));
    
    // Calculate the width of the character
    let w = textWidth(character);
    
    // Calculate the height of the character
    let h = textAscent() + textDescent();
    
    // Wrap around, make space for the last character
    if( x > width - w) {
      x = 0;
      y += textAscent() + textDescent();
    }
    
    // Draw the character to the canvas
    text(character, x, random(height - h));
    
    // Shift over to the right
    x += w;
    
    // Advance to the next character
    c++;
    c%=str.length;
  }
}

function clearCanvas() {
  background(255); // Clear the canvas by setting it to white
  c = 0; // Reset the character index
  x = 0; // Reset the x position
  y = 0; // Reset the y position
}