function Particle(x,y,c,t){
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

		beginShape();
		for (var t = 0; t < json.length; t+=3) {
			var x = json[t].x;
			var y = json[t].y;
			vertex(this.pos.x + x*this.size/10,this.pos.y+ y*this.size/10);
		}
		endShape();
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
