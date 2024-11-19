let mic;
let recorder;
let sounds = []; // Array to store multiple sound files
let state = 0;
let lastStateChange = 0;
const RECORD_PLAY_INTERVAL = 2000;  // 4 seconds for recording/playing
const PROCESS_INTERVAL = 10;        // 10ms for processing (extremely short)
let startTime = 0;
let timerStarted = false;

function setup() {
  createCanvas(400, 400);
  mic = new p5.AudioIn();
  recorder = new p5.SoundRecorder();
  recorder.setInput(mic);
  mic.start();
  
  textAlign(CENTER, CENTER);
  background('green');
  text('Recording will start automatically...', width / 2, height / 2);
  
  lastStateChange = millis();
  startTime = millis(); // Initialize startTime right away
}

function draw() {
  let currentTime = millis();
  let currentInterval = (state === 2) ? PROCESS_INTERVAL : RECORD_PLAY_INTERVAL;
  
  if (currentTime - lastStateChange >= currentInterval) {
    changeState();
  }
  
  // Clear background first
  if (state == 1) {
    background('red');
  } else if (state == 2) {
    background('gray');
  } else {
    background('green');
  }
  
  // Total time display - larger size
  textAlign(CENTER, TOP);
  textSize(32);  // Larger size for total time
  let elapsedSeconds = Math.floor((currentTime - startTime) / 1000);
  let minutes = Math.floor(elapsedSeconds / 60);
  let seconds = elapsedSeconds % 60;
  let totalTimeString = minutes.toString().padStart(2, '0') + ':' + 
                        seconds.toString().padStart(2, '0');
  text(totalTimeString, width/2, 20);
  
  // State timer display - medium size
  textAlign(CENTER, CENTER);
  textSize(24);  // Medium size for countdown
  let timeElapsed = currentTime - lastStateChange;
  let secondsLeft = ((currentInterval - timeElapsed) / 1000).toFixed(3);
  text(secondsLeft + 's', width/2, height/2 - 30);
  
  // Status text - smaller size
  textSize(16);  // Smaller size for status
  if (state == 1) {
    text('Recording...', width/2, height/2);
  } else if (state == 2) {
    text('Processing...', width/2, height/2);
  } else {
    text('Playing... (' + sounds.length + ' layers)', width/2, height/2);
  }
}

function changeState() {
  state++;
  state %= 3;
  lastStateChange = millis();
  
  console.log('Current state:', state);
  if (state == 1) {
    // Start new recording
    console.log('Starting new recording...');
    let newSound = new p5.SoundFile();
    sounds.push(newSound);
    recorder.record(newSound);
    background('red');
    text('Recording...', width/2, height/2);
    
  } else if (state == 2) {
    // Processing state
    recorder.stop();
    // Force immediate change to next state
    lastStateChange = lastStateChange - PROCESS_INTERVAL;  // This ensures immediate transition
    
  } else {
    // Play all recorded sounds
    console.log('Playing recorded sounds. Total layers:', sounds.length);
    let currentSound = sounds[sounds.length - 1];
    if (currentSound) {
      currentSound.loop();
    }
    background('green');
    text('Playing... (' + sounds.length + ' layers)', width/2, height/2);
  }
}