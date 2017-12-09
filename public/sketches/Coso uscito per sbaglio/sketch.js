function setup(){
	createCanvas(windowWidth, windowHeight, WEBGL);
}

function draw() {
  background(0);
  fill(255);
  stroke(255);
  
  for(var y = 0; y<200;y+=20){
    for(var x = -200; x < 200;x+=20){
	  fill(map(y,0,200,0,255),map(x,-200,200,0,255),1);
      beginShape();
      vertex(x,y,0);
      vertex(x+60,-y,0);
      endShape();
    }
  }
}