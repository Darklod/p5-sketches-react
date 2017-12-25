function Particle (x, y, c1, c2) {
    this.pos = createVector(x, y);
    this.vel = createVector(0, 0);
    this.acc = createVector(0, 0);

    this.render = function () {
        fill(c1);
        stroke(c2);
        rect(this.pos.x, this.pos.y, 5, 5);
    }

    this.move = function (x,y) {
        this.pos.x = lerp(this.pos.x, x, 0.05);
        this.pos.y = lerp(this.pos.y, y, 0.05);
    }
}