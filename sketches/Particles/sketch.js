var particles = [];
var num = 500;
var colour;

function setup(){
	createCanvas(windowWidth,windowHeight);
	colour = parseInt(random(360));
	shape = parseInt(random(0,6));
	for	(var i = 0; i < num; i++){
		particles.push(new Particle(random(width),random(height),colour,shape,0.5));
	}
}

var repulser = null;
var range = 50;

function draw(){
	background(0,0,0,100);

	for	(var i = 0; i < particles.length; i++){
		if(repulser){
			var d = dist(particles[i].pos.x,particles[i].pos.y, repulser.x,repulser.y);
			if(d < range){
				particles[i].attracted(repulser);
			}
		}

		particles[i].update();
		particles[i].render();

		if(particles[i].death()){
			particles[i] = new Particle(random(width),random(height),colour,shape);
		}
	}
}

function mouseClicked(){
	repulser = createVector(mouseX,mouseY);
	setTimeout(() => { repulser = null },500);
	return false;
}
