function setup(){
	createCanvas(windowWidth, windowHeight, WEBGL);
}
var z = 0;
function draw() {
  background(0);
  fill(255);
  stroke(255);
  
  for (var x = 0; x < 80; x++) {
    beginShape();
    vertex(250*cos(x),250*sin(x),-z%20);
    vertex(240*cos(x+1),240*sin(x+1),z%30);
    endShape();
  }
  for (var x = 0; x < 60; x++) {
    beginShape();
    vertex(100*cos(x),100*sin(x),z%20);
    vertex(150*cos(x+1),150*sin(x+1),-z%20);
    endShape();
  }
  z++;
}