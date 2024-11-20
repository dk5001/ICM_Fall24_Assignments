let word_count = {};

function preload() {
  loadStrings('america.txt', process);
}

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(220);
  for (let word in word_count) {
    let wc = word_count[word];

    textSize(wc * 10);
    text(word, random(width), random(height));
  }
  noLoop();
}

function process(lines) { 
  for (let line of lines) {
    let tokens = splitTokens(line);
    words.push(...tokens);
  }

  for (let w of words) {
    let word = words[w];
    word = word.trim();
    word = word.toLowerCase();
    word = word.replace(/[-_:;.,()?!s]/g, '');
    word[w] = word;
  }

  for (let word of words) {
    if (word in word_count) {
      word_count[word]++;
    } else {
      word_count[word] = 1;
    }
  }
  console.log(words);
}