var b = 2;
var r = 200;
var tot;
var equ;

var rot = 0;

function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);

  tot = TWO_PI*50;
  equ = tot/4;

  var span1 = createElement("span", "Angolo: ");
  sliderB = createSlider(1,10,8);
  var span2 = createElement("span", "Dimensione: ");
  sliderR = createSlider(0,400,200);
  muovi = createCheckbox(" Ruota");
  
  sliderB.position(120, 20);
  sliderR.position(120, 50);
  muovi.position(20, 80);
  
  span1.position(20, 20);
  span2.position(20, 50);
  
  span1.style("color", "white");
  span2.style("color", "white");
  muovi.style("color", "white");
}

function draw() {
  background(0);
  
  b = sliderB.value();
  r = sliderR.value();

  fill(255);
  //sphere(200);

  fill(255,50,50);

  var m = 1 / Math.tan(b); 
  
  beginShape(TRIANGLE_STRIP);
  for(var lat = 0; lat < tot; lat+=0.005){
    var a = m * (lat - equ);
    var x = r * cos(lat + rot) / Math.cosh(a);
    var y = r * sin(lat + rot) / Math.cosh(a);
    var z = r * Math.tanh(a);
     
    vertex(x,z,y);
    var k = 1;    
    vertex(x+k,z+k,y+k);
  }
  endShape();
  
  if(muovi.checked()){
    if(rot == 2) rot = 0;
    rot+=0.04;
  }
}