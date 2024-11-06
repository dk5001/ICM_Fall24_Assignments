let drums = [];

function preload() {
  for (let d = 0; d < 7; d++) {
    drums[d] = loadSound("drums/" + d + ".mp3");
  }
}

function setup() {
  createCanvas(400, 400);
  console.log(drums.length);
}

function draw() {
  background(220);
}