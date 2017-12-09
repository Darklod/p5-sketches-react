var stars = [];
var r = 10;
var img;
var graphics;

function setup(){
	createCanvas(windowWidth,windowHeight,WEBGL);
	img = loadImage("assets/happy christmas.png");
	graphics = createGraphics(1450,1200);
	graphics.fill(255,15,15);
	graphics.textFont("Georgia");
	graphics.textSize(180);
	
	for (var i = 0; i < 200; i++) {
		stars.push(new Star(random(width),random(-500,100)));	
	}
}

function draw(){
	background(1,5,20);

	push();
	translate(0,-60,0);
	graphics.background(1,5,20,255);
	graphics.text('Happy Christmas!', 0, 300);
  	texture(graphics);
  	plane(600);
  	pop();

	for (var i = 0; i < stars.length; i++) {
		stars[i].show();
		stars[i].update();
		if(stars[i].death()){
			stars.splice(i,1);
			stars.push(new Star(random(width),50));
		}
	}

	camera(0, 0, -150);

	translate(0,-100,0);

	beginShape(TRIANGLE_STRIP);
	for (var i = 0; i < 80; i += 0.1)	 {
		var x = r * i/9 * cos(i);
		var y = r * i/9 * sin(i);

		fill(255, map(0.5 + sin(i),0.5,1.5,200,255), 0);

		vertex(x, i * 3 , y);
		vertex(x, i * 3 + Math.pow(Math.E,i/50) + 10, y);
	}
	endShape();
}

function Star(x, y){
	this.pos = createVector(x, y);
	this.dir = createVector(random(-0.25,0.25),random(0.25,1));
	this.vel = createVector(1,1);

	this.show = function(){
		fill(255);
		push();
		translate(-width/2 + this.pos.x,-height/2 + this.pos.y,300);		
		sphere(1);
		pop();
	}

	this.update = function(){
		this.pos.x += this.dir.x * this.vel.x;
		this.pos.y += this.dir.y * this.vel.y;

		if(this.pos.y%50 == 0)
			this.x += -this.dir.x;
	}

	this.death = function(){
		return this.pos.y > height;
	}
}