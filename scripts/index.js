"use strict";

let form = document.getElementById("form");

let passReg = new RegExp('^((?=.*[\d])(?=.*[a-z])(?=.*[A-Z])|(?=.*[a-z])(?=.*[A-Z])(?=.*[^\w\d\s])|(?=.*[\d])(?=.*[A-Z])(?=.*[^\w\d\s])|(?=.*[\d])(?=.*[a-z])(?=.*[^\w\d\s])).{7,30}$');

let emailReg = new RegExp(
	"[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?"
);

document.addEventListener("submit", (event) => {
	event.preventDefault();

	let validatePass = passReg.test(passInput.value);
	let validateEmail = emailReg.test(emailInput.value);

	if (!validateEmail) {
		let emailError = document.createElement("span");
		emailError.textContent = "wrong Gmail format";
		emailInput.after(emailError);

		setTimeout(() => {
			emailError.remove();
		}, 3000);
	}

	if (!validatePass) {
		let passError = document.createElement("span");
		passError.textContent = "wrong Password format";
		passInput.after(passError);

		setTimeout(() => {
			passError.remove();
		}, 3000);
	}

	if (validateEmail && validatePass) {
		let formData = new FormData(form);
		let emailInput = document.getElementById("emailInput");
		formData.append("email", emailInput.value);
		let userObj = Object.fromEntries(formData);
		let jsonObj = JSON.stringify(userObj);
		localStorage.setItem("first-form", jsonObj);
		window.location.href = "second.html";
	}
});
