//Method 1
var secondHand = document.getElementById('second');
var minuteHand = document.getElementById('minute');
var hourHand = document.getElementById('hour');
var digital = document.querySelector('.digital-clock');

function analogClock () {
	var date = new Date();
	var hour = date.getHours() % 12;
	var minute = date.getMinutes();
	var second = date.getSeconds();

	var hourDeg = (hour * 30) + (0.5 * minute);
	var minuteDeg = (minute * 6) + (0.1 * second);
	var secondDeg = second * 6;

	hourHand.style.transform = 'rotate(' + hourDeg + 'deg)';
	minuteHand.style.transform = 'rotate(' + minuteDeg + 'deg)';
	secondHand.style.transform = 'rotate(' + secondDeg + 'deg)';

	setTimeout(analogClock, 1000)
}

function digitalClock () {
	var date = new Date();
	var hour = date.getHours();
	var minute = date.getMinutes();
	var second = date.getSeconds();

	if(second < 10){
		second = '0' + second;
	}

	if (minute < 10) {
		minute = '0' + minute;
	}

	digital.innerText = hour + ':' + minute + ':' + second;
	setTimeout(digitalClock, 1000)	
}

analogClock();
digitalClock();


//METHOD 2
/*var second = document.getElementById('second');
var minute = document.getElementById('minute');
var hour = document.getElementById('hour');
var digitalClock = document.querySelector('.digital-clock');


function setClockTime() {
	const date = new Date();

	var hh = date.getHours(); //0 - 23
	var mm = date.getMinutes(); // 0 - 59
	var ss = date.getSeconds(); // 0 - 59

	const hourDeg = (hh * 30) + (mm * 0.5)	//Every 60mins, 30Deg then 30/60 = 0.5per min
	const minuteDeg = (mm * 6) + (ss * 0.1)	//Every 60sec, 6Deg the 6/60 = 0.1 per second
	const secondDeg = (ss * 6);

	hour.style.transform = `rotateZ(${hourDeg}deg)`
	minute.style.transform = `rotateZ(${minuteDeg}deg)`
	second.style.transform = `rotateZ(${secondDeg}deg)`

	digitalClock.innerText = `${hh%12<10?'0':''}${hh % 12}:${mm<10?'0':''}${mm} ${hh>12? 'PM' : 'AM'}`
}

setClockTime();

setInterval(setClockTime, 1000);
*/