var s = 20;
var n = 15;

var particles = [];

function setup() {
 createCanvas(windowWidth, windowHeight);
	
 for(var i = 0; i < n; i++){
 	var x = map(i,0,n,0,360);
 	particles.push(new Particle(i,s));
 }
 console.log(particles);
}


function draw() {
 background(0);
 translate(width/2,height/2);
	for(var i = 0; i < n; i++){
  push();
	 rotate(particles[i].r);
	 particles[i].show();
	 pop();
	}
	
	/*stroke(255,0,0);
	beginShape();
 for(var i = 0; i < n; i++){
 	vertex(cos(particles[i].r*s),sin(particles[i].r*s));
 }
 endShape();*/
}

function Particle(r,s){
	this.r = r;
	this.s = s;
	
	this.show = function(){
		ellipse(r*s,r*s,s/r,s/r);	 
	}
}