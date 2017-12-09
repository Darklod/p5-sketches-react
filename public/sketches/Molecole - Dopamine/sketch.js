var font;

function preload(){
	font = loadFont('./assets/FreeSans.otf');
}

function setup(){
	createCanvas(windowWidth, windowHeight);
}

function draw(){
	background(255);

	translate(width/2, height/2);

	textSize(32);
	textFont(font);
	text('Dopamine: C₈H₁₁NO₂', - 160, -height/2 + 50);

	noStroke();
	fill(30, 30, 30);

	push();
	rotate(90 * PI / 180);
	polygon(0, 0, 120, 6, 15);
	polygon(0, 0, 100, 6, 15, [0,2,4]);
	pop();

	rotate(30 * PI / 180);
	beginShape();
	vertex(-120, -7.5);
	vertex(-230, -7.5);
	vertex(-230, +7.5);
	vertex(-120, +7.5);
	endShape();

	ellipse(-250, 0, 60, 60);

	rotate(-60 * PI / 180);
	beginShape();
	vertex(-120, -7.5);
	vertex(-230, -7.5);
	vertex(-230, +7.5);
	vertex(-120, +7.5);
	endShape();

	ellipse(-250, 0, 60, 60);

	rotate(-180 * PI / 180);
	beginShape();
	vertex(-120, -7.5);
	vertex(-230, -7.5);
	vertex(-230, +7.5);
	vertex(-120, +7.5);
	endShape();
	
	translate(-224, 3);
	
	rotate(60 * PI /180)
	beginShape();
	vertex(-0, -7.5);
	vertex(-110, -7.5);
	vertex(-110, +7.5);
	vertex(-0, +7.5);
	endShape();

	translate(-104, -4);
	rotate(-60 * PI /180)
	beginShape();
	vertex(-0, -7.5);
	vertex(-70, -7.5);
	vertex(-70, +7.5);
	vertex(-0, +7.5);
	endShape();

	translate(-80, 0);

	ellipse(0, 0, 60, 60);
}

function polygon(x, y, radius, sides, border, sidesToShow) {
  var angle = TWO_PI / sides;

  var k = 0;
  for (var a = 0; a < TWO_PI; a += angle) {
    if (sidesToShow && sidesToShow.indexOf(k) == -1) { k++; continue; }  
	 
  	var sx = x + cos(a) * radius;
    var sy = y + sin(a) * radius;

	var sx2 = x + cos(a) * (radius + border);
    var sy2 = y + sin(a) * (radius + border);
    
	var sx3 = x + cos(a + angle) * radius;
    var sy3 = y + sin(a + angle) * radius;
    
	var sx4 = x + cos(a + angle) * (radius + border);
    var sy4 = y + sin(a + angle) * (radius + border);

	beginShape(QUADS);
	vertex(sx, sy);
    vertex(sx3, sy3);
    vertex(sx4, sy4);
	vertex(sx2, sy2);
  	endShape();
	
	k++;
  }
}