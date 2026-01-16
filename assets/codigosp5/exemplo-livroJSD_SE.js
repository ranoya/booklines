function setup() {
  createCanvas(windowWidth, windowHeight);
  stroke(0);
  background("#00000000");
  angleMode(DEGREES);
}

let a = 0;
function draw() {
  push();
  translate(windowWidth / 2, windowHeight / 2);
  rotate(a);
  line(120, 0, -50, 190);
  pop();

  a = a + 3;

  if (a >= 360) {
    noLoop();
  }
}
