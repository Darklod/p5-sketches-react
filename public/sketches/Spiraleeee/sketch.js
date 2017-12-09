var particles = [];
var slider1, slider2, slider3, slider4, checkbox, checkbox2;

var inc = 0;
var t1, t2, t3, t4;

function setup() {
  createCanvas(windowWidth, windowHeight);

  var sp1 = createElement("span", "Dimensione: ");
  slider1 = createSlider(-10, 10, 1);
  t1 = createElement("span", "10");
  var sp2 = createElement("span", "Angolo: ");
  slider2 = createSlider(0, 360, 0);
  t2 = createElement("span", "10");
  var sp3 = createElement("span", "Numero di punti: ");
  slider3 = createSlider(0, 1000, 10, 10);
  t3 = createElement("span", "10");
  var sp4 = createElement("span", "Risoluzione: ");
  slider4 = createSlider(1, 10, 10);
  t4 = createElement("span", "10");
  checkbox = createCheckbox("Unisci i puntini");
  checkbox2 = createCheckbox("Animazione");

  checkbox2.changed(function() {
    last = slider2.value();
    if (slider2.value() != inc)
      inc = slider2.value();
  });
  
  slider1.position(150, 20);
  slider2.position(150, 50);
  slider3.position(150, 80);
  slider4.position(150, 110);
  checkbox.position(150, 140);
  checkbox2.position(150, 170);
  
  sp1.position(20,20);
  sp2.position(20,50);
  sp3.position(20,80);
  sp4.position(20,110);
  
  t1.position(300,20);
  t2.position(300,50);
  t3.position(300,80);
  t4.position(300,110);

  sp1.style("color", "white");
  sp2.style("color", "white");
  sp3.style("color", "white");
  sp4.style("color", "white");
  t1.style("color", "white");
  t2.style("color", "white");
  t3.style("color", "white");
  t4.style("color", "white");
  checkbox.style("color", "white");
  checkbox2.style("color", "white");
}


function draw() {
  background(0);

  t1.elt.textContent = slider1.value();
  t2.elt.textContent = slider2.value();
  t3.elt.textContent = slider3.value();
  t4.elt.textContent = slider4.value()/10;

  if (checkbox2.checked()) {
    slider2.value(inc);
    inc += 0.01;
  }

  var n = parseInt(slider3.value());

  particles = [];
  for (var k = 0; k < n; k+=slider4.value()/10)
    particles.push(new Particle(k * slider1.value() * 0.5, k * slider2.value(),k));

  translate(width / 2, height / 2);
  
  /*beginShape();
  for (var i = 0; i < n; i++) {
    particles[i].show();
    stroke( particles[i].color);
    noFill();
    if (checkbox.checked())
      vertex(particles[i].x * 10, particles[i].y * 10);
  }
  endShape();*/
  
  for (var i = 0; i < n-1; i++) {
    particles[i].show();
    stroke(particles[i].color);
    noFill();
    if (checkbox.checked())
      line(particles[i].x * 10, particles[i].y * 10,particles[i+1].x * 10, particles[i+1].y * 10);
  }
}

function Particle(r, a, i) {
  this.radius = r;
  this.angle = a;
  this.i = i;

  this.x = this.radius * cos(this.angle);
  this.y = this.radius * sin(this.angle);
  
  this.color = color('hsl('+parseInt(map(i,0,parseInt(slider3.value()),0,360))+', 100%, 50%)');
  console.log(this.color);

  this.show = function() { 
    fill(this.color);
    noStroke();
    ellipse(this.x * 10, this.y * 10, 5, 5);
  }
}