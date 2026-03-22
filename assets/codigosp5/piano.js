function setup() {
  createCanvas(windowWidth, windowHeight);
  stroke(0);
  background("#00000000");
  angleMode(DEGREES);
  strokeCap(PROJECT);
}

let partes = 36;
let s1 = 1;
let s2 = partes / 2;
let a = 0;
function draw() {
  push();
  translate(windowWidth / 2, windowHeight / 2);
  rotate(a);

  strokeWeight(s1);
  line(80, s1 / 2, 145, s1 / 2);

  s1 = s1 + 0.3;

  strokeWeight(s2);
  line(150, s2 / 2, 200, s2 / 2);

  s2 = s2 - 0.48;

  pop();

  a = a + 360 / partes;

  if (a >= 360) {
    noLoop();
  }
}
