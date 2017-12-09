var r = 200;

function setup() {
  createCanvas(windowWidth,windowHeight);
}
var k = 0;
function draw() {  
	frameRate(200);
  background(0);  
  colorMode(HSB);
  noStroke();
  translate(width/2, height/2);
  
  for (var r = 0; r < height; r+=6) {
    for (var i = 0; i < 360; i++) {
      var x = sin(i) * r;
      var y = cos(i) * r;

      //r*k+i   k+=100   (alpha = i%256 || (i*r)%256)
      //k*i+r   k+=200   (alpha = col || (r+i+k)%256)
      //r*k*i   k+=0.01
      //r+i+k   k+=100   (alpha = col || (i*r)%256)
      
      var col = (r*k+i) % 256;
      fill(col, 255, 255, (r+i+k)%256);
      //ellipse(x, y, 6, 6);
      rect(x, y, 6, 6);
    }
  }
  k+=200;
}