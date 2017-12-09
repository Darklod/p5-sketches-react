var d = 250;

function setup() {
 createCanvas(windowWidth, windowHeight); 
}

function draw() { 
	background(0);
 translate(width/2,height/2);
 fill(255);
 noStroke();
	d=250;
 for(var i = 0; i < 360; i++){
 	ellipse(cos(i*TWO_PI/360)*d,sin(i*TWO_PI/360)*d,5,5);
 	d-=1;
 }
}