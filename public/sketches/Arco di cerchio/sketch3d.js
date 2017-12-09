var r = 100;
var parti = [];

function Parte(punto1,punto2,punto3,punto4){
	this.punto1 = punto1;
	this.punto2 = punto2;
	this.punto3 = punto3;
	this.punto4 = punto4;
	
	this.draw = function(){
		beginShape();
		vertex(this.punto1.x,this.punto1.y);
		vertex(this.punto2.x,this.punto2.y);
		endShape();
	}
}

function Punto(x,y){
	this.x = x;
	this.y = y;
}

function setup(){
	createCanvas(windowWidth,windowHeight,WEBGL);
	
	for(var i = 0; i < TWO_PI; i+=PI/5){
		var x = r * cos(i);
		var y = r * sin(i);
		
		for(var j = PI - 0.1 ; j < TWO_PI - 0.5; j += PI/30){
			var x1 = 20 * cos(j);
			var y1 = 20 * sin(j);

			var x2 = 20 * cos(j+PI/30);
			var y2 = 20 * sin(j+PI/30);
			
			var parte = new Parte(
				new Punto(x1,y1),
				new Punto(x2,y2)
			);
			beginShape();
			vertex(x1,y1,0);
			vertex(x2,y2,0);
			endShape();
			
			parti.push(parte);
		}
		
	}
}

function draw(){
	background(0);
	
	noFill();
	stroke(255);
	fill(255);
	
	beginShape();
	for(var i=0; i < TWO_PI; i+=PI/30){
		var x = 80 * cos(i);
		var y = 80 * sin(i);
		vertex(x,y,0);
	}
	endShape();
	
	beginShape();
	for(var i=0; i < TWO_PI; i+=PI/30){
		var x = 120 * cos(i);
		var y = 120 * sin(i);
		
		vertex(x,y,0);
	}
	endShape();	
	
	
	/*for(var i = 0; i < TWO_PI; i+=PI/5){
		var x = r * cos(i);
		var y = r * sin(i);
		
	    push();
		translate(x,y,0);
		sphere(20,1);
		pop();
		/*beginShape();	
		
		for(var j = PI - 0.1 ; j < TWO_PI - 0.5; j += PI/30){
			var x1 = 20 * cos(j);
			var y1 = 20 * sin(j);			
			vertex(x1,y1,0);
		}
		
		endShape();		*/
		//pop();
		
	   /* beginShape(TRIANGLE_STRIP);		
		//push();
		//translate(x,y,0);
		//rotateX(i);	   
		//var j = PI + 0.7; j < TWO_PI - 0.7; j += PI/30
		for(var j = PI + 0.7; j < TWO_PI - 0.7; j += PI/30){
			var x1 = 20 * cos(j);
			var y1 = 20 * sin(j);			
			vertex(x1,y1,0);
		}
		//pop();
		endShape();*/
		
	//}
}