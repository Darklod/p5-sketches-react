function setup(){
	createCanvas(windowWidth,windowHeight);
}

function draw(){
	background(0);
	
	var size = 35;
	var rows = width/size;
	var cols = height/size;
	beginShape(TRIANGLES);
	for (var i = 0; i < rows; i++) {
		for (var j = 0; j < cols; j++) {
			fill(255, map(i,0,rows,0,255), map(j,0,cols,0,255));
			stroke(map(i*j,0,rows*cols,0,255));
			rect(i* size, j*size,size, size);
			triangle(i* size, j*size, (i+1)*size,(j+1)*size, 0);
			ellipse(i* size, j*size, size/2, size/2);
		}
	}
	endShape();
}