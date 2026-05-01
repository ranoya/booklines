function setup() {
  createCanvas(windowWidth, windowHeight);
  stroke(0);
  background("#00000000");
  angleMode(DEGREES);
  strokeCap(PROJECT);
}

let partes = 100;
s = 0;

r1 = 0.1;
r2 = 5;

let a = 0;
function draw() {
  push();
  translate(windowWidth / 2, windowHeight / 2);
  rotate(a);

  d = parseInt(Math.random() * 50);

  strokeWeight(r1);

  line(s + 20, 0, 90 + s, 0);

  strokeWeight(r2);
  line(-20 - s, 0, -90 - s, 0);
  s = s + 1;

  r1 = r1 + 4 / partes;
  r2 = r2 - 4 / partes;

  if (r2 <= 0) {
    r2 = 0.1;
  }

  pop();

  a = a + 360 / partes;

  if (a >= 451) {
    noLoop();
  }
}
