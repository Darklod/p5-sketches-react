var r = 200;
var c = 25;

function setup(){
	createCanvas(windowWidth, windowHeight, WEBGL);
	angleMode(DEGREES)
}

function draw(){
	background(0);	
	rotateX(-80);
	translate(0, 1600, -1050)

	fill(255, 0 , 20);
	beginShape(TRIANGLE_STRIP)
	for (var t = 0; t < 360; t++) {
		var x = r * cos(TWO_PI * t);
		var y = r * sin(TWO_PI * t);
		var z = c * t;
		vertex(x - 10, y - 10, z -10);
		vertex(x + 10, y + 10, z +10);
	}
	endShape();

	fill(59, 69 , 199);
	beginShape(TRIANGLE_STRIP)
	for (var i = 0; i < 360; i++) {
		var x = r * cos(TWO_PI * i);
		var y = r * sin(TWO_PI * i);
		var z = i * c;

		var point = rotateZ3D({x:x,y:y,z:z}, 180);
		
		vertex(point.x - 10, point.y - 10, point.z -10);
		vertex(point.x + 10, point.y + 10, point.z +10);
	}
	endShape();

	for (var i = 0; i < 360; i+=3) {
		var x = r * cos(TWO_PI * i);
		var y = r * sin(TWO_PI * i);
		var z = i * c;
		var point = rotateZ3D({x:x,y:y,z:z}, 180);

		if(i%6==0) {
			fill(0, 255, 0)
		} else {
			fill(200, 0, 200)
		}

		beginShape(TRIANGLE_STRIP)
		vertex(x-5, y-5, z-5);
		vertex(x+5, y+5, z+5);
		vertex(point.x/10-7, point.y/10-7, point.z-7);
		vertex(point.x/10+7, point.y/10+7, point.z+7);
		endShape();

		if(i%6==0) {
			fill(255, 255, 0)
		} else {
			fill(0, 0, 255)
		}

		beginShape(TRIANGLE_STRIP)
		vertex(point.x/10-7, point.y/10-7, point.z-7);
		vertex(point.x/10+7, point.y/10+7, point.z+7);
		vertex(point.x-5, point.y-5, point.z-5);
		vertex(point.x+5, point.y+5, point.z+5);
		endShape();
	}
}

var rotateZ3D = function(point, theta) {
   var x = point.x;
   var y = point.y;

   point.x = x * cos(theta) - y * sin(theta);
   point.y = x * sin(theta) + y * cos(theta);

   return point;
};