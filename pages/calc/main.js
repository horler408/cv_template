
//Selector
const btnNums = document.querySelectorAll('.numbers');
const btnClear = document.getElementById('clear');
const btnBackSpace = document.getElementById('back-space');
const btnEqual = document.getElementById('equal');
const btnOperations = document.querySelectorAll('.operations')
var previousOperand = document.querySelector('.previous-operand');
var currentOperand = document.querySelector('.current-operand');


//Event Listener
btnNums.forEach(button => {
	button.addEventListener('click', (e) => {
		e.preventDefault();
		if (button.value === '.' && currentOperand.innerText.includes('.')) return
		currentOperand.innerText += button.value;	
	})
})

btnOperations.forEach(button => {
	button.addEventListener('click', (e) => {
		e.preventDefault();
		currentOperand.innerText += button.value;	
	})
})


btnClear.addEventListener('click', (e) => {
	e.preventDefault();
	currentOperand.innerText = '';
	previousOperand.innerText = '';
});

btnBackSpace.addEventListener('click', (e) => {
	e.preventDefault();
	currentOperand.innerText = currentOperand.innerText.slice(0, -1)
})

btnEqual.addEventListener('click', (e) => {
	e.preventDefault();
	currentOperand.innerText = eval(currentOperand.innerText);
	previousOperand.innerText = currentOperand.innerText;
	currentOperand.innerText = '';
})


