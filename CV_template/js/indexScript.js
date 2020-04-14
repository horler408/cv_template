/*/*function textPage() {
	prompt("Enter Your Name");
}
*/
//textPage()
/*const form = document.querySelector('form-container')
const nameInput = document.getElementById('home-name');
const enterBtn = document.getElementById('enter-button');
const header = document.getElementById('main-head');
const para = document.getElementById('para');
const resetBtn = document.getElementById('reset-button');


enterBtn.addEventListener('click', () => {
	
	if(nameInput.value === "") {
		form.reset();
		nameInput.focus();
		header.textContent = "Welcome!"
	}
	else {
		//nameInput = nameInput.value.toUpperCase();
		form.style.display = 'none';
		header.textContent = "Welcome Mr. " + nameInput;
		para.textContent = "This is to formally welcome you to website"	
	}
	
});*/

/*resetBtn.addEventListener('click', () => {
	localStorage.removeItem('name');
	displayName();
})

function displayName() {
	localStorage.setItem('name', nameInput.value);
	
	if(localStorage.getItem('name')) {
		let name = localStorage.getItem('name');
		name = name.toUpperCase();

		header.textContent = 'Hello Mr. ' + name + '!';
		para.textContent = 'This is to welcome you to our website Mr. ' + name;
		//resetBtn.style.display = 'block';
	}
	else {
		para.textContent = 'Welcome!';
		header.textContent = 'This is to welcome you to our website';
		//resetBtn.style.display = 'none';
	}
	
	//nameInput.value = '';
	//nameInput.focus();
}

document.body.onload = displayName;
*/*/