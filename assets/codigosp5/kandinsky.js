function setup() {
  createCanvas(windowWidth, windowHeight);
  stroke(0);
  strokeWeight(2);
  background("#00000000");
  angleMode(DEGREES);
  strokeCap(SQUARE);
}

let partes = 7;

let a = 0;

function draw() {
  push();
  translate(windowWidth / 2, windowHeight / 2);
  rotate(a);

  strokeWeight(1);
  line(80, 0, 110, 0);

  // line(91, -10, 91, 115);
  line(91, 70, 91, 165);

  strokeWeight(10);
  line(120, -124, 120, -60);

  strokeWeight(2);
  line(100, -135, 100, 150);
  line(110, -100, 110, 100);

  strokeWeight(5);
  line(80, -150, 80, 155);

  pop();

  a = a + 360 / partes;

  //noLoop();

  if (a >= 360) {
    noLoop();
  }
}
