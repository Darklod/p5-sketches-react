var createFontMask = function(message, font, fontSize, col) {
  var x,y,img;
  
  imageMode(CENTER);
  
  x = width / 2;
  y = height / 2;
  
  // The shape
  var disc = createGraphics(width,height);
  disc.fill(col);  //this.col doesn't idk why D:
  disc.noStroke();
  disc.rect(0,0,width,height);
  
  // The image of the shape, ready for punching
  img = disc.get();
  
  // The punch
  var punch = createGraphics(width,height);
  punch.noStroke();
  punch.fill(255);
  punch.textFont(font);
  punch.textAlign(CENTER, CENTER); 
  punch.textSize(fontSize);
  punch.text(message, x, y);
  
  // Punch it!
  img.punchOut(punch._renderer);
  
  return img;
}