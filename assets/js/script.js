var countdownDisplay = $('.countdown');
const timeSelector = $('.time-selector');
const timeOptions = $('.time-options');
const audioEl = $('#audio-section audio');
var secondsLeft = '';

// starts countdown and music
$('.button').on('click', function() {
	const countdownEL = $(this).html();
	secondsLeft = countdownEL.slice(0, 1);
	secondsLeft = parseInt(secondsLeft, 10) * 60;
	countdownDisplay.empty().append(secondsLeft);
	timeOptions.detach();
	setTime();
	startMusic();
});

// Restart click event
$('#restart-btn').on('click', restartApp);

// calls setTime function every 5 seconds
var timer = setInterval(setTime, 5000);

// updates countdown display, if seconds left is zero calls restart function
function setTime() {
	countdownDisplay.empty().append(secondsLeft);
	secondsLeft -= 5;
	if (secondsLeft == 0) {
		restartApp();
	}
}

//stop countdown function
function stopCountDown() {
	clearInterval(timer);
}

// start music function
function startMusic() {
	audioEl[0].play();
}

// stop music function
function stopMusic() {
	audioEl[0].pause();
}

// restarts the app (stops and clears countdown, adds back sidebar, stops music)
function restartApp() {
	stopCountDown();
	timeOptions.appendTo(timeSelector);
	countdownDisplay.empty().append('');
	stopMusic();
}
