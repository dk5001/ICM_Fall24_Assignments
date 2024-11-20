let str = '';
let p;
// words = [];

function preload() {
  words = loadStrings('turkey.txt');
}

function setup() {
  noCanvas();
  p = createP('');
}

function draw() {
  if (frameCount % 30 == 1) {
    str += random(words) + ' ';
    p.html(str);
  }
}

function process(lines) {
  console.log(lines);
  for (let line of lines) {
    console.log('before', line);
    let tokens = splitTokens(line);
    console.log('tokens', tokens);
    words.push(...tokens); 
  }

  for (let word of words) {
    console.log('before', word);
    word = word.trim();
    word = word.toLowerCase();
    word = word.replace(/[-_:;.,()?!s]/g, '');
    console.log('after', word);
  }
}
