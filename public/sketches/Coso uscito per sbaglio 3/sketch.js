var slider;

function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
  slider = createSlider(1,10,2);
  slider.position(20, 20);
}

var b = 20;
var r = 100;
var lat = 10
var equ = 50;

function draw() {
  background(0);
  fill(255);
  stroke(255);
  
  for (var x = 0; x < 100; x++) {
    beginShape();
    vertex(200*cos(x),200*sin(x),0);
    vertex(200*cos(x+slider.value()),200*sin(x+slider.value()),0);
    endShape();
  }
}