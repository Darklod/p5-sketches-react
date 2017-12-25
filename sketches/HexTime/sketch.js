var font;

function preload(){
	font = loadFont('Chasing Hearts - TTF.ttf');
}

function setup(){
	createCanvas(windowWidth,windowHeight);
}

function draw(){	
	var h = hour();
	var m = minute();
	var s = second();
	
	if(h <= 9) h = '0'+h;
	if(m <= 9) m = '0'+m;
	if(s <= 9) s = '0'+s;
	
	var c = '#'+h+m+s;
	
	var hh = h.toString(16);
	var hm = m.toString(16);
	var hs = s.toString(16);
	
	if(hh.length == 1) hh = '0'+hh;
	if(hm.length == 1) hm = '0'+hm;
	if(hs.length == 1) hs = '0'+hs;
	
	var hex = '#'+hh+hm+hs;
	
	background(hex);
	
	translate(width/2 - 7 * 25,height/2);
	
	fill(255);
	textFont(font);	
	textSize(100);	
	text(hex.toUpperCase(),0,0);
}