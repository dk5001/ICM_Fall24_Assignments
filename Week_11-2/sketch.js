function setup() {
  createCanvas(600, 400);
}

function draw() {
  background('red');
  
  // Loop to create 20 circles
  for (let i = 0; i < 20; i++) {
    // Calculate x position by dividing canvas width into 20 equal segments
    let x = (width / 20) * i + (width / 40);
    // Place circles at vertical center
    let y = height / 2;
    
    circle(x, y, 20);
  }
}
