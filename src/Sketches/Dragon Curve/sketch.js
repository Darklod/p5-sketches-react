import lsys from './lsystem';

export default function sketch (p) {
  // TURTLE STUFF:
  var x, y;
  var currentangle = -90;
  var step = 10;
  var angle = 90;

  // LINDENMAYER STUFF (L-SYSTEMS)
  var axiom = 'FX'; 
  var iterations = 10;
  var rules = {
    'X': 'X+YF+',
    'Y': '-FX-Y'
  };

  var index = 0;
  var passo = 0;

  var lsystem = lsys(p, this);

  p.setup = () => {
    p.createCanvas(p.windowWidth, p.windowHeight);
    p.background(250);
    p.strokeWeight(4);
    p.stroke(0, 0, 0, 255);
    
    x = p.width/2;
    y = p.height/2;
    
    // COMPUTE THE L-SYSTEM
    axiom = lsystem.lindenmayer(axiom, rules, iterations);
  }

  p.draw = () => {
    lsystem.drawSystem(axiom[index]); 

    if (index > axiom.length-1) 
      p.noLoop();
    else 
      index++;
  }
}