function setup(){
	createCanvas(windowWidth, windowHeight);
}

function draw () {
	background(145, 233, 255);
	recursiveDraw(width/4, height, 110, 0, 12);
	recursiveDraw(width - width/4, height, 110, 0, 12);
	recursiveDraw(width/2, height, 130, 0, 12);
	noLoop();
}

function recursiveDraw (x, y, length, angle, width) {
	push();

	translate(x, y);
	rotate(angle * PI / 180);

	// call to HTML5 canvas API
	drawingContext.shadowOffsetX = 0;
	drawingContext.shadowOffsetY = 0;
	drawingContext.shadowBlur = 10;
	drawingContext.shadowColor = "rgba(0,0,0,0.8)";

	stroke(53, 36, 23);	
	strokeWeight(width);
	noFill();
	line(0, 0, 0, -length);

	if (length < 10) {
		var rnd = random() * 195 + 75;
		fill(255, rnd - 50, rnd);
		noStroke();
		arc(0, -length, 10, 10, -QUARTER_PI, HALF_PI, CHORD);
		arc(0, -length, -10, -5, -TWO_PI, QUARTER_PI, CHORD);
		pop();
    	return;
	}

	recursiveDraw(0, -length, length * 0.8, angle + 12, width * 0.75);
 	recursiveDraw(0, -length, length * 0.8, angle - 12, width * 0.75);
	 
	pop();
}
