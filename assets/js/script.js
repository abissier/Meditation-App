
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
		secondsLeft--;
		countdownDisplay.empty().append(secondsLeft);
		if (secondsLeft == 0) {
			audioEl[0].pause();
			clearInterval(timerInterval);
			countdownDisplay.empty().append("");
			// getWisdom()
		}
	}, 5000);

}

// function getWisdom() {
// 	const settings = {
// 		"async": true,
// 		"crossDomain": true,
// 		"url": "https://joke3.p.rapidapi.com/v1/joke",
// 		"method": "GET",
// 		"headers": {
// 			"x-rapidapi-key": "09ccbbf383mshf3eeacb5eb59f53p18954ajsnbdacf80a2524",
// 			"x-rapidapi-host": "joke3.p.rapidapi.com"
// 		}
// 	};
	
// 	$.ajax(settings).done(function (response) {
// 		var joke = response.content;
// 		countdownDisplay.append(joke);
// 	});
// }