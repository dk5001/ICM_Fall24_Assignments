let mic;
let fft;

function setup() {
  createCanvas(600, 400);
  mic = new p5.AudioIn();
  mic.start();
  
  fft = new p5.FFT();
  fft.setInput(mic);
}

function draw() {
  background(255);

  // 1. Amplitude
  // let level = mic.getLevel() * 1000;
  // console.log(level);
  // ellipse(width/2, height/2, level, level);
  
  // let bins = fft.analyze();
  // for (let b = 0; b < bins.length; b++) {
  //   let bin = bins[b];
  //   line(b, height - bin, b, height);
  // }
  
  // 2. Waveform
  let wave = fft.waveform();
  // console.log(stuff);
  beginShape();
for (let w = 0; w < wave.length; w++) {
  let y = wave[w] * 200 + height/2;
  vertex(w, y);
  }
endShape();
}