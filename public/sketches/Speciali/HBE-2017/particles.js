function Particle (x, y, c1, c2) {
    this.pos = createVector(x, y); 
    this.rnd = random();
    
    this.render = function () {
        fill(c1);
        stroke(c2);
        if (this.rnd > 0.6) 
            rect(this.pos.x, this.pos.y, 7, 7);
        else if (this.rnd > 0.3)
            ellipse(this.pos.x, this.pos.y, 7, 7);
        else 
            triangle(this.pos.x - 3, this.pos.y - 2, this.pos.x + 5, this.pos.y - 2, this.pos.x + 1, this.pos.y + 5.5);
    }

    this.move = function (x,y) {
        this.pos.x = lerp(this.pos.x, x, 0.2);
        this.pos.y = lerp(this.pos.y, y, 0.2);
    }
}