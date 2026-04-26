function setup() {
  createCanvas(windowWidth, windowHeight);
  stroke(0);
  strokeWeight(2);
  background("#00000000");
  angleMode(DEGREES);
  strokeCap(SQUARE);
}

let a = 0;
let r1 = 50;
let a2 = 0;

function draw() {
  push();
  translate(windowWidth / 2, windowHeight / 2);
  rotate(a);

  strokeWeight(2.5);

  line(50 + 70 * Math.abs(cos(a2)), 0, 150, 0);

  strokeWeight(1);

  line(r1 + 105 + 20 * Math.abs(cos(a2 + 90)), 0, 150, 0);

  pop();

  a = a + 2;
  a2 = a2 + 3;

  if (a >= 360) {
    noLoop();
  }
}
