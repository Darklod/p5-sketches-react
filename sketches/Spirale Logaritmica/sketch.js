var sliderA;
var sliderB;
var sliderN;

function setup() {
  createCanvas(windowWidth, windowHeight);
  
  sliderA = createSlider(1,100,5);
  sliderB = createSlider(1,5  ,2);
  sliderN = createSlider(1,50 ,20);
  
  sliderA.position(20, 20);
  sliderB.position(20, 50);
  sliderN.position(20, 80);
}

function draw() {
  background(0);
  translate(width/2,height/2);
  
  var a = sliderA.value(); 
  var b = sliderB.value()/10; 
  var n = sliderN.value();
  
  noFill();
  stroke(0,0,255);
  strokeWeight(3);
  fill(0,0,255,20);
  
  beginShape();
  for(var i = 0; i < n; i+=0.001){
	  var x = a * Math.pow(Math.E,b * i) * cos(i);
	  var y = a * Math.pow(Math.E,b * i) * sin(i);
	  vertex(x,y);  
  }
  endShape();
}