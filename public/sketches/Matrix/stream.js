function Stream() {
    this.particles = [];
    this.speed = round(random(5, 20));
    this.n = round(random(6,30));
    
    this.generate = function (x, y) {
        var first = round(random(0,1)) == 1;
        for (var i = 0; i < this.n; i++) {
            var p = new Particle(x, y - i * fontSize, this.speed, first);
            p.setRandomCharacter();
            this.particles.push(p);
            first = false;
        }
    }

    this.render = function () {
        this.particles.forEach(function(p) {  
            if (p.first) {
                fill(100, 255, 170);
            } else {
                fill(0, 255, 70);
            }
            text(p.value, p.x, p.y);
            p.rain();
            p.setRandomCharacter();
        });
    }
}