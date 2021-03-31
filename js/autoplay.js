var Total_secs;
var Total_mins;
var cronometer;

var Moves;

var board = new Array(8);


var Move_Required;
var Bonus;

var CellSelected_x;
var CellSelected_y;

var GameOver = true;

var fullBoard = false;

var board_state = new Array(8);


document.getElementById("moves").innerHTML = "0";
ShowWelcome("Select difficulty");

function autoplay() {
	Moves = 64;
	Bonus = false;
	

	for (i=0; i<8; i++) board[i] = new Array(8);

	ClearBoard();

	ResetTime();
	StartTime();

	x = Math.round(Math.random()*7);
	y = Math.round(Math.random()*7);

	CellSelected_x = x;
	CellSelected_y = y;
	SelectCell(x, y);	
}

// 0 -> vacia
// 1 -> ocupada