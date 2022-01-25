let d;
function setup() {
  createCanvas(windowHeight, windowHeight, WEBGL);
  angleMode(DEGREES)
  d = width;
}

function draw() {  
  background(0);
  noStroke()
  rotateX(-35)
  rotateY(frameCount)*0.1
  beginShape()
  fill(12, 241, 249)
  vertex(0, -d/3, 0)
  fill(30, 235, 10)
  vertex(d/3, 0, -d/3)
  fill(20, 25, 240)
  vertex(-d/3, 0, -d/3)
  fill(240, 225, 20)
  vertex(-d/3, 0, d/3)
  fill(235, 15, 245)
  vertex(d/3, 0, d/3)
  fill(30, 235, 10)
  vertex(d/3, 0, -d/3)
  endShape()
  orbitControl()
}