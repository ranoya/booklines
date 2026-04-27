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

  strokeWeight(1);
  line(80, x, 110, x);

  strokeWeight(2);
  line(80, -60, 80, 60);

  strokeWeight(5);
  line(50, -60, 50, 60);

  pop();

  x = x + parseInt(2 + Math.random() * 5);

  if (x > 200) {
    x = parseInt(2 + Math.random() * 5);
    a = a + 10;
  }

  if (a >= 360) {
    noLoop();
  }
}
