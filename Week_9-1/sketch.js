let numSw = 1;
let w;
let swSize = 360 / numSw;
let off = 0;

function setup() {
  createCanvas(800, 400);
  colorMode(HSB, 360, 100, 100);
  w = width / numSw;
  noStroke();
}

function draw() {
  background(220);
  off++;
  for (let sw = 0; sw < 36; sw++) {
    let x = sw * w;
    let h = sw * swSize + off;
    h %= 360;
    fill(h, 100, 100);
    rect(x, 0, w, height);
  }
}