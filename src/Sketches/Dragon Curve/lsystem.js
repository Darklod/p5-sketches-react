
function lindenmayer(axiom, rules, iterations) {
  if (iterations === 0) {
    return axiom
  }
  return lindenmayer(axiom.split('').map(x => {
    return (x in rules) ? rules[x] : x;
  }).join(''), rules, iterations - 1);
}

export default function lsys (p, properties) {
  return {
    lindenmayer,
    drawSystem: (k) => {
      if (k === 'F') { 
        var x1 = properties.x + p.step * p.cos(p.radians(properties.currentangle));
        var y1 = properties.y + p.step * p.sin(p.radians(properties.currentangle));
        p.stroke('hsb(' + parseInt(p.map(properties.index, 0, properties.axiom.length, 0, 360))  + ', 50%, 100%)');
        p.line(properties.x, properties.y, x1, y1);
        
        properties.x = x1;
        properties.y = y1;
      } else if (k == '+') {
        properties.currentangle += properties.angle;
      } else if (k == '-') {
        properties.currentangle -= properties.angle;   
      }
    }
  }
}