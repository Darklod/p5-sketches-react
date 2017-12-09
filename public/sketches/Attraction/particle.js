function Particle (x, y, attractor) {
    this.pos = new p5.Vector(x, y);
    this.vel = new p5.Vector();
    this.acc = new p5.Vector();
    this.mass = 1;

    this.update = function () {
        this.pos.add(this.vel);
        this.vel.add(this.acc);
    }

    this.render = function () {
        if (!attractor)
            fill(0, 100, 255);
        else 
            fill(255, 0, 100);
        noStroke();
        ellipse(this.pos.x, this.pos.y, 4, 4);
    }

    this.applyAttraction = function (target) {
        // F = G * (m1 * m2) / dist^2
        var dir = p5.Vector.sub(target.pos, this.pos);
        var dsq = dir.magSq();
        dsq = constrain(dsq, 25, 500);
        var G = 50;
        var mag = G / dsq;
        dir.setMag(mag);

        this.acc = dir;
    }

    this.removeAttraction = function () {
        this.acc = new p5.Vector();
    }
}