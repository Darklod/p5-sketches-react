var particles = [];
var r = 200; 			 //raggio
var t = 1; 	 			 //tempo
var T = 2;				 //periodo
var f = 1/T; 			 //frequenza
var w = 2 * Math.PI * f; //velocità angolare (ω = 2πf)

function setup(){
	createCanvas(windowWidth, windowHeight);
}

function draw(){
	background(0);
	translate(width/2, height/2);

	for (var i = 0; i < 360; i+= 1) {
		fill(0, map(i, 0, 360, 100, 255), 100);

		var x = r * cos(i + w * t);
		var y = r * sin(i + w * t);

		ellipse(x, y , 10, 10);	
	}
	
	t += 0.005;
}