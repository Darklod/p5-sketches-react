var fireworks = [];
var special = [];
var gravity;
var canStart = false;
var sound1, sound2;
var time = 10;
var stars = [];

function preload() {
	sound1 = loadSound("./sounds/firework1.mp3");
	sound2 = loadSound("./sounds/firework2.mp3");
}

function setup() {
	createCanvas(windowWidth, windowHeight);
	fullscreen();
	stroke(255);
	strokeWeight(7);

	gravity = createVector(0, 0.2);
	for(var i = 0; i < 30; i++)
		stars.push(createVector(floor(random(width)),floor(random(height))));
	drawWord("HAPPY BIRTHDAY");
	sound2.play();
}

function draw() {
	colorMode(RGB);
	background(10,10,30, 70);

	fill(255);
	noStroke();
	for(var i = 0; i < 30; i++)
		ellipse(stars[i].x,stars[i].y,2,2);

	for (var x in special) {
		special[x].update();
		special[x].show();
	}

	if (special.length > 0) {
		if (special[0].firework.vel.y > 0) {
			if (!canStart)
				sound1.play();
			canStart = true;
		}
	}

	if (canStart) time -= 0.1;

	if (random(1) < 0.05 && time <= 0)
		fireworks.push(new Firework());

	for (var i = fireworks.length - 1; i >= 0; i--) {
		fireworks[i].update();
		fireworks[i].show();
		if (fireworks[i].done()) {
			fireworks.splice(i, 1);
		}
	}
}

function drawWord(word) {
	for (var i = 0; i < word.length; i++)
		special.push(new Firework(i * 60 + width / 2 - (word.length * 60) / 2, height, word[i].toUpperCase()));
}