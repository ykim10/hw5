var x = [];
var y = [];


x[1] = 100;
y[1] = 200;
d[1] = 100;

x[2] = 300;
y[2] = 200;
d[2] = 30;

function setup() {
  createCanvas(400, 400);
  colorMode(HSB)
}
  
function draw() {
  background(255);
  noStroke();

  // draw two ellipses
  fill(120, 60, 100);
  ellipse(x[1], y[1], d[1]);
  
  fill(240, 60, 100);
  ellipse(x[2], y[2], d[2]);
  
  // 1% of the time
  if (random() < 0.01) {
    // random diameter between 10 and 400
    d[1] = random(10, 400);
  }
  
  // 2% of the time…
  if (random() < 0.02) {
    // random diameter between 10 and 400
    d[2] = random(10, 400);
  }
}
