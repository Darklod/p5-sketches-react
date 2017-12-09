var r = 100;

function setup(){
	createCanvas(windowWidth,windowHeight);
}

function draw(){
	background(0);
	
	translate(windowWidth/2,windowHeight/2);	

	r = windowHeight / 2.5;

	stroke(255,0,55,180);
	noFill();

	ellipse(0,0,r*2,r*2);
	beginShape();
	for (var i = 0; i <= TWO_PI; i+=HALF_PI) {
		var x = r * cos(i);
		var y = r * sin(i);

		vertex(x,y);
	}
	endShape();

	beginShape();
	for (var i = HALF_PI/10; i < HALF_PI; i+=HALF_PI/10) {
		var x = r * cos(i);
		var y = r * sin(i);

		var x1 = r * cos(i-HALF_PI);
		var y1 = r * sin(i-HALF_PI);

		line(x,y,x1,y1);
	}
	endShape();

	beginShape();
	for (var i = HALF_PI/10; i < HALF_PI; i+=HALF_PI/10) {
		var ii = PI + i;
		var x = r * cos(ii);
		var y = r * sin(ii);

		var x1 = r * cos(ii-HALF_PI);
		var y1 = r * sin(ii-HALF_PI);

		line(x,y,x1,y1);
	}
	endShape();

	beginShape();
	for (var i = 0; i < HALF_PI; i+=HALF_PI/10) {
		var ii = (i - HALF_PI) *2;
		var x = r * cos(ii/2);
		var y = r * sin(ii/2);

		var x1 = r * cos(ii-HALF_PI);
		var y1 = r * sin(ii-HALF_PI);

		line(x,y,x1,y1);
	}
	endShape();

	beginShape();
	for (var i = HALF_PI/10; i < HALF_PI; i+=HALF_PI/10) {
		var ii = (i - PI)*2;
		var x = r * cos(ii/2);
		var y = r * sin(ii/2);

		var x1 = r * cos(ii-HALF_PI);
		var y1 = r * sin(ii-HALF_PI);

		line(x,y,x1,y1);
	}
	endShape();

	noLoop();
}