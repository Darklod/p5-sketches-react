var particles = [];
var num = 500;
var colour;

var img,font,message="PARTICLES",fontSize;
function preload() {
  font = loadFont('assets/IndieFlower.ttf');
}

function setup(){
	createCanvas(windowWidth,windowHeight);
	colour = parseInt(random(360)); 
	shape = parseInt(random(0,6));
	for	(var i = 0; i < num; i++){
		particles.push(new Particle(random(width),random(height),colour,shape,0.5));
	}
	
	
  fontSize = 300;
  img = createFontMask(message,font,fontSize, fontSize/2, '#FFF');
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
	
	translate(width/2,height/2)
	image(img, 0, 0);
}

function mouseClicked(){
	repulser = createVector(mouseX,mouseY);
	setTimeout(() => { repulser = null },500);
	return false;
}