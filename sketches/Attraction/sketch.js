var particles = [];
var attractor = new Particle(0, 0);
var clicked = false;

function setup(){
	createCanvas(windowWidth, windowHeight);

	for (var i = 0; i < 100; i++) {
		var x = i * cos(i);
		var y = i * sin(i);
		particles.push(new Particle(x, y, false));
	}
}

function draw(){
	background(0);
	translate(width/2, height/2)

	attractor.update();
	attractor.render();

	for (var i = 0; i < particles.length; i++) {
		if(clicked) {
			particles[i].applyAttraction(attractor); 
		} else {
			particles[i].removeAttraction();
		}
		particles[i].update();
		particles[i].render();
	}

	fill(255);
	text("LEFT CLICK TO ATTRACT THE PARTICLES", - 120, height/2 - 50);
}

function mousePressed() {
	clicked = !clicked;
	var center = createVector(width/2, height/2);
	attractor = new Particle(-center.x + mouseX, -center.y + mouseY, true);
}