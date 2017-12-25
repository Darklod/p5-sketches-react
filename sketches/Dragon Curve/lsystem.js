function lindenmayer(axiom, rules, iterations) {
  if (iterations === 0) {
    return axiom
  }
  return lindenmayer(axiom.split('').map(x => {
    return (x in rules) ? rules[x] : x;
  }).join(''), rules, iterations - 1);
}

function drawSystem(k) {
  if (k == 'F') { 
    var x1 = x + step * cos(radians(currentangle));
    var y1 = y + step * sin(radians(currentangle));
    stroke('hsb(' + parseInt(map(index, 0, axiom.length, 0, 360))  + ', 50%, 100%)');
    line(x, y, x1, y1);
    
    x = x1;
    y = y1;
  } else if (k == '+') {
    currentangle += angle;
  } else if (k == '-') {
    currentangle -= angle;   
  }
}