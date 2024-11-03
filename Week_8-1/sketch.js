let width = 200;
let height = 200; 

function setup() {
  createCanvas(width, height);
  stroke('red');
  for (let x = 0; x < width; x++){
    for (let y = 0; y < height; y++){
      point(x, y)
    }
  }
}

function draw() {
  background('red');
  rect(50, 50, 100, 100);
}