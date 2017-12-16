var particles = [];
var num = 300;
var colour;
var font;
var json;
var img;
var message="LOVE";

function preload(){
	font = loadFont('Chasing Hearts - TTF.ttf');
	json = loadJSON('heart.json');
}

function setup(){
	createCanvas(windowWidth,windowHeight);
	colour = 345 || parseInt(random(360));
	for	(var i = 0; i < num; i++){
		particles.push(new Particle(random(width),random(height),colour,0.5));
	}

	img = createFontMask(message, font, width/2, '#FFF');
	
	angleMode(DEGREES)
}

function draw(){
	background(170,0,75);

	for	(var i = 0; i < particles.length; i++){
		particles[i].update();
		particles[i].render();

		if(particles[i].death()){
			particles[i] = new Particle(random(width),random(height),colour);
		}
	}

  	translate(width/2, height/2);
	image(img, 0, 0);

	var bounds = font.textBounds(message, 0, 0, width/2);
	var w = bounds.w, h = bounds.h;

	textSize(width/ 40);
	textAlign(CENTER, CENTER);

	fill(15,100,200);

	push();
	translate(-(w/2) * 65/100, -(h/2) * 20/100);
	rotate(-60);
	text("BUON ANNIVERSARIO!", 0, 0);
	pop();

	push();
	translate(+(w/2) * 27/100, -(h/2) * 40/100);
	rotate(-60 + 35);
	text("AUGURIIIII", 0, 0);
	pop();

	push();
	translate((w/2) * 3/100, +(h/2) * 85/100);
	rotate(-60 + 35 + 24);
	text("( ˘ ³˘)❤", 0, 0);
	pop();
}
