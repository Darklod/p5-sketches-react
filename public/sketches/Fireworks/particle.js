function Particle(x, y, hue, firework, letter, effect) {
	this.firework = firework;
	this.letter = letter;
	this.hue = hue;
	this.pos = createVector(x, y);
	this.acc = createVector(0, 0);
	this.effect = effect;
	this.lifespan = 255;

	if (this.firework) {
		if (!this.letter) {
			this.vel = createVector(0, -random(windowHeight * 2.5 / 100, windowHeight * 2 / 100));
		} else {
			this.vel = createVector(0, -random(windowHeight * 2 / 100, windowHeight * 2.1 / 100));
		}
	} else {
		if (!this.letter) {
			this.vel = p5.Vector.random2D();
			this.vel.mult(random(2, 8));
		} else {
			this.vel = createVector(0, 0);
		}
	}

	this.applyForce = function(force) {
		this.acc.add(force);
	}

	this.time = 1;

	this.update = function() {
		if (!this.firework && !this.letter) {
			this.vel.mult(0.98);
			this.lifespan -= 2;
		}

		if (this.letter && this.vel.y > 0) {
			this.vel.mult(this.time);
			this.time -= 0.009;
			if (this.time <= 0) {
				this.vel = createVector(0, 0);
				this.acc = createVector(0, -0.2);
			}
		}

		if (this.effect)
			this.effect_timespan -= 0.2;

		this.vel.add(this.acc);
		this.pos.add(this.vel);
		this.acc.mult(0);
	}

	this.show = function() {
		colorMode(HSB);
		if (!this.firework) {
			stroke(this.hue, 255, 255, this.lifespan);
			strokeWeight(4);
		} else {
			stroke(this.hue, 255, 255);
			strokeWeight(10);
		}
		if(this.effect)
			strokeWeight(7);

		point(this.pos.x, this.pos.y);
	}

	this.done = function() {
		return this.lifespan < 0;
	}
}