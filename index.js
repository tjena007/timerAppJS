class Timer {
	constructor(durationInput, startButton, pauseButton) {
		this.durationInput = durationInput;
		this.startButton = startButton;
		this.pauseButton = pauseButton;

		this.startButton.addEventListener('click', this.start);
		this.pauseButton.addEventListener('click', this.pause);
	}

	start = () => {
		this.tick();
		this.interval = setInterval(this.tick, 1000);
	};

	pause = () => {
		clearInterval(this.interval);
		console.log(this);
	};
	tick = () => {
		//console.log(this.durationInput.value);

		if (this.timeRemaining <= 0) {
			this.pause();
		} else {
			this.timeRemaining = this.timeRemaining - 1;
		}
	};

	get timeRemaining() {
		return parseFloat(this.durationInput.value);
	}
	set timeRemaining(time) {
		this.durationInput.value = time;
	}
}

const durationInput = document.getElementById('duration');
const startButton = document.querySelector('#start');
const pauseButton = document.getElementById('pause');

const timer = new Timer(durationInput, startButton, pauseButton);
//timer.start();
