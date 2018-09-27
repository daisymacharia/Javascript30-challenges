var crashRide = document.getElementById("crash");
var hiHatTop = document.getElementById("hihat-top");
var leftStick = document.getElementById("drum-stick-left");
var rightStick = document.getElementById("drum-stick-right");

function animateCrashOrRide() {
	crashRide.style.transform = "rotate(0deg) scale(1.5)";
}

function animateHiHatClosed() {
	hiHatTop.style.top = "12rem";
}

function playCrash(e) {
	leftStick.style.top = "1.5rem";
	leftStick.style.left = "37rem";
}

function playRide() {
	leftStick.style.top = "1.5rem";
	leftStick.style.left = "43rem";
}

function playLowTom() {
	leftStick.style.top = "12.3rem";
	leftStick.style.left = "40rem";
}

function playMidTom() {
	leftStick.style.top = "5.8rem";
	leftStick.style.left = "48rem";
}

function playHihatOpen() {
	rightStick.style.top = "5rem";
	rightStick.style.left = "57rem";
}

function playHihatClosed() {
	rightStick.style.top = "5rem";
	rightStick.style.left = "64rem";
}

function playSnare() {
	rightStick.style.top = "10rem";
	rightStick.style.left = "57rem";
}

function playing(e) {
	var keyCode = e.keyCode;
	var audio = document.querySelector("audio[data-audio=\"" + keyCode + "\"]");
	var key = document.querySelector(".key[data-audio=\"" + keyCode + "\"]");
	if (!audio) return;

	audio.currentTime = 0; //rewind to the start
	audio.play();


	switch (keyCode) {
		case 69:
			playCrash();
			animateCrashOrRide();
			break;
		case 82:
			playRide();
			animateCrashOrRide();
			break;
		case 68:
			playLowTom();
			break;
		case 71:
			playMidTom();
			break;
		case 85:
			playHihatOpen();
			break;
		case 73:
			playHihatClosed();
			animateHiHatClosed();
			break;
		case 74:
			playSnare();
			break;}


	key.classList.add("playing");
}

function removestickTransition(e) {
	console.log(e);
	e.style.visibility = "none";
}

function removeTransition(e) {
	if (e.propertyName != "transform") return; // skip if the property is not a transform
	this.classList.remove("playing");
}

function removeHiHatTransition(e) {
	if (e.propertyName !== "top") return;
	e.target.style.top = "11.5rem";
}

function removeCrashOrRideTransition(e) {
	if (e.propertyName !== "transform") return;
	e.target.style.transform = "rotate(-7deg) scale(1.5)";
}

var keys = document.querySelectorAll(".key");
keys.forEach(function (key) {return key.addEventListener("transitionend", removeTransition);});

crashRide.addEventListener("transitionend", removeCrashOrRideTransition);

hiHatTop.addEventListener("transitionend", removeHiHatTransition);

var sticks = document.querySelectorAll(".stick");

// keys.forEach(key => key.addEventListener("transitionend", removestickTransition));

sticks.forEach(function (stick) {return stick.addEventListener("transitionend", removestickTransition);});
// leftStick.addEventListener("transitionend", removeLeftstickTransition);

window.addEventListener("keydown", playing);