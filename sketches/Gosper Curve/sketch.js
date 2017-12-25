// TURTLE STUFF:
var x, y;
var currentangle = 0;
var step = 10;
var angle = +60;

// LINDENMAYER STUFF (L-SYSTEMS)
var axiom = 'A'; 
var iterations = 4;
var rules = {
  'A': 'A+BF++BF-FA--FAFA-BF+',
  'B': '-FA+BFBF++BF+FA--FA-B'
};

var index = 0;
var passo = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(250);
  strokeWeight(4);
  stroke(0, 0, 0, 255);
  
  x = width/2;
  y = step * 10;
  
  // COMPUTE THE L-SYSTEM
  axiom = lindenmayer(axiom, rules, iterations);
  console.log(axiom);
}

function draw() {
  drawSystem(axiom[index]); 

  if (index > axiom.length-1) 
    noLoop();
  else 
    index++;
}