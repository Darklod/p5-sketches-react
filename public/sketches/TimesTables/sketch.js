var points = [];
var a = 2;   //mult
var s = 250; //size
var p = 100; //precision
var play = false;

var btn_play;
var btn_stop;
var slider1; //a
var slider2; //velocity
var indicator1;
var indicator2;

function setup(){
	createCanvas(windowWidth, windowHeight);
	
	s = windowHeight / 230 * 100;
	//200 iterations|points
	for (var i = PI/100; i < TWO_PI; i+=PI/100) {
		var x = s * -cos(i);
		var y = s * -sin(i);
		
		points.push({x: x, y: y});
	}
	
	btn_play = createButton('Play');
	btn_play.position(20, 20);
	
	btn_play.mousePressed(function() {
		play = !play;
		btn_play.html(play ? "Stop" : "Play");
	});
	
	slider1 = createSlider(2, 200, 2, 1);
	slider1.position(20, 50);
	slider1.style('width', '200px');
	
	slider2 = createSlider(1, 300, 10);
	slider2.position(20, 80);
	slider2.style('width', '180px');
	
	indicator1 = createElement('label','2');
	indicator1.position(230, 52);
	indicator1.style('color', 'white');
	
	indicator2 = createElement('label','100');
	indicator2.position(210, 82);
	indicator2.style('color', 'white');
}

function draw(){
	background(0, 0, 0, 200);
	translate(width / 2, height / 2);
	
	fill(255);
	ellipse(0, 0, s * 2 + 10, s * 2 + 10);
	
	frameRate(slider2.value());
	indicator2.html(slider2.value());
		
	for (var i = 0; i < points.length; i++) {		
		var c = color('hsl(' + parseInt((a * points.length) % 360) + ', 100%, 50%)');
		stroke(c);
		line(
			points[i].x,
			points[i].y,
			points[Math.round(i * a) % points.length].x,
			points[Math.round(i * a) % points.length].y
			);
	}
	
	var n = 0;
	for (var i = PI/100; i < TWO_PI; i+=PI/100) {
		var p = (n % 2 == 0) ? 1 : -1;
		var x = (s + 25 + p * 5) * -cos(i);
		var y = (s + 25 + p * 5) * -sin(i);
		
		textSize(9);
		fill(255);
		noStroke();
		textAlign(RIGHT);
		text(n, x, y);
		n++;
	}
	
	for (var i = 0; i < points.length; i++) {
		fill(255, 0, 0);
		noStroke();
		ellipse(points[i].x, points[i].y, 5, 5);
	}
	
	if(play){
		a += 0.1;		
		slider1.value(parseInt(a));
		if(a > 200) {
			a = 2;
		}		
	} else {
		a = slider1.value();
	}
	indicator1.html(parseInt(a));
}

