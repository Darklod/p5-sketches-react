function Firework(x, y, letter) {
	var rnd = random(360);
	this.hue = color('hsla('+floor(rnd)+', 100%, 50%, 1)');
	this.x = x;
	this.y = y;
	if (this.x && this.y) {
		this.firework = new Particle(this.x, this.y, this.hue, true, true);
	} else {
		this.firework = new Particle(random(width), height, this.hue, true, false);
	}
	this.exploded = false;
	this.particles = [];
	this.letter = letter;

	this.done = function() {
		return this.exploded && this.particles.length === 0;
	}

	this.update = function() {
		if (!this.exploded) {
			this.firework.applyForce(gravity);
			this.firework.update();

			if (this.firework.vel.y >= 0) {
				if (!this.exploded)
					sound1.play();
				this.exploded = true;
				this.explode();
			}
		}
		for (var i = this.particles.length - 1; i >= 0; i--) {
			this.particles[i].applyForce(gravity);
			this.particles[i].update();
			if (this.particles[i].done()) {
				this.particles.splice(i, 1);
			}
		}
	}

	this.show = function() {
		if (!this.exploded)
			this.firework.show();
		for (var p in this.particles) {
			this.particles[p].show();
		}
	}

	this.explode = function() {
		if (this.letter !== undefined) {
			var xoff = this.firework.pos.x;
			var yoff = this.firework.pos.y;

			var positions = Letter(this.letter);

			for (var k in positions) {
				var p = new Particle(xoff + positions[k].x * 10, yoff - positions[k].y * 10, this.hue, false, true, true);
				this.particles.push(p);
			}

			var i = 0;
			for (var k in positions) {
				if (i == 5) break;
				colorMode(RGB);
				var p_ = new Particle(xoff + positions[k].x * 10, yoff - positions[k].y * 10, color(255, 255, 255, 100), false, false, true);
				this.particles.push(p_);
				i += 1;
			}

		} else {
			for (var i = 0; i < 100; i++) {
				var p1 = new Particle(this.firework.pos.x, this.firework.pos.y, this.hue, false, false);
				this.particles.push(p1);
			}
		}
	}
}