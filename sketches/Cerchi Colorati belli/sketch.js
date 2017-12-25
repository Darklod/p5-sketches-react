var r;

function setup(){
	createCanvas(windowWidth,windowHeight);
	r = windowHeight/4.5;
	
	background(0);
	translate(windowWidth/2,windowHeight/2);
	
    noStroke();
	fill(255,0,0,25);
	for(var i = 0;i<TWO_PI;i+=HALF_PI/7){
		var x = r * cos(i);
		var y = r * sin(i);
		
		fill('hsla('+int(map(i,0,TWO_PI,0,360))+',100%,50%,0.2)');
		
		push();
		translate(x,y);
		beginShape();
		for(var j= 0;j <= TWO_PI;j += HALF_PI/10){
			var x1 = r * cos(j);
			var y1 = r * sin(j);
		
			vertex(x1,y1);	
		}
		endShape();
		pop();
	}
}