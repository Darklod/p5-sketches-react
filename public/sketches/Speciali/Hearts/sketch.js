var particles = [];
var num = 300;
var colour;
var font;
var json;

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
	
	//rect(width/2-200,height/2-50,400,100);
	
	/*fill(255);
	textFont(font);
	textSize(100);
	text('I LOVE YOU',width/2,height/2);
	textAlign(CENTER,CENTER);*/
	
	//center line
	//stroke(255);
	//line(0,height/2,width,height/2);
	//line(width/2,0,width/2,height);
}