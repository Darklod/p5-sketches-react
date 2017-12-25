var numbers = [];
var num = 100; //num = 700
var min_val = 1;
var max_val = 30;
var block_size;

function setup(){
	createCanvas(windowWidth,windowHeight);
	
	max_val = height-100;
	
	for(var i = 0; i < num; i++){
		numbers[i] = random(min_val,max_val);
	}
	block_size = width/num;
}

var swapped = true;

function draw(){
	frameRate(5);
	background(0);
	
	fill(255);	
	textSize(30);
	text("Bubble Sort - O(n²)",20,50);
	
	translate(width/2 - numbers.length * block_size / 2, height);
	
	for(var x = 0; x < numbers.length; x++){
		var col = map(numbers[x],min_val,max_val,0,360);		
		fill('hsl('+ parseInt(col) +',100%,50%)');
		rect(x * block_size, -numbers[x], block_size, numbers[x]);
	}
	
  if(swapped){
		  swapped = false;
			for (var i=0; i < numbers.length-1; i++) {
					if (numbers[i] > numbers[i+1]) {
							var temp = numbers[i];
							numbers[i] = numbers[i+1];
							numbers[i+1] = temp;
							swapped = true;
					}
			}			
	}
}
