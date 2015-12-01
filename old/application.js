var view = require("./testview.js");

//$("#yay1").hide();
//$("#yay2").text("What's up world!");

var index = 2;

var board = [[0,0,0,0],[2,4,0,0],[4,128,2,0],[2048,1024,8,16]];

// 
// Wait for Keystroke
// 
$(document).keydown(function(e) {
  if(e.which == 37) { //Left Key
    $("#item" + 0 + index).text("Left");
  }
  else if(e.which == 38) {
    $("#item" + 0 + index).text("Up");
  }
  else if(e.which == 39) {
    $("#item" + 0 + index).text("Right");
  }
  else if(e.which == 40) {
    $("#item" + 0 + index).text("Down");
  }
 });
 $(document).keypress(function(e) {
  if(e.which == 105) { //I key
    $("#item" + 0 + index).text("I");
    //$("#item" + index).css("background-color","");
  }
  else if(e.which == 106) { //J key
    $("#item" + 0 + index).text("J");
  }
  else if(e.which == 107) { //K key
    $("#item" + 0 + index).text("K");
  }
  else if(e.which == 108) { //L key
    $("#item" + 0 + index).text("L");
  }
});

var changeBackColor =  function(row, col, val) {

	var backgroundcolor = "";

	//Sets Background Color
	if(val === 0) { 
		backgroundcolor = "#F9EBD1";
	}
	else if(val === 2) {
		backgroundcolor = "#cc9a66";
	}
	else if(val === 4) {
		backgroundcolor = "#ff9933";
	}
	else if(val === 8) {
		backgroundcolor = "#FF6600";
	}
	else if(val === 16) {
		backgroundcolor = "#ff3300";
	}
	else if(val === 32) {
		backgroundcolor = "#ff0000";
	}
	else if(val === 64) {
		backgroundcolor = "#ff3333";
	}
	else if(val === 128) {
		backgroundcolor = "#ff0066";
	}
	else if(val === 256) {
		backgroundcolor = "#cc00ff";
	}
	else if(val === 512) {
		backgroundcolor = "#6600ff";
	}
	else if(val === 1024) {
		backgroundcolor = "#0000ff";
	}
	else if(val === 2048) {
		backgroundcolor = "#ffcc00";
	}
	else {
		backgroundcolor = "black";
	}

	//Updates Background Color
	$("#item" + row + col).css("background-color",backgroundcolor);

	//Updates Text Shadow
	if(val === 2048) {
		$("#item" + row + col).css("text-shadow","0 0 8px #000000");
	}
	else {
		$("#item" + row + col).css("text-shadow","none");
	}

	//Updates Text
	if(val === 0) {
		$("#item" + row + col).text("");
	}
	else {
		$("#item" + row + col).text(val);
	}
}

var printBoard = function(board) {
	for(var i = 0; i < 4; i++) {
		for(var j = 0; j < 4; j++) {
			changeBackColor(i, j, board[i][j]);
		}
	}
}

printBoard(board);

//$("#score").text("100");
//$("#item" + index).text("");

