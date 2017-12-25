function index(x,y){
	if(x < 0 || y < 0 || x > cols - 1 || y > rows - 1)
		return -1;
	return x + y * cols;
}

function Cell(x,y){
	this.x = x;
	this.y = y;

	this.visited = false;

	this.walls = [true,true,true,true];

	this.show = function(){
		var x = this.x * sz;
		var y = this.y * sz;

		noFill();
		stroke(255);
		if(this.walls[0]){
			line(x,y,x+sz,y);
		}
		if(this.walls[1]){			
			line(x+sz,y,x+sz,y+sz);
		}
		if(this.walls[2]){
			line(x,y+sz,x+sz,y+sz);
		}
		if(this.walls[3]){
			line(x,y,x,y+sz);
		}

		if(this.visited){
			noStroke();
			fill(0,0,255,100);
			rect(x,y,sz,sz);
		}
	}

	this.checkNeighbours = function(){
		var neighbours = [];

		var top    = cells[index(x  ,y-1)];
		var right  = cells[index(x+1,y  )];
		var bottom = cells[index(x  ,y+1)];
		var left   = cells[index(x-1,y  )];

		if(top    && !top.visited)     neighbours.push(top);
		if(right  && !right.visited)   neighbours.push(right);
		if(bottom && !bottom.visited)  neighbours.push(bottom);
		if(left   && !left.visited)    neighbours.push(left);

		if(neighbours.length > 0){
			var rnd = floor(random(0,neighbours.length));
			return neighbours[rnd];
		}else{
			return undefined;
		}
	}

	this.highlight = function(){
		fill(255,0,100);
		noStroke();
		rect(x*sz,y*sz,sz,sz);
	}
}

function removeWalls(current,neighbour){
	var x = current.x - neighbour.x;
	var y = current.y - neighbour.y;

	if(x == -1) {
		current.walls[1] = false;
		neighbour.walls[3] = false;
	}
	else if(x == 1) {
		current.walls[3] = false;
		neighbour.walls[1] = false;
	}

	if(y == -1) {
		current.walls[2] = false;
		neighbour.walls[0] = false;
	}
	else if(y == 1) {
		current.walls[0] = false;
		neighbour.walls[2] = false;
	}

}