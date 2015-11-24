
var prompt = require('prompt');

var move = require("./move.js");
var possibleMove = require("./possibleMove.js");

var board = [[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0]];
var availableDir = { l: false, r: false, u: false, d: false };
var currentScore = 0;

function onErr(err) {
	console.log(err);
	return 1;
}

/**
 * Returns a random integer between min (inclusive) and max (inclusive)
 */
var getRandomInt = function(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

var increaseScore = function(value) {
	currentScore += value;
}

var printBoard = function(board) {
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
var randomValue = function () {
	var index = getRandomInt(0, 4);
	if(index < 4) {
		return 2;
	}
	else {
		return 4;
	}
}

var randomItem = function (board) {
	//Creates an array of all zero indexes
	var zeros = [];
	for(var i = 0; i < 4; i++) {
		for(var j = 0; j < 4; j++) {
			if(board[i][j] == 0) {
				zeros.push({'v': i, 'h': j});
			}
		}
	}

	var index = getRandomInt(0, zeros.length - 1);
	var value = randomValue();
	board[zeros[index].v][zeros[index].h] = value;

	return board;
}

prompt.start();

var pauseMenu = function () {
	console.log('Pause Menu\n');
	console.log('Current Score: ' + '   High Score: ' + '\n');
	console.log('1) Continue');
	console.log('2) See History');
	console.log('3) Quit and Exit');
	prompt.get(['input'], function (err, result) {
		if (err) { return onErr(err); }
		if(result.input == '1') {
			main();
		}
		else if(result.input == '2') {
			pauseMenu();
		}
		else if(result.input == '3') {

			console.log('Are You Sure (y or n)?');
			prompt.get(['input'], function (err, result2) {
				if(result2.input == 'y') {
					console.log('Thank you for playing!\n');
					console.log('You Scored ' + '\n\n');

					//////////////////////////////////////////////// Insert Save Function //////////////////////////////////////////////////////

					return 0;
				}
				else {
					pauseMenu();
				}
			})
		}
		else {

		}
	});
}

var main = function () {
	availableDir.l = possibleMove.possibleMove(board, "LEFT");
	availableDir.r = possibleMove.possibleMove(board, "RIGHT");
	availableDir.u = possibleMove.possibleMove(board, "UP");
	availableDir.d = possibleMove.possibleMove(board, "DOWN");

	console.log('L: ' + availableDir.l + ' R: ' + availableDir.r + ' U: ' + availableDir.u + ' D: ' + availableDir.d);

	if(availableDir.l == false && availabaleDir.r == false && availableDir.u == false && availableDir.d == false) {
		console.log('Game Over!\n');
		console.log('Type \"restart\" or \"exit\"');
	}

	prompt.get(['direction'], function (err, result) {
		if (err) { return onErr(err); }
		console.log('Command-line input received:');
		console.log('  Direction: ' + result.direction);
		if (result.direction == 'l') {
			if(availableDir.l == true) {
				move.move(board,"LEFT");
				board = randomItem(board);
			}
			else {
				console.log("Cannot Move Left");
			}
		}
		else if (result.direction == 'r') {
			if(availableDir.r == true) {
				move.move(board,"RIGHT");
				board = randomItem(board);
			}
			else {
				console.log("Cannot Move Right");
			}
		}
		else if (result.direction == 'u') {
			if(availableDir.u == true) {
				move.move(board,"UP");
				board = randomItem(board);
			}
			else {
				console.log("Cannot Move Up");
			}
		}
		else if (result.direction == 'd') {
			if(availableDir.d == true) {
				move.move(board,"DOWN");
				board = randomItem(board);
			}
			else {
				console.log("Cannot Move Down");
			}
		}
		else if (result.direction == 'pause') {
			return 0;
		}
		else {
			console.log("Input must be \"l\",\"r\",\"u\",\"d\",\"pause\".");
		}

		printBoard(board);
		for(var i = 0; i < 4; i++) {
			for(var j = 0; j < 4; j++) {
				if(board[i][j] == 2048) {
					console.log("Congradulation! You Won!");
					return 0;
				}
			}
		}

		main();
	});
}

board = randomItem(board);
board = randomItem(board);

printBoard(board);
main();