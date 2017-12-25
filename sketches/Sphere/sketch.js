n = 2000;
list = [];
r = 50;
rx = 0;
ry = 0;

function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);

  r = height / 4.5;

  for (var i = 0; i < n; i++) {
    list.push(new Hair());
  }
  noiseDetail(3);
}

function draw() {
  background(0);

  rxp = (mouseX - (width / 2)) * 0.005;
  ryp = (mouseY - (height / 2)) * 0.005;
  rx = rx * 0.9 + rxp * 0.1;
  ry = ry * 0.9 + ryp * 0.1;

  //translate(width / 2, height / 2);
  rotateY(rx);
  rotateX(ry);
  fill(0);
  noStroke();
  sphere(r);
  
  fill(255,255,100);
  for (var i = 0; i < list.length; i++) {
    list[i].draw();
  }

}


function Hair() {
  this.z = random(-r, r);
  this.phi = random(TWO_PI);
  this.length = random(1.15, 1.2);
  this.theta = asin(this.z / r);

  this.draw = function() {

    var off = (noise(millis() * 0.0005, sin(this.phi)) - 0.5) * 0.3;
    var offb = (noise(millis() * 0.0007, sin(this.z) * 0.01) - 0.5) * 0.3;

    var thetaff = this.theta + off;
    var phff = this.phi + offb;
    
    var x = r * cos(this.theta) * cos(this.phi);
    var y = r * cos(this.theta) * sin(this.phi);
    var z = r * sin(this.theta);

    var xo = r * cos(thetaff) * cos(phff);
    var yo = r * cos(thetaff) * sin(phff);
    var zo = r * sin(thetaff);

    var xb = xo * this.length;
    var yb = yo * this.length;
    var zb = zo * this.length;

    strokeWeight(1);
    beginShape(LINES);
    stroke(0);
    vertex(x, y, z);
    stroke(200, 150);
    vertex(xb, yb, zb);
    endShape();
  }
}