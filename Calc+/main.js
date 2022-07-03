// ---------- Get Elements with selectors ----------
const displayText = document.querySelector(".calcDisplay");
const keyList = document.querySelectorAll(".keys");

// ---------- Functions ----------
function showDisplay(event) {
	const userInputValue = event.target.innerText;
	displayText.innerHTML == 0
		? (displayText.innerHTML = userInputValue)
		: (displayText.innerText += userInputValue);
}
function clearAll() {
	displayText.innerHTML = 0;
}
function clearLast() {
	let text = displayText.innerText;
	text.length === 1
		? (displayText.innerText = 0)
		: (displayText.innerText = text.substring(0, text.length - 1));
}
function calculate() {
	let result = displayText.innerText;
	displayText.innerText = eval(result);
}

// ---------- Add Functions ----------
document.querySelector(".clearAll").addEventListener("click", clearAll);
document.querySelector(".clearLast").addEventListener("click", clearLast);
document.querySelector(".calculateKey").addEventListener("click", calculate);
keyList.forEach((item) => {
	item.addEventListener("click", showDisplay);
});
