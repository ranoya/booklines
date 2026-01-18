function setup() {
  createCanvas(windowWidth, windowHeight);
  stroke(0);
  strokeWeight(2);
  background("#00000000");
  angleMode(DEGREES);
  strokeCap(SQUARE);
}

let a = 0;
let x = parseInt(4 + Math.random() * 5);
function draw() {
  push();
  translate(windowWidth / 2, windowHeight / 2);
  rotate(a);

  strokeWeight(2);
  line(x, 0, x, -200);
  pop();

  x = x + parseInt(4 + Math.random() * 5);

  if (x > 200) {
    x = parseInt(4 + Math.random() * 5);
    a = a + 90;
  }

  if (a >= 360) {
    noLoop();
  }
}
