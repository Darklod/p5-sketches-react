var points = [];
var a = 2;   //amount
var s = 250; //size

function setup(){
	createCanvas(windowWidth, windowHeight);
	
	s = windowWidth / 4;
	
	//200 iterations
	for (var i = PI/100; i < TWO_PI; i+=PI/100) {
		var x = s * cos(i);
		var y = s * sin(i);
		
		points.push({x: x, y: y});
	}
}

function draw(){
	background(0);
	translate(width / 2, height / 2);
	
	fill(255, 0, 0);	
	for (var i = 0; i < points.length; i++) {		
		stroke(a * i % 255, 0, 0);
		line(points[i].x, points[i].y, 0, 0);
		
		noStroke();
		ellipse(points[i].x, points[i].y, 4, 4);
	}
	a+= PI/50;
}

