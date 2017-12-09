function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
}

function draw() {
  background(0);
  fill(255);
  stroke(255);
  orbitControl(); 
  beginShape();
  for (var x = -150; x <= 150; x+=20  ) { 
    for (var y = -150; y <= 150; y+=20) { 
      for (var z = -150; z <= 150; z+=20) { 
        var cx = map(x,-150,150,0,255);
        var cy = map(y,-150,150,0,255);
        var cz = map(z,-150,150,0,255);
        fill(cx,cy,cz);
        vertex(0,0,0);       
        vertex(x,y,z);
      }
    }
  }
  endShape();
}