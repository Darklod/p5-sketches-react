var lights = [];
var cables = []; 
var range = 15;
var variance = 45;
var resolution = 75;

var x = 0, 
		y = 0, 
		r = 0, 
		oldX = 0, 
		oldY = 0, 
		xoff = 0, 
		yoff = 0;

var font;
var ctx;

function preload() {
	font = loadFont('./assets/MerryChristmasFlake.ttf');
}

function setup(){
	var canvas = createCanvas(windowWidth, windowHeight);
	ctx = canvas.drawingContext;
	
	angleMode(DEGREES);
	
	for	(var i = 100; i < width - 80; i+=width/resolution) {		
		r = range + map(noise(xoff, yoff), 0, 1, -variance, variance);
		
		x = i;
		y = r * cos(i) + 60;
	
		xoff+=0.1;
	
		cables.push({x, y});
		
		var angle = calculateAngle(x, y, oldX, oldY);
		
		addLight(random() > 0.5 ? angle + 90 : angle - 90);
	}
	
	for	(var i = 100; i < height - 80; i+=height/resolution) {		
		r = 10 + map(noise(xoff, yoff), 0, 1, -variance, variance);
		
		x = width - r * cos(i) - 60;
		y = i;
	
		yoff+=0.1;
	
		cables.push({x, y});
		
		var angle = calculateAngle(x, y, oldX, oldY);
		
		addLight(random() > 0.5 ? angle + 90 : angle - 90);
	}
	
	for	(var i = width - 80; i > 100; i-=width/resolution) {		
		r = range + map(noise(xoff, yoff), 0, 1, -variance, variance);
		
		x = i;
		y = height - r * cos(i) - 60;
	
		xoff+=0.1;
	
		cables.push({x, y});
		
		var angle = calculateAngle(x, y, oldX, oldY);
		
		addLight(random() > 0.5 ? angle + 90: angle - 90);
	}
	
	for	(var i = height - 80; i > 100; i-=height/resolution) {		
		r = 10 + map(noise(xoff, yoff), 0, 1, -variance, variance);
		
		x = r * cos(i) + 60;
		y = i;
	
		yoff+=0.1;
	
		cables.push({x, y});
		
		var angle = calculateAngle(x, y, oldX, oldY);
		console.log(angle)
		addLight(random() > 0.5 ? +angle + 90 : angle - 90);
	}
	
	cables.push({x: cables[0].x, y: cables[0].y});
}

function draw(){
	background(15, 45, 100);
	
	frameRate(3);
	
	noFill();
	stroke(0);
	
	beginShape();
	for	(var i = 0; i < cables.length; i++) {
			vertex(cables[i].x, cables[i].y);
	}
	endShape();
	
	stroke(0);
	for (var i = 0; i < lights.length; i++) {
		lights[i].render(random() > 0.2);
	}
	
	fill(255);
	noStroke();
	textFont(font);
	textSize(width/10);
	textAlign(CENTER, CENTER);
	text('Merry 0 X-mas 9', width/2, height/2);
};

function addShadow(color, x, y, radius) {
	ctx.save();
	ctx.globalCompositeOperation = 'lighter';
	var radialGradient = ctx.createRadialGradient(x, y, 0, x, y, radius);
	radialGradient.addColorStop(0.0,  'hsl(' + color + ', 100%, 50%)');
	radialGradient.addColorStop(0.20, 'hsl(' + color + ', 100%, 40%)');
	radialGradient.addColorStop(0.75, 'hsl(' + color + ', 100%, 20%)');
	radialGradient.addColorStop(0.90, 'hsl(' + color + ', 100%, 10%)');
	radialGradient.addColorStop(1,    'hsl(' + color + ', 100%, 0% )');
	ctx.fillStyle = radialGradient;
	ctx.beginPath();
	ctx.arc(x, y, radius, 0, 2 * PI);
	ctx.fill();
	ctx.restore();
}

function Light(x, y, a) {
	this.color = floor(random(360));
	this.x = x;
	this.y = y;
	this.angle = a;
	
	this.render = function (on) {
		push();
		
		translate(this.x, this.y);
		rotate(this.angle);
		
		fill(0);
		arc(15, 5, 30, 10, 130, -130, CHORD)
		fill('hsl('+ this.color +', 100%, '+ (on?'50':'20') +'%)');
		arc(15, 5, 30, 10, -130, 130, CHORD)
		
		pop();
		
		if (on) {
			push();
			translate(this.x, this.y);
			rotate(this.angle);
			addShadow(this.color, 20, 5, 15);
			pop();
		}
	}
}

function addLight(angle) {
	if (dist(x, y, oldX, oldY) > 20 && random() > 0.1) {
			lights.push(new Light(x, y, angle, 1));
			
			oldX = x;
			oldY = y;
		}
}

function calculateAngle(x, y, x1, y1) {
	return atan2((y1 - y),(x1 - x));
}