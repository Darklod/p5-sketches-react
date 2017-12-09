function Particle(x, y, speed, first) {
    this.x = x;
    this.y = y;
    this.value;
    this.speed = speed;
    this.first = first;
    this.timeslice = round(random(2, 20));

    this.render = function () {
        text(this.value, this.x, this.y);
        this.rain();
        this.setRandomCharacter();
    }

    this.setRandomCharacter = function () {
        if (frameCount % this.timeslice == 0) 
            this.value = String.fromCharCode(0x30A0 + round(random(0, 96)));
    }

    this.rain = function () {
        this.y = this.y >= height ? 0 : this.y += this.speed;
    }
}