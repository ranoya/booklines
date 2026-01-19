function setup() {
  createCanvas(windowWidth, windowHeight);
  stroke(0);
  strokeWeight(2);
  background("#00000000");
  angleMode(DEGREES);
  strokeCap(SQUARE);
}

let a = 0;
let w = 1;
function draw() {
  push();
  translate(windowWidth / 2, windowHeight / 2 - 40);
  rotate(a);
  noFill();
  strokeWeight(2);

  line(100 - 60 - w, -20 - w, 100 + 32 + w, -20 - w);

  pop();

  a = a + 3;
  w = w + 0.8;

  if (a >= 452) {
    noLoop();
  }
}
