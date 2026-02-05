function setup() {
  createCanvas(windowWidth, windowHeight);
  stroke(0);
  strokeWeight(2);
  background("#00000000");
  angleMode(DEGREES);
  strokeCap(SQUARE);
}

let a = 0;
let r1 = 80;
let m = 100;
f = 0;

function draw() {
  push();
  translate(windowWidth / 2, windowHeight / 2);
  rotate(90 + a);

  if (a % 45 == 0) {
    fill(0);
    ellipse(240, 0, 5, 5);
  }

  if (a % 2 == 1) {
    if (a < 180) {
      strokeWeight(1);
    } else {
      strokeWeight(2.5);
    }
    line(r1 + 10 + m * f, 0, 130 + r1 * f * 5, 0);
  }

  if (a % 3 == 0) {
    if (a < 180) {
      strokeWeight(4);
    } else {
      strokeWeight(1);
    }
    line(130 + r1 * f * 5, 0, 200 + 1 * m * f, 0);
  }
  pop();

  a = a + 1;
  if (a < 180) {
    f = f + 0.001;
  } else {
    f = f - 0.001;
  }

  if (a >= 360) {
    noLoop();
  }
}
