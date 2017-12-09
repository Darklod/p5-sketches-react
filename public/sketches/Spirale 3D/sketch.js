var r = [];
var rot = 0;

function setup(){
	createCanvas(windowWidth,windowHeight,WEBGL);
	for (var i = 30; i >= 0; i--) {
		r[i] = i * 10/2;
	}
}

function draw(){
	background(255);

	//orbitControl();

	rotateY(rot*PI);

	for(var c = 0; c < r.length; c++){
		var col = color('hsl('+ int(map(c,0,r.length,0,360))+', 100%, 50%)');
		fill(col);
		beginShape(TRIANGLE_STRIP);
		for (var i = 0; i < 20; i+=0.2) {
			var x = r[c] * cos(i);
			var y = r[c] * sin(i);

			vertex(x,y,r[c]*4-400);
			
			var x = r[c] * cos(i+1);
			var y = r[c] * sin(i+1);

			vertex(x,y,r[c]*4-400);
		}
		endShape();
	}
	rot+=0.01;
}