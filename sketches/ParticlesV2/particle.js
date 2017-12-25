function Particle(x,y,c,s,t){
	this.pos = createVector(x,y);
	this.vel = createVector(random(-0.5,0.5),random(-0.2,0.7));
	this.acc = createVector();
	
	this.c = parseInt(random(50,80));
	this.col = 'hsl('+ c +','+ this.transparency +'%,'+ this.c +'%)';
	this.size = random(10,20);	
	this.transparency = t || 0.1;
	this.lifetime = random(20,25);
		
	this.update = function(){
		this.pos.x += this.vel.x;
		this.pos.y += this.vel.y;
		
		this.vel.x += this.acc.x;
		this.vel.y += this.acc.y;		
		
		this.lifetime -= (random(7)/100);
				
		//fade int - fade out effect
		if(this.isOutOfBounds() || this.lifetime <= 0){
			if(this.transparency > 0.005)
				this.col = 'hsla('+ c +',100%,'+ this.c +'%,'+ (this.transparency-=0.005) +')';
		}else{
			if(this.transparency < 1 && this.lifetime >= 0)
				this.col = 'hsla('+ c +',100%,'+ this.c +'%,'+ (this.transparency+=0.005) +')';
		}
		this.acc.mult(0);
	}
	
	this.render = function(){
		noStroke();
		fill(this.col);
		
		switch(s){
			case 0:
				ellipse(this.pos.x,this.pos.y,this.size,this.size);
				break;
			case 1:
				rect(this.pos.x,this.pos.y,this.size,this.size);
				break;
			case 2:
				arc(this.pos.x, this.pos.y, this.size, this.size, 0, PI+QUARTER_PI, PIE);
				break;
			case 3:
				arc(this.pos.x, this.pos.y, this.size, this.size * 4.5, QUARTER_PI, PI-QUARTER_PI, PIE);
				break;
			case 4:
				arc(this.pos.x, this.pos.y, 20, 90, QUARTER_PI*2, PI, PIE);
				break;
			case 5:				triangle(this.pos.x,this.pos.y,this.pos.x+this.size,this.pos.y+this.size*2,this.pos.x+this.size,this.pos.y-this.size/2);
				break;
		}
	}
	
	this.attracted = function(target){
		var force = p5.Vector.sub(target, this.pos);
		var d = force.mag();
		d = constrain(d, 5, 25);
		var G = 6.67804;
		var strenght = G * this.size / (d * d); 
		
		force.setMag(strenght);
		force.mult(-5);
		this.acc.add(force);
	}
	
	this.death = function(){
		return this.isOutOfBounds() || this.lifetime <= 0 && this.transparency <= 0.005;
	}
	
	this.isOutOfBounds = function(){
		return this.pos.y < -this.size/2 || 
					 this.pos.y > height + this.size/2 ||
					 this.pos.x < -this.size/2 || 
					 this.pos.x > width + this.size/2;
	}
}