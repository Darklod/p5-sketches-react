function Letter(letter) {
	var positions = [];
	switch (letter) {
		case "A":
			positions.push(createVector(-1, 0));
			positions.push(createVector(+0, 0));
			positions.push(createVector(+1, 0));

			positions.push(createVector(-1, 3));
			positions.push(createVector(+0, 3));
			positions.push(createVector(+1, 3));

			positions.push(createVector(-2, +2));
			positions.push(createVector(-2, +1));
			positions.push(createVector(-2, +0));
			positions.push(createVector(-2, -1));
			positions.push(createVector(-2, -2));
			positions.push(createVector(-2, -3));

			positions.push(createVector(+2, +2));
			positions.push(createVector(+2, +1));
			positions.push(createVector(+2, +0));
			positions.push(createVector(+2, -1));
			positions.push(createVector(+2, -2));
			positions.push(createVector(+2, -3));
			break;
		case "E":
			positions.push(createVector(-2, +3));
			positions.push(createVector(-2, +2));
			positions.push(createVector(-2, +1));
			positions.push(createVector(-2, +0));
			positions.push(createVector(-2, -1));
			positions.push(createVector(-2, -2));
			positions.push(createVector(-2, -3));

			positions.push(createVector(-1, +3));
			positions.push(createVector(+0, +3));
			positions.push(createVector(+1, +3));
			positions.push(createVector(+2, +3));

			positions.push(createVector(-1, -3));
			positions.push(createVector(+0, -3));
			positions.push(createVector(+1, -3));
			positions.push(createVector(+2, -3));

			positions.push(createVector(-1, 0));
			positions.push(createVector(+0, 0));
			positions.push(createVector(+1, 0));
			break;
		case "I":
			positions.push(createVector(0, +3));
			positions.push(createVector(0, +2));
			positions.push(createVector(0, +1));
			positions.push(createVector(0, +0));
			positions.push(createVector(0, -1));
			positions.push(createVector(0, -2));
			positions.push(createVector(0, -3));

			positions.push(createVector(-2, -3));
			positions.push(createVector(-1, -3));
			positions.push(createVector(+1, -3));
			positions.push(createVector(+2, -3));

			positions.push(createVector(-2, +3));
			positions.push(createVector(-1, +3));
			positions.push(createVector(+1, +3));
			positions.push(createVector(+2, +3));
			break;
		case "B":
			positions.push(createVector(-2, +3));
			positions.push(createVector(-2, +2));
			positions.push(createVector(-2, +1));
			positions.push(createVector(-2, +0));
			positions.push(createVector(-2, -1));
			positions.push(createVector(-2, -2));
			positions.push(createVector(-2, -3));

			positions.push(createVector(-1, +3));
			positions.push(createVector(+0, +3));
			positions.push(createVector(+1, +3));

			positions.push(createVector(-1, -3));
			positions.push(createVector(+0, -3));
			positions.push(createVector(+1, -3));

			positions.push(createVector(-1, 0));
			positions.push(createVector(+0, 0));
			positions.push(createVector(+1, 0));

			positions.push(createVector(+2, +2));
			positions.push(createVector(+2, +1));

			positions.push(createVector(+2, -2));
			positions.push(createVector(+2, -1));
			break;
		case "T":
			positions.push(createVector(0, +3));
			positions.push(createVector(0, +2));
			positions.push(createVector(0, +1));
			positions.push(createVector(0, +0));
			positions.push(createVector(0, -1));
			positions.push(createVector(0, -2));
			positions.push(createVector(0, -3));

			positions.push(createVector(-2, +3));
			positions.push(createVector(-1, +3));
			positions.push(createVector(+1, +3));
			positions.push(createVector(+2, +3));
			break;
		case "L":
			positions.push(createVector(-2, +3));
			positions.push(createVector(-2, +2));
			positions.push(createVector(-2, +1));
			positions.push(createVector(-2, +0));
			positions.push(createVector(-2, -1));
			positions.push(createVector(-2, -2));
			positions.push(createVector(-2, -3));

			positions.push(createVector(-2, -3));
			positions.push(createVector(-1, -3));
			positions.push(createVector(+0, -3));
			positions.push(createVector(+1, -3));
			positions.push(createVector(+2, -3));
			break;
		case "P":
			positions.push(createVector(-2, +3));
			positions.push(createVector(-2, +2));
			positions.push(createVector(-2, +1));
			positions.push(createVector(-2, +0));
			positions.push(createVector(-2, -1));
			positions.push(createVector(-2, -2));
			positions.push(createVector(-2, -3));

			positions.push(createVector(-2, +3));
			positions.push(createVector(-1, +3));
			positions.push(createVector(+0, +3));
			positions.push(createVector(+1, +3));

			positions.push(createVector(-2, 0));
			positions.push(createVector(-1, 0));
			positions.push(createVector(+0, 0));
			positions.push(createVector(+1, 0));

			positions.push(createVector(+2, +2));
			positions.push(createVector(+2, +1));
			break;
		case "F":
			positions.push(createVector(-2, +3));
			positions.push(createVector(-2, +2));
			positions.push(createVector(-2, +1));
			positions.push(createVector(-2, +0));
			positions.push(createVector(-2, -1));
			positions.push(createVector(-2, -2));
			positions.push(createVector(-2, -3));

			positions.push(createVector(-2, +3));
			positions.push(createVector(-1, +3));
			positions.push(createVector(+0, +3));
			positions.push(createVector(+1, +3));

			positions.push(createVector(-1, 0));
			positions.push(createVector(+0, 0));
			positions.push(createVector(+1, 0));
			positions.push(createVector(+2, +3));
			break;
		case "H":
			positions.push(createVector(-1, 0));
			positions.push(createVector(+0, 0));
			positions.push(createVector(+1, 0));

			positions.push(createVector(-2, +3));
			positions.push(createVector(-2, +2));
			positions.push(createVector(-2, +1));
			positions.push(createVector(-2, +0));
			positions.push(createVector(-2, -1));
			positions.push(createVector(-2, -2));
			positions.push(createVector(-2, -3));

			positions.push(createVector(+2, +3));
			positions.push(createVector(+2, +2));
			positions.push(createVector(+2, +1));
			positions.push(createVector(+2, +0));
			positions.push(createVector(+2, -1));
			positions.push(createVector(+2, -2));
			positions.push(createVector(+2, -3));
			break;
		case "Y":
			positions.push(createVector(0, +0));
			positions.push(createVector(0, -1));
			positions.push(createVector(0, -2));
			positions.push(createVector(0, -3));

			positions.push(createVector(-2, +3));
			positions.push(createVector(+2, +2));
			positions.push(createVector(+1, +1));
			positions.push(createVector(-1, +1));
			positions.push(createVector(-2, +2));
			positions.push(createVector(+2, +3));
			break;
		case "X":
			positions.push(createVector(-2, +3));
			positions.push(createVector(+2, +2));
			positions.push(createVector(+1, +1));
			positions.push(createVector(-1, +1));
			positions.push(createVector(-2, +2));
			positions.push(createVector(+2, +3));
			positions.push(createVector(+0, +0));
			positions.push(createVector(-2, -3));
			positions.push(createVector(+2, -2));
			positions.push(createVector(+1, -1));
			positions.push(createVector(-1, -1));
			positions.push(createVector(-2, -2));
			positions.push(createVector(+2, -3));
			break;
		case "D":
			positions.push(createVector(-2, +3));
			positions.push(createVector(-2, +2));
			positions.push(createVector(-2, +1));
			positions.push(createVector(-2, +0));
			positions.push(createVector(-2, -1));
			positions.push(createVector(-2, -2));
			positions.push(createVector(-2, -3));

			positions.push(createVector(+2, +2));
			positions.push(createVector(+2, +1));
			positions.push(createVector(+2, +0));
			positions.push(createVector(+2, -1));
			positions.push(createVector(+2, -2));

			positions.push(createVector(-1, 3));
			positions.push(createVector(+0, 3));
			positions.push(createVector(+1, 3));
			positions.push(createVector(-1, -3));
			positions.push(createVector(+0, -3));
			positions.push(createVector(+1, -3));
			break;
		case "R":
			positions.push(createVector(-2, +3));
			positions.push(createVector(-2, +2));
			positions.push(createVector(-2, +1));
			positions.push(createVector(-2, +0));
			positions.push(createVector(-2, -1));
			positions.push(createVector(-2, -2));
			positions.push(createVector(-2, -3));

			positions.push(createVector(-2, +3));
			positions.push(createVector(-1, +3));
			positions.push(createVector(+0, +3));
			positions.push(createVector(+1, +3));

			positions.push(createVector(-2, 0));
			positions.push(createVector(-1, 0));
			positions.push(createVector(+0, 0));
			positions.push(createVector(+1, 0));

			positions.push(createVector(+2, +2));
			positions.push(createVector(+2, +1));

			positions.push(createVector(+0, -1));
			positions.push(createVector(+1, -2));
			positions.push(createVector(+2, -3));
			break;
		case "S":
			positions.push(createVector(-1, +3));
			positions.push(createVector(+0, +3));
			positions.push(createVector(+1, +3));
			positions.push(createVector(+2, +3));

			positions.push(createVector(-1, +0));
			positions.push(createVector(+0, +0));
			positions.push(createVector(+1, +0));
			positions.push(createVector(-2, +0));

			positions.push(createVector(-2, -3));
			positions.push(createVector(-1, -3));
			positions.push(createVector(+0, -3));
			positions.push(createVector(+1, -3));

			positions.push(createVector(-2, +1));
			positions.push(createVector(-2, +2));

			positions.push(createVector(+2, -1));
			positions.push(createVector(+2, -2));
			break;
		case "C":
			positions.push(createVector(-2, +2));
			positions.push(createVector(-2, +1));
			positions.push(createVector(-2, +0));
			positions.push(createVector(-2, -1));
			positions.push(createVector(-2, -2));

			positions.push(createVector(-1, -3));
			positions.push(createVector(-1, +3));
			positions.push(createVector(+0, -3));
			positions.push(createVector(+0, +3));
			positions.push(createVector(+1, -3));
			positions.push(createVector(+1, +3));

			positions.push(createVector(+2, -2));
			positions.push(createVector(+2, +2));
			break;
		case "G":
			positions.push(createVector(+2, +3));
			positions.push(createVector(-2, +2));
			positions.push(createVector(-2, +1));
			positions.push(createVector(-2, +0));
			positions.push(createVector(-2, -1));
			positions.push(createVector(-2, -2));

			positions.push(createVector(-1, -3));
			positions.push(createVector(-1, +3));
			positions.push(createVector(+0, -3));
			positions.push(createVector(+0, +3));
			positions.push(createVector(+1, -3));
			positions.push(createVector(+1, +3));

			positions.push(createVector(+2, -2));
			positions.push(createVector(+2, -1));
			positions.push(createVector(+2, +0));
			positions.push(createVector(+1, +0));
			positions.push(createVector(+0, +0));
			break;
		case "O":
			positions.push(createVector(-2, +2));
			positions.push(createVector(-2, +1));
			positions.push(createVector(-2, +0));
			positions.push(createVector(-2, -1));
			positions.push(createVector(-2, -2));

			positions.push(createVector(-1, -3));
			positions.push(createVector(-1, +3));
			positions.push(createVector(+0, -3));
			positions.push(createVector(+0, +3));
			positions.push(createVector(+1, -3));
			positions.push(createVector(+1, +3));

			positions.push(createVector(+2, -2));
			positions.push(createVector(+2, -1));
			positions.push(createVector(+2, +0));
			positions.push(createVector(+2, +1));
			positions.push(createVector(+2, +2));
			break;
		case "Q":
			positions.push(createVector(-2, +2));
			positions.push(createVector(-2, +1));
			positions.push(createVector(-2, +0));
			positions.push(createVector(-2, -1));
			positions.push(createVector(-2, -2));

			positions.push(createVector(-1, -3));
			positions.push(createVector(-1, +3));
			positions.push(createVector(+0, -3));
			positions.push(createVector(+0, +3));
			positions.push(createVector(+1, -3));
			positions.push(createVector(+1, +3));

			positions.push(createVector(+2, -2));
			positions.push(createVector(+2, -1));
			positions.push(createVector(+2, +0));
			positions.push(createVector(+2, +1));
			positions.push(createVector(+2, +2));

			positions.push(createVector(+0, -1));
			positions.push(createVector(+1, -2));
			positions.push(createVector(+2, -3));
			break;
		case "J":
			positions.push(createVector(-2, -1));
			positions.push(createVector(-2, -2));

			positions.push(createVector(-1, -3));
			positions.push(createVector(+0, -3));
			positions.push(createVector(+1, -3));

			positions.push(createVector(+2, -3));
			positions.push(createVector(+2, -2));
			positions.push(createVector(+2, -2));
			positions.push(createVector(+2, -1));
			positions.push(createVector(+2, +0));
			positions.push(createVector(+2, +1));
			positions.push(createVector(+2, +2));
			break;
		case "U":
			positions.push(createVector(-2, +3));
			positions.push(createVector(-2, +2));
			positions.push(createVector(-2, +1));
			positions.push(createVector(-2, +0));
			positions.push(createVector(-2, -1));
			positions.push(createVector(-2, -2));

			positions.push(createVector(-1, -3));
			positions.push(createVector(+0, -3));
			positions.push(createVector(+1, -3));

			positions.push(createVector(+2, +3));
			positions.push(createVector(+2, -2));
			positions.push(createVector(+2, -1));
			positions.push(createVector(+2, +0));
			positions.push(createVector(+2, +1));
			positions.push(createVector(+2, +2));
			break;
		case "V":
			positions.push(createVector(-2, +3));
			positions.push(createVector(-2, +2));
			positions.push(createVector(-2, +1));
			positions.push(createVector(-2, +0));
			positions.push(createVector(-2, -1));

			positions.push(createVector(-1, -2));
			positions.push(createVector(+0, -3));
			positions.push(createVector(+1, -2));

			positions.push(createVector(+2, +3));
			positions.push(createVector(+2, -1));
			positions.push(createVector(+2, +0));
			positions.push(createVector(+2, +1));
			positions.push(createVector(+2, +2));
			break;
		case "K":
			positions.push(createVector(-2, +3));
			positions.push(createVector(-2, +2));
			positions.push(createVector(-2, +1));
			positions.push(createVector(-2, +0));
			positions.push(createVector(-2, -1));
			positions.push(createVector(-2, -2));
			positions.push(createVector(-2, -3));

			positions.push(createVector(+0, +1));
			positions.push(createVector(+1, +2));
			positions.push(createVector(+2, +3));
			positions.push(createVector(-1, +0));
			positions.push(createVector(+0, -1));
			positions.push(createVector(+1, -2));
			positions.push(createVector(+2, -3));
			break;
		case "M":
			positions.push(createVector(-2, +3));
			positions.push(createVector(-2, +2));
			positions.push(createVector(-2, +1));
			positions.push(createVector(-2, +0));
			positions.push(createVector(-2, -1));
			positions.push(createVector(-2, -2));
			positions.push(createVector(-2, -3));

			positions.push(createVector(+2, +3));
			positions.push(createVector(+2, +2));
			positions.push(createVector(+2, +1));
			positions.push(createVector(+2, +0));
			positions.push(createVector(+2, -1));
			positions.push(createVector(+2, -2));
			positions.push(createVector(+2, -3));

			positions.push(createVector(-1, +2));
			positions.push(createVector(+1, +2));
			positions.push(createVector(+0, +0));
			positions.push(createVector(+0, +1));
			break;
		case "N":
			positions.push(createVector(-2, +3));
			positions.push(createVector(-2, +2));
			positions.push(createVector(-2, +1));
			positions.push(createVector(-2, +0));
			positions.push(createVector(-2, -1));
			positions.push(createVector(-2, -2));
			positions.push(createVector(-2, -3));

			positions.push(createVector(+2, +3));
			positions.push(createVector(+2, +2));
			positions.push(createVector(+2, +1));
			positions.push(createVector(+2, +0));
			positions.push(createVector(+2, -1));
			positions.push(createVector(+2, -2));
			positions.push(createVector(+2, -3));

			positions.push(createVector(-1, +1));
			positions.push(createVector(+0, +0));
			positions.push(createVector(+1, -1));
			break;
		case "W":
			positions.push(createVector(-2, +3));
			positions.push(createVector(-2, +2));
			positions.push(createVector(-2, +1));
			positions.push(createVector(-2, +0));
			positions.push(createVector(-2, -1));
			positions.push(createVector(-2, -2));
			positions.push(createVector(-2, -3));

			positions.push(createVector(+2, +3));
			positions.push(createVector(+2, +2));
			positions.push(createVector(+2, +1));
			positions.push(createVector(+2, +0));
			positions.push(createVector(+2, -1));
			positions.push(createVector(+2, -2));
			positions.push(createVector(+2, -3));

			positions.push(createVector(-1, -2));
			positions.push(createVector(+1, -2));
			positions.push(createVector(+0, +0));
			positions.push(createVector(+0, -1));
			break;
		case "Z":
			positions.push(createVector(-2, -3));
			positions.push(createVector(-1, -3));
			positions.push(createVector(+0, -3));
			positions.push(createVector(+1, -3));
			positions.push(createVector(+2, -3));

			positions.push(createVector(-2, +3));
			positions.push(createVector(-1, +3));
			positions.push(createVector(+0, +3));
			positions.push(createVector(+1, +3));
			positions.push(createVector(+2, +3));

			positions.push(createVector(+2, +2));
			positions.push(createVector(+1, +1));
			positions.push(createVector(+0, +0));
			positions.push(createVector(-1, -1));
			positions.push(createVector(-2, -2));
			break;
		case "*":
			positions.push(createVector(+0, -3));
			positions.push(createVector(-1, -2));
			positions.push(createVector(-2, -1));
			positions.push(createVector(+1, -2));
			positions.push(createVector(+2, -1));
			positions.push(createVector(-2, +0));
			positions.push(createVector(-2, +1));
			positions.push(createVector(-1, +2));
			positions.push(createVector(+0, +1));
			positions.push(createVector(+1, +2));
			positions.push(createVector(+2, +1));
			positions.push(createVector(+2, +0));
			break;
	}
	return positions;
}