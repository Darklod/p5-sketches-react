var fontSize = 15;
var streams = [];

function setup(){
	createCanvas(windowWidth, windowHeight);

	for (var j = 0; j < width; j+= fontSize) {
		var stream = new Stream();
		stream.generate(j, random(-500, 0));
		streams.push(stream);
	}

	textSize(fontSize);
}

function draw(){
	background(0, 150);
	
	for (var i = 0; i < streams.length; i++) {
		streams[i].render();
	}
}