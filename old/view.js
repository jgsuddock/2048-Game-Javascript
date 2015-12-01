
exports.printBoard = function(board) {
	console.log("+--------+--------+--------+--------+");
	for(var i = 0; i < 4; i++) {
		console.log("|        |        |        |        |");
		for(var j = 0; j < 4; j++) {
			if(board[i][j] == 0) {
				process.stdout.write("|        ");
			}
			else if(board[i][j] > 0 && board[i][j] < 10) {
				process.stdout.write("|   " + board[i][j] + "    ");
			}
			else if(board[i][j] >= 10 && board[i][j] < 100) {
				process.stdout.write("|   " + board[i][j] + "   ");
			}
			else if(board[i][j] >= 100 && board[i][j] < 1000) {
				process.stdout.write("|  " + board[i][j] + "   ");
			}
			else {
				process.stdout.write("|  " + board[i][j] + "  ");
			}
		}
		process.stdout.write("|\n");
		console.log("|        |        |        |        |");
		console.log("+--------+--------+--------+--------+");
	}
}
