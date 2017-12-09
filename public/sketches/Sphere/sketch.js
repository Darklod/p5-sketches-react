cuantos = 2000;
lista = [];
radio = 50;
rx = 0;
ry = 0;

function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);

  radio = height / 4.5;

  for (var i = 0; i < cuantos; i++) {
    lista.push(new Pelo());
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
  sphere(radio);
  
  fill(255,255,100);
  for (var i = 0; i < lista.length; i++) {
    lista[i].dibujar();
  }

}


function Pelo() {
  this.z = random(-radio, radio);
  this.phi = random(TWO_PI);
  this.largo = random(1.15, 1.2);
  this.theta = asin(this.z / radio);

  this.dibujar = function() {

    var off = (noise(millis() * 0.0005, sin(this.phi)) - 0.5) * 0.3;
    var offb = (noise(millis() * 0.0007, sin(this.z) * 0.01) - 0.5) * 0.3;

    var thetaff = this.theta + off;
    var phff = this.phi + offb;
    
    var x = radio * cos(this.theta) * cos(this.phi);
    var y = radio * cos(this.theta) * sin(this.phi);
    var z = radio * sin(this.theta);

    var xo = radio * cos(thetaff) * cos(phff);
    var yo = radio * cos(thetaff) * sin(phff);
    var zo = radio * sin(thetaff);

    var xb = xo * this.largo;
    var yb = yo * this.largo;
    var zb = zo * this.largo;

    strokeWeight(1);
    beginShape(LINES);
    stroke(0);
    vertex(x, y, z);
    stroke(200, 150);
    vertex(xb, yb, zb);
    endShape();
  }
}