var particles = [];
var move = [];
var k = 0;
var n = 0;
var font;
var points = [];
var bounds;
var randomPoints = [];
var message = "Auguri!";

function preload() {
	font = loadFont('./assets/Prohandy Regular.otf');
}

function setup(){
	createCanvas(windowWidth, windowHeight);
	rectMode(CENTER);
	textAlign(CENTER, CENTER);

	noStroke();
	push();

	translate(width/2, height/2);
	bounds = font.textBounds(message, 0, 0, width/2.7);	
	translate(-bounds.w/2, +bounds.h/3);
	points = font.textToPoints(message, 0, 0, width/2.7, {sampleFactor:0.3});

	pop();

	randomPoints = shuffle(points);
}

function draw(){
	background(0, 40, 150);

	translate(width/2, height/2);
	translate(-bounds.w/2, + bounds.h/3);

	if (k < 500) {
		for (var i = 0; i < 4; i++) {
			var c = parseInt(random(60, 165)); //80, 165
			p = new Particle(
				random(-windowWidth, windowWidth), 
				random(-windowHeight, windowHeight), 
				color('hsla(' + c +', 100%, 50%, 1)'), 
				color('hsla(' + c +', 100%, 30% , 1)')
			);
			particles.push(p);
			move.push(true);
		}
	}

	for	(var i = 0; i < particles.length; i++) {		
		var p = particles[i];
		p.move(
			parseInt(randomPoints[i%randomPoints.length].x), 
			parseInt(randomPoints[i%randomPoints.length].y)
		);
		p.render();
	}

	k++;
}

function shuffle(array) {
	var currentIndex = array.length, temporaryValue, randomIndex;
  
	// While there remain elements to shuffle...
	while (0 !== currentIndex) {
  
	  // Pick a remaining element...
	  randomIndex = Math.floor(Math.random() * currentIndex);
	  currentIndex -= 1;
  
	  // And swap it with the current element.
	  temporaryValue = array[currentIndex];
	  array[currentIndex] = array[randomIndex];
	  array[randomIndex] = temporaryValue;
	}
  
	return array;
  }