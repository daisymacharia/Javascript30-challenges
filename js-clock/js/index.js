let secondHand = document.querySelector(".second-hand");
let minuteHand = document.querySelector(".minute-hand");
let hourHand = document.querySelector(".hour-hand");
let face = document.querySelector(".clock-face");
let hand = document.querySelector(".hand");

const setDate = () => {
	const now = new Date();
	const seconds = now.getSeconds();
	const secondsDegrees = seconds / 60 * 360 + 90;
	if (secondsDegrees === 360) {
		secondHand.style.transition = "none";
	}

	const minutes = now.getMinutes();
	const minutesDegrees = minutes / 60 * 360 + 90;

	const hours = now.getHours();
	let convertedHours = convertHours(hours);
	const hoursDegrees = hours / 12 * 360 + 90;

	face.style.setProperty("--start-seconds", secondsDegrees);
	face.style.setProperty("--start-minutes", minutesDegrees);
	face.style.setProperty("--start-hours", hoursDegrees);

	secondHand.style.transform = `rotate(${secondsDegrees}deg)`;
	minuteHand.style.transform = `rotate(${minutesDegrees}deg)`;
	hourHand.style.transform = `rotate(${hoursDegrees}deg)`;
};

const convertHours = hours => {
	if (hours > 12) return hours - 12;
	return hours;
};

setInterval(setDate, 1000);
