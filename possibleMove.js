
exports.possibleMove = function (board,dir) {
	var indexes = [[0, 1, 2, 3], [3, 2, 1, 0]];
	var LUorDR = 0;

	if(dir == "RIGHT" || dir == "DOWN") {
		LUorDR = 1;
	}

	if(dir == "LEFT" || dir == "RIGHT") {
		for(var i = 0; i < 4; i++) {
			if(board[i][indexes[LUorDR][0]] == 0) {
				if(board[i][indexes[LUorDR][1]] > 0 || board[i][indexes[LUorDR][2]] > 0 || board[i][indexes[LUorDR][3]] > 0) {
					return true;
				}
			}
			if(board[i][indexes[LUorDR][1]] == 0) {
				if(board[i][indexes[LUorDR][2]] > 0 || board[i][indexes[LUorDR][3]] > 0) {
					return true;
				}
			}
			if(board[i][indexes[LUorDR][2]] == 0) {
				if(board[i][indexes[LUorDR][3]] > 0) {
					return true;
				}
			}
			if(board[i][indexes[LUorDR][0]] == board[i][indexes[LUorDR][1]] && board[i][indexes[LUorDR][0]] != 0 && board[i][indexes[LUorDR][1]] != 0) {
				return true;
			}
			if(board[i][indexes[LUorDR][1]] == board[i][indexes[LUorDR][2]] && board[i][indexes[LUorDR][1]] != 0 && board[i][indexes[LUorDR][2]] != 0) {
				return true;
			}
			if(board[i][indexes[LUorDR][2]] == board[i][indexes[LUorDR][3]] && board[i][indexes[LUorDR][2]] != 0 && board[i][indexes[LUorDR][3]] != 0) {
				return true;
			}
		}
	}
	else {
		for(var i = 0; i < 4; i++) {
			if(board[indexes[LUorDR][0]][i] == 0) {
				if(board[indexes[LUorDR][1]][i] > 0 || board[indexes[LUorDR][2]][i] > 0 || board[indexes[LUorDR][3]][i] > 0) {
					return true;
				}
			}
			if(board[indexes[LUorDR][1]][i] == 0) {
				if(board[indexes[LUorDR][2]][i] > 0 || board[indexes[LUorDR][3]][i] > 0) {
					return true;
				}
			}
			if(board[indexes[LUorDR][2]][i] == 0) {
				if(board[indexes[LUorDR][3]][i]) {
					return true;
				}
			}
			if(board[indexes[LUorDR][0]][i] == board[indexes[LUorDR][1]][i] && board[indexes[LUorDR][0]][i] != 0 && board[indexes[LUorDR][1]][i] != 0) {
				return true;
			}
			if(board[indexes[LUorDR][1]][i] == board[indexes[LUorDR][2]][i] && board[indexes[LUorDR][1]][i] != 0 && board[indexes[LUorDR][2]][i] != 0) {
				return true;
			}
			if(board[indexes[LUorDR][2]][i] == board[indexes[LUorDR][3]][i] && board[indexes[LUorDR][2]][i] != 0 && board[indexes[LUorDR][3]][i] != 0) {
				return true;
			}
		}
	}
	return false;
}
