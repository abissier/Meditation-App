var countdownDisplay = document.querySelector('.countdown');
const timeSelector = document.querySelector('.time-selector');
const timeOptions = document.querySelector('.time-options');
const audioEl = document.getElementById('audio-section').getElementsByTagName('audio');

// Event Listner to start timer and music
document.querySelectorAll('.button').forEach((item) => {
	item.addEventListener('click', startTimer);
});

// Event Listner to restart app
document.querySelector('#restart-btn').addEventListener('click', restartApp);

// initialize timer w corresponding time selected
function startTimer() {
	switch (this.id) {
		case 'one':
			countdownDisplay.innerHTML = 60;
			timeSelector.style.visibility = 'hidden';
			setInterval(countdown, 5000);
			break;
		case 'three':
			countdownDisplay.innerHTML = 180;
			timeSelector.style.visibility = 'hidden';
			setInterval(countdown, 5000);
			break;
		case 'five':
			countdownDisplay.innerHTML = 300;
			timeSelector.style.visibility = 'hidden';
			setInterval(countdown, 5000);
			break;
	}
	startMusic();
}

// start countdown function
function countdown() {
	if (countdownDisplay.innerHTML > 0) {
		countdownDisplay.innerHTML -= 5;
	} else {
		restartApp();
	}
}

// start music function
function startMusic() {
	audioEl[0].play();
}

//stop music function
function stopMusic() {
	audioEl[0].pause();
}

// restarts the app ( adds back sidebar and stops music)
function restartApp() {
	countdownDisplay.innerHTML = '';
	timeSelector.style.visibility = 'visible';
	stopMusic();
}
