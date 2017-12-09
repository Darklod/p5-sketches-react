function setup(){
	createCanvas(1200,1200);
}

function draw(){
	background(0);
	
	stroke(0,255,0);
	
	for(var i = 0;i<=600;i+=10){
		line(600, 600-i,i,600);
	}
	
	for(var i = 0;i<=600;i+=10){
		line(600, i,1200,600-i);
	}
	
	for(var i = 600;i>=0;i-=10){
		line(600, 1200-i,i,1200-i);
	}
	
	for(var i = 0;i<=600;i+=20){
		line(1200, 1200-i,1200-i,i);
	}
}