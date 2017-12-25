var a = 300;
var MIN = 0;
var MAX = 100;

function setup() {
  createCanvas(windowWidth,windowHeight);
  
  translate(width/2,height/2);
  background(0);
  //noStroke();
  
  //fill(255,0,100);
  stroke(237,20,61);
  for(var t = -50; t <= 200; t+=0.01){
    //ellipse(a * C(0,100,t),-a * S(0,100,t),5,5);
    line(a * C(t),-a * S(t),a * C(t+0.01),-a * S(t+0.01));
  }
}

function C(x){
  var sum = 0;
  for(var n = MIN; n < MAX; n++){
    sum += (Math.pow(-1,n) * ((Math.pow(x,4*n+1))/(factorial(2*n)*(4*n+1))));
  }
  return sum;
}

function S(x){
  var sum = 0;
  for(var n = MIN; n < MAX; n++){
    sum += (Math.pow(-1,n) * ((Math.pow(x,4*n+3))/(factorial(2*n+1)*(4*n+3))));
  }
  return sum;
}

function factorial(n){
  return (n == 0 || n == 1) ? 1 : n * factorial(n-1);
}