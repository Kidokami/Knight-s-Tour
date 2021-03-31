function hide_message(difficulty){
	if(difficulty == 0) Moves_Required = 8;

	else Moves_Required = 9999;

	autoplay();

	Message = document.getElementById("message");
	Message.style.display = "none";

}

function ShowMessage(string_notification, GameOver) {
	clearInterval(cronometer);

	if(GameOver == false){
		string_score = "Time: ";
		if(Total_mins < 10) string_score = string_score + "0";
		string_score = string_score + Total_mins + ":";
		if(Total_secs < 10) string_score = string_score + "0";
		string_score = string_score + Total_secs;
	}
	else{
		Total_Moves =64-Moves
		string_score = "Score: " + Total_Moves + "/" + "64";
	}

	Message = document.getElementById("message");
	Message.style.display = "block";

	Message_notifiation = document.getElementById("notification");
	Message_notifiation.innerHTML = string_notification;

	Explanation_button = document.getElementById("explanation_button");
	if(Explanation_button.style.display == "none") Explanation_button.style.display = "block";;
	
	Final_Score = document.getElementById("final_score");
	Final_Score.innerHTML = string_score;

	Explanation = document.getElementById("explanation");
	Explanation.style.display = "none";

}

function ShowWelcome(string_notification) {

	Message = document.getElementById("message");
	Message.style.display = "block";

	Message_notifiation = document.getElementById("notification");
	Message_notifiation.innerHTML = string_notification;

	Button = document.getElementById("button");
	Button.style.display = "block";
}

function ShowExplanation(){
	Message = document.getElementById("message");
	Message.style.display = "block";

	Explanation_button = document.getElementById("explanation_button");
	Explanation_button.style.display = "none";

	Explanation = document.getElementById("explanation");
	Explanation.style.display = "block";
}
