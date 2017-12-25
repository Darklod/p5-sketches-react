function setup() {
  createCanvas(windowWidth,windowHeight,WEBGL);
}

function draw() {
  background(0);
  beginShape();
  for(var i =0;i<200;i++){
    fill(color('hsl('+ int(map(i,0,200,0,360)) +',100%,50%)'));
    vertex(200*sin(i),200*cos(i),200*tan(i));
  }
  endShape();
}