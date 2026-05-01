function setup() {
  createCanvas(windowWidth, windowHeight);
  stroke(0);
  background("#00000000");
  angleMode(DEGREES);
  strokeCap(PROJECT);
}

let partes = 200;
let d = 0;

let a = 0;
function draw() {
  push();
  translate(windowWidth / 2, windowHeight / 2);
  rotate(a);

  d = parseInt(Math.random() * 50);

  strokeWeight(2);
  for (x = 80; x < 200; x++) {
    if (Math.random() > 0.5) {
      point(x + d, 0);
    }
  }

  pop();

  a = a + 360 / partes;

  if (a >= 360) {
    noLoop();
  }
}
