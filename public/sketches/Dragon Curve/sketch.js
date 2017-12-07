// TURTLE STUFF:
var x, y;
var currentangle = -90;
var step = 10;
var angle = 90;

// LINDENMAYER STUFF (L-SYSTEMS)
var axiom = 'FX'; 
var iterations = 10;
var rules = {
  'X': 'X+YF+',
  'Y': '-FX-Y'
};

var index = 0;
var passo = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(250);
  strokeWeight(4);
  stroke(0, 0, 0, 255);
  
  x = width/2;
  y = height/2;
  
  // COMPUTE THE L-SYSTEM
  axiom = lindenmayer(axiom, rules, iterations);
}

function draw() {
  drawSystem(axiom[index]); 

  if (index > axiom.length-1) 
    noLoop();
  else 
    index++;
}