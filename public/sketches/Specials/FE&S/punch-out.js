// Extend p5.Image, adding the converse of "mask", naming it "punchOut":
p5.Image.prototype.punchOut = function(p5Image) {

    if(p5Image === undefined){
        p5Image = this;
    }
    var currBlend = this.drawingContext.globalCompositeOperation;

    var scaleFactor = 1;
    if (p5Image instanceof p5.Graphics) {
        scaleFactor = p5Image._pInst._pixelDensity;
    }

    var copyArgs = [
        p5Image,
        0,
        0,
        scaleFactor*p5Image.width,
        scaleFactor*p5Image.height,
        0,
        0,
        this.width,
        this.height
    ];

    this.drawingContext.globalCompositeOperation = "destination-out";
    this.copy.apply(this, copyArgs);
    this.drawingContext.globalCompositeOperation = currBlend;
};
