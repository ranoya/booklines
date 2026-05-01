function setup() {
  createCanvas(windowWidth, windowHeight);
  stroke(0);
  strokeWeight(2);
  background("#00000000");
  angleMode(DEGREES);
  strokeCap(SQUARE);
}

let partes = 8;

let a = 0;

function draw() {
  push();
  translate(windowWidth / 2, windowHeight / 2);
  rotate(a);

  strokeWeight(1);
  line(80, 0, 110, 0);

  strokeWeight(4);
  line(105, -107, 132, -107);
  line(105, -112, 132, -112);
  line(105, -117, 132, -117);
  line(105, -122, 132, -122);
  line(105, -127, 132, -127);

  strokeWeight(2);
  line(100, -130, 100, 130);
  line(110, -100, 110, 100);

  strokeWeight(5);
  line(80, -90, 80, 90);

  pop();

  a = a + 360 / partes;

  //noLoop();

  if (a >= 360) {
    noLoop();
  }
}
