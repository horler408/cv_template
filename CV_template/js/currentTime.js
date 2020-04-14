//Current Time Script
var time = new Date();
var hours = time.getHours();
var minutes = time.getMinutes();
var seconds = time.getSeconds();

if(minutes < 10) {
	minutes = '0'+ minutes;
}

if(seconds < 10) {
	seconds = '0' + seconds;
}

var newTime = document.getElementById('time');
newTime.textContent = hours + '.' + minutes + '.' + seconds;