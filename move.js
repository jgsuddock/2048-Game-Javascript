
//Designed to Shift Array Towards Index 0
var moveLine = function (checkArray, newArray, checkIndex, pasteIndex) {
	if(checkIndex > 3) {
		return newArray;
	}
	else {
		if(checkArray[checkIndex] == 0) {
			checkIndex++;
			return moveLine(checkArray, newArray, checkIndex, pasteIndex);
		}
		else {
			if(newArray[pasteIndex] == 0) {
				newArray[pasteIndex] = checkArray[checkIndex];
				checkIndex++;
				return moveLine(checkArray, newArray, checkIndex, pasteIndex);
			}
			else {
				if(checkArray[checkIndex] == newArray[pasteIndex]) {
					newArray[pasteIndex] = newArray[pasteIndex] * 2;
					checkIndex++;
					pasteIndex++;
					return moveLine(checkArray, newArray, checkIndex, pasteIndex);
				}
				else {
					pasteIndex++;
					newArray[pasteIndex] = checkArray[checkIndex];
					checkIndex++;
					return moveLine(checkArray, newArray, checkIndex, pasteIndex);
				}
			}
		}
	}
}

exports.move = function (board,dir) {
	if(dir == "LEFT") {
		for(var i = 0; i < 4; i++) {
			var array = moveLine(board[i], [0, 0, 0, 0], 0, 0);
			board[i] = array;
		}
	}
	else if (dir == "RIGHT") {
		for(var i = 0; i < 4; i++) {
			var array = moveLine([board[i][3], board[i][2], board[i][1], board[i][0]], [0, 0, 0, 0], 0, 0);
			board[i][3] = array[0];
			board[i][2] = array[1];
			board[i][1] = array[2];
			board[i][0] = array[3];
		}
	}
	else if (dir == "UP") {
		for(var i = 0; i < 4; i++) {
			var array = moveLine([board[0][i], board[1][i], board[2][i], board[3][i]], [0, 0, 0, 0], 0, 0);
			board[0][i] = array[0];
			board[1][i] = array[1];
			board[2][i] = array[2];
			board[3][i] = array[3];
		}
	}
	else {
		for(var i = 0; i < 4; i++) {
			var array = moveLine([board[3][i], board[2][i], board[1][i], board[0][i]], [0, 0, 0, 0], 0, 0);
			board[3][i] = array[0];
			board[2][i] = array[1];
			board[1][i] = array[2];
			board[0][i] = array[3];
		}
	}
	return board;
}