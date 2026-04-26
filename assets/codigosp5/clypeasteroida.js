function setup() {
  createCanvas(windowWidth, windowHeight);
  stroke(0);
  strokeWeight(2);
  background("#00000000");
  angleMode(DEGREES);
  strokeCap(SQUARE);
}

let a = 180;
let r1 = 50;
let a2 = 0;

function draw() {
  push();
  translate(windowWidth / 2, windowHeight / 2);
  rotate(90 + a);

  strokeWeight(3);

  line(80 + r1 + cos(a2) * 80, 0, 140 + r1, 0);

  strokeWeight(1);

  line(20 + r1 / 2 + cos(a2), 0, 80 + r1 + cos(a2) * 80, 0);

  pop();

  a = a + 2;
  a2 = a2 + 10;

  if (a >= 540) {
    noLoop();
  }
}
