var arr = [];
var n = 100;
var cellsize = 2;
var y = 0;

function setup () {
  createCanvas(windowWidth, windowHeight);
  n = width/cellsize;
  
  background(0);
  fill(0, 255, 0);
  noStroke();
  for (var i = 0; i < n; i++) {
    arr[i] = Math.floor(Math.random() * 2);
  }
}

function draw () {
	var tmp = [];
	for (var i = 0; i < n; i++) {
		tmp[i] = calculate(arr[(i + 1) % n],
						   arr[i],
						   arr[i < 1 ? n - 1 : i - 1]);
	}
	printStuff(tmp);
	arr = tmp;

	if (y > height/cellsize) noLoop();
	
	y++;
}

function calculate (a, b, c) {
  var n = a + b * 2 + c * 4;

  console.log(n);
  
  switch (n) {
    case 3: case 4: case 5: case 7: 
      return 1;
    default:
      return 0;
  }
}

function printStuff (arr) {
  textSize(32);
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] === 1) {
        rect(i * cellsize, y * cellsize, cellsize, cellsize);
    }
  }
}