document.addEventListener('DOMContentLoaded', function() { 
	player_start(); 

	const volumeSlider = document.getElementById('volume-slider');

	volumeSlider.addEventListener('input', (e) => {
	  const value = e.target.value;
	
	  audio.volume = value / 100;
	});

}, false);

const audio = document.querySelector('audio');
const gears = document.querySelectorAll('.tape span');

function player_start() {
	audio.controls = false;
}

function audio_play() {
	audio.play();
	gears_run();
	audio.onended = function() {
		gears_stop();
	}
}

function audio_pause() {
	audio.pause();
	gears_stop();
}

function audio_stop() {
	audio.pause();
	audio.currentTime = 0;
	gears_stop();
}

function audio_forward() {
	audio.currentTime += 5;
}

function audio_rewind() {
	audio.currentTime -= 5;
}

function gears_run() {
	for (let i = 0; i < gears.length; i++) {
	  gears[i].style.animationPlayState = 'running';
	}
}

function gears_stop() {
	for (let i = 0; i < gears.length; i++) {
	  gears[i].style.animationPlayState = 'paused';
	}
}

function tape_run() {}

function tape_stop() {}

function tape_rewind() {}

function clamp(value, min, max) {
    return Math.min(Math.max(value, min), max);
}