var particles = [];
var move = [];
var k = 0;
var n = 0;

function setup(){
	createCanvas(windowWidth, windowHeight);
}

function draw(){
	background(0);

	if (k < 1500) {
		var c = parseInt(random(360));
		p = new Particle(random(width), random(height), color('hsb(' + c  +', 100%, 100%)'), color('hsb(' + c  +', 100%, 50%)'));
		particles.push(p);
		move.push(true);
	}

	for	(var i = 0; i < particles.length; i++) {		
		var p = particles[i];
		p.move(random(width/2 - 100, width/2 + 100), random(height/2 - 100, height/2 + 100));
		p.render();
	}
	k++;
}
