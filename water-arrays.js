var x = [];
var y = [];


function setup() {
  createCanvas(400, 400);
  colorMode(HSB)
  
  for (var index = 0; index < 100; index = index + 1) {
    x[index] = 230;
   y[index] = 220;
  }
}

function draw() {
  background(0);
  noStroke();

  // draw pipe
  rect(0, 200, 230, 20);
  

  // draw drip
 

  for (var index = 0; index < 100; index = index + 1) {
    ellipse(x[index], y[index], 10);
  y[index] = y[index] + 10;
    
    if (y[index] > height){
    y[index] = 220;
    }
  }
}
