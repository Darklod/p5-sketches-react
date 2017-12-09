// HEART PARAMETRIC FUNCTION
// x = 16sin^3t	
// y = 13cost-5cos(2t)-2cos(3t)-cos(4t)

var font;

function preload(){
	font = loadFont("assets/flea_market_finds.ttf");
}

function setup(){
	createCanvas(windowWidth,windowHeight);

	background(255,0,55);	
	fill(255);

	push();
	translate(50,windowHeight - windowHeight/6);

	textFont(font);
	textSize(windowHeight/25);
	text("x(t) = 16sin³t\ny(t) = 13cost - 5cos2t - 2cos3t - cos4t", 10, 30);
	pop();
	
	translate(windowWidth/2,windowHeight/2);

	var s = windowHeight/2/25;

	noStroke();
	beginShape();
	for (var t = 0; t < TWO_PI; t += HALF_PI/30) {
		var x = 16 * pow(sin(t),3);
		var y = -(13 * cos(t) - 5 * cos(2 * t) - 2 * cos(3 * t) - cos(4 * t));

		vertex(x*s,y*s);
	}
	endShape();
}