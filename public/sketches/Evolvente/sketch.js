var r = 100;

function setup(){
	createCanvas(windowWidth, windowHeight, WEBGL);
}

function draw(){
	background(0);
	//translate(height/2,width/2);
	
	noStroke();
	fill(255);
	
	for(var i = 0; i < TWO_PI; i+=0.01)
		ellipse(r*cos(i),r*sin(i),4,4);
	
	for(var k = 0; k < 360; k+= 360/60)
	{
		beginShape(TRIANGLE_STRIP);
		for(var i = 0; i < 1.5; i+=0.025){	
			var c = int(map(i,0,1.5,0,360));
			fill('hsl('+c+',100%,50%)');
			//noFill();
			
			var x = r * (cos(i) + i * sin(i));
			var y = r * (sin(i) - i * cos(i));
			
			var x1 = x * cos(6) - y * sin(6);
			var y1 = x * sin(6) + y * cos(6);
			
			vertex(x ,y ,0);	
			vertex(x1,y1,0);	
		}
		endShape();		
		rotate(PI/k);
	}
}