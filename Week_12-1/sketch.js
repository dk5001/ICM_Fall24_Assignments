let str = 'I dunk I dunk \nI dunk I dunk I dunk';
let x, y, c = 0;

console.log(str.charAt(1));

function setup() {
  createCanvas(400, 400);
  textSize(36);
  textAlign(LEFT, TOP);
}

function draw() {
  // background(220);
  if (frameCount % 10 == 1) {
    let ch = str.charAt(c);
    x += textWidth(ch);
    if (x > width) {
      x = 0;
      y += textAscent() + textDecent();
      background("white");
    }  
    c++;
    c %= str.length;
  }
  // text(ch, x, random(y));

  // text(str, 0, 200)
  // for (let c = 0; c < str.length; c++) {
  //   let ch = str.charAt(c);
  //   text(ch, x, y);
  //   x += textWidth(ch);
  //   if (x > width) {
  //     x = 0;
  //     y += textAscent() + textDecent();
  //   }
  // }
}