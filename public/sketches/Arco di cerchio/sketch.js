var r = 100;

function setup(){
	createCanvas(windowWidth,windowHeight);
}

function draw(){
	background(0);
	translate(width/2,height/2);
	
	noFill();
	stroke(255);
	
	beginShape();
	for(var i=0; i < TWO_PI; i+=PI/30){
		var x = 85 * cos(i);
		var y = 85 * sin(i);
		vertex(x,y);
	}
	endShape();
	
	beginShape();
	for(var i=0; i < TWO_PI; i+=PI/30){
		var x = 115 * cos(i);
		var y = 115 * sin(i);
		
		vertex(x,y);
	}
	endShape();	

	for(var i = 0; i < TWO_PI; i+=PI/5){
		var x = r * cos(i);
		var y = r * sin(i);
		
	    beginShape(TRIANGLE_STRIP);
		
		push();
		translate(x,y);
		rotate(i);	
		
		//var j = PI + 0.7; j < TWO_PI - 0.7; j += PI/30
		for(var j = PI + 0.7; j < TWO_PI - 0.7; j += PI/30){
			var x1 = 20 * cos(j);
			var y1 = 20 * sin(j);			
			vertex(x1,y1);
		}
		endShape();
		pop();
	}
}