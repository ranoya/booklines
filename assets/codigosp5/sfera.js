function setup() {
  createCanvas(windowWidth, windowHeight);
  stroke(0);
  background("#00000000");
  angleMode(DEGREES);
  strokeCap(PROJECT);
}

let partes = 90;

let a = 0;
let d = true;

function draw() {
  push();
  translate(windowWidth / 2, windowHeight / 2);
  rotate(a + 90);

  if (d) {
    if (a <= 180) {
      strokeWeight(1.5);
    } else {
      strokeWeight(3);
    }
    line(-cos(a) * 120, 0, 140, 0);

    strokeWeight(5);
    line(-160, 0, -180, 0);
  }

  if (d) {
    d = false;
  } else {
    d = true;
  }

  strokeWeight(0.5);
  line(120, 0, 190, 0);

  strokeWeight(2);
  point(195, 0);

  pop();
  a = a + 360 / (2 * partes);
  if (a >= 361) {
    noLoop();
  }
}
