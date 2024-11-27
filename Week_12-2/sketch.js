let words = [];
let str = '';
let p;
let frameSlider;
let fontSize = 30; // Starting font size
const MIN_FONT_SIZE = 2;

function preload() {
  loadStrings('Butter.txt', process);
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  
  // Create fixed container for slider
  let controlsDiv = createDiv('');
  controlsDiv.style('position', 'fixed');
  controlsDiv.style('top', '0');
  controlsDiv.style('left', '0');
  controlsDiv.style('padding', '3px');
  controlsDiv.style('background-color', 'rgba(255,255,255,0.8)');
  controlsDiv.style('z-index', '100');
  
  // Create slider inside container
  frameSlider = createSlider(2, 60, 30);
  frameSlider.parent(controlsDiv);
  
  // Create paragraph below controls
  p = createP();
  p.position(10, 30);
  p.style('font-size', fontSize + 'px');
  p.style('margin', '0');
  p.style('padding', '0');
  p.style('max-width', (windowWidth - 20) + 'px'); // Account for padding
}

function draw() {
  let interval = frameSlider.value();
  
  // Add new word every interval frames
  if (frameCount % interval == 1) {
    str += random(words) + ' ';
    p.html(str);
    
    // Check if text exceeds canvas bounds
    let textBounds = p.elt.getBoundingClientRect();
    if (textBounds.bottom > windowHeight || textBounds.right > windowWidth) {
      // Reduce font size gradually
      fontSize = Math.max(fontSize * 0.99, MIN_FONT_SIZE);
      p.style('font-size', fontSize + 'px');
    }
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  p.style('max-width', (windowWidth - 20) + 'px');
}

function process(lines) {
  // console.log('Processing lines');
  // Go line by line by value
  for (let line of lines) {
    // Turn each line into an array of words
    let tokens = splitTokens(line);
    // Add it to 1 big array
    words = words.concat(tokens);
  }
  // console.log('Words before cleaning:', words);
  // Go word by word, by index
  // Clean up each word
  for (let w = words.length-1; w >= 0; w--) {
    let word = words[w];
    // Remove punctuation
    word = word.replace(/[-_:;.,!?()]/g, "");
    // Make it all lowercase
    word = word.toLowerCase();
    // Get rid of whitespace around the word
    word = word.trim();
    // If nothing is left, get rid of it
    if (word.length < 1) words.splice(w, 1);
    // Otherwise put cleaned up word back in array
    else words[w] = word;
  }
  // console.log('Words after cleaning:', words);
}