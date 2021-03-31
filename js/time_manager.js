function ResetTime(){
	clearInterval(cronometer);
}


function StartTime() {

	seconds = 0;
	minutes = 0;

	s = document.getElementById("seconds");
	m = document.getElementById("minutes");

	cronometer = setInterval(function(){
		seconds++;

		secs = seconds%60;
		mins = Math.floor(seconds/60);

		if(secs < 10){s.innerHTML = "0" + secs}
		else{s.innerHTML = secs};
		if(mins < 10){m.innerHTML = "0" + mins}
		else{m.innerHTML = mins};

		Total_secs = secs;
		Total_mins = mins;
	},1000)
}