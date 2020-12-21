
var countdownDisplay = $(".countdown");
var timeSelector= $(".time-selector");
var audioEl = $("#audio-section audio");
var secondsLeft = "";

$(".button").on("click", function (event) {
	var countdownEL = $(this).html();
	secondsLeft = countdownEL.slice(0, 1);
	secondsLeft = parseInt(secondsLeft, 10) * 60;
	countdownDisplay.empty().append(secondsLeft);
	timeSelector.empty();
	audioEl[0].play();
	setTime();
});

function setTime() {
	var timerInterval = setInterval(function () {
		secondsLeft-=5;
		countdownDisplay.empty().append(secondsLeft);
		if (secondsLeft == 0) {
			audioEl[0].pause();
			clearInterval(timerInterval);
			countdownDisplay.empty().append("");
		}
	}, 5000);

}
