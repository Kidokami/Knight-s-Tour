function ClearBoard(){
	for (i=0; i<8; i++){
		for (j=0; j<8; j++){
			board[i][j] = 0;

			//PARA HEREDAR EL ESTILO ANTIGUP
			cell = document.getElementById("c"+i+j);
			cell.style.background = ""; 
			cell = document.getElementById("c"+i+j).innerHTML = "";
		}
	}
}

function Check_fullBoard(){
	for (i=0; i<8; i++){
		board_state[i] = board[i].includes(0);
	}
	fullBoard = !board_state.includes(true);
}

function Check_SuccessfullEnd(){
	SuccesfullEnd = true;
	if (Moves > 0) SuccesfullEnd = false;
	if (SuccesfullEnd) ShowMessage("You Win!", !SuccesfullEnd);
}

function Check_GameOver(x, y){
	Options = 0;

	for(i=1;i<=2;i++){
		for(j=1;j<=2;j++){
			options_x=Math.pow(-1, i)+x;
			options_y=Math.pow(-1, j)*2+y;
			
			if(options_x < 8 && options_y < 8 &&
				options_x >= 0 && options_y >= 0){
				if(board[options_x][options_y] != 1) Options++;
			}
		}
	}

	for(i=1;i<=2;i++){
		for(j=1;j<=2;j++){
			options_x=Math.pow(-1, i)*2+x;
			options_y=Math.pow(-1, j)+y;
			cell = document.getElementById("c" + x_n + y_n);

			if(options_x < 8 && options_y < 8 &&
				options_x >= 0 && options_y >= 0){
				if(board[options_x][options_y] != 1) Options++;
			}
		}
	}

	if(Bonus) Options = Moves;
	document.getElementById("options").innerHTML = Options;

	//if(!Options) alert(SuccesfullEnd);
	if(!Options && !SuccesfullEnd) ShowMessage("Game Over", GameOver);
}


function PaintCell(x, y, color){
	cell = document.getElementById("c" + x + y);
	cell.style.background = color;
}

function PossibleMoves(x, y, shadow){
	for(i=0; i<=8; i++){
		for(j=0; j<=8; j++){
			cell = document.getElementById("c" + i + j);
			if(cell !== null)
				cell.style.boxShadow = "none";
		}
	}

	if(Bonus) {
		for(i=0; i<=8; i++){
			for(j=0; j<=8; j++){
				cell = document.getElementById("c" + i + j);
				if(cell !== null && board[i][j] !== 1)
					cell.style.boxShadow = shadow;
			}
		}
	}

	else{

		for(i=1;i<=2;i++){
			for(j=1;j<=2;j++){
				x_n=Math.pow(-1, i)+x;
				y_n=Math.pow(-1, j)*2+y;
				cell = document.getElementById("c" + x_n + y_n);

				if(cell !== null && cell.style.background !== "orange")
					cell.style.boxShadow = shadow;

				x_n=Math.pow(-1, i)*2+x;
				y_n=Math.pow(-1, j)+y;
				cell = document.getElementById("c" + x_n + y_n);

				if(cell !== null && cell.style.background !== "orange")
					cell.style.boxShadow = shadow;
			}
		}
	}
}


function PaintHorseCell(x, y, color){
	cell = document.getElementById("c" + x + y);
	cell.style.background = color;
	cell.innerHTML = "<img src='horse.gif' alt='caballo'></img>"
}

function PaintBonusCell(x, y){
	cell = document.getElementById("c" + x + y);

	if(cell.className == "cell black"){
		w_black = "class='w_black' "
	}

	else{
		w_black = ""
	}

	cell.innerHTML = "<img " + w_black + "src='wing.png' alt='Bonus'></img>"
}

function CheckCell(x,y){
	CheckTrue = false;

	dif_x = Math.abs(x - CellSelected_x);
	dif_y = Math.abs(y - CellSelected_y);

	if(Bonus && board[x][y] !== 1){
		CheckTrue = true;
		Bonus = false;
	}

	if(board[x][y] == 2) {
		Bonus = true; 
		board[x][y] == 1;
	}


	if((dif_x == 1 && dif_y == 2 && board[x][y] != 1)
			||(dif_x == 2 && dif_y == 1 && board[x][y] != 1)) 
			CheckTrue = true;

	if(CheckTrue) SelectCell(x,y);
}

function Check_newBonus(){
	Check_fullBoard();
	if ((64-Moves)% Moves_Required == 0 && !fullBoard){
		
		Bonus_Cell = false;

		while(Bonus_Cell == false){
			Bonus_Cell_x = Math.round(Math.random() * 7);
			Bonus_Cell_y = Math.round(Math.random() * 7);

			if(board[Bonus_Cell_x][Bonus_Cell_y] == 0)
				Bonus_Cell = true;
		}

		board[Bonus_Cell_x][Bonus_Cell_y] = 2;

		PaintBonusCell(Bonus_Cell_x, Bonus_Cell_y);
	}
}

function SelectCell(x, y){
	board[x][y] = 1;

	Moves--;
	document.getElementById("moves").innerHTML = Moves;

	PaintCell(CellSelected_x, CellSelected_y, "orange");

	
	PaintHorseCell(x, y, "green");
	PossibleMoves(x, y, "inset 0px 0px 10px 2px red");

	CellSelected_x = x;
	CellSelected_y = y;

	Check_SuccessfullEnd();
	Check_GameOver(x, y);
	Check_newBonus();
}