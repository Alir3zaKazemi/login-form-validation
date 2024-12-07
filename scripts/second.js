"use strict";

let getData = localStorage.getItem("first-form");
let dataObj = JSON.parse(getData);

let show = document.getElementById("data");

if (
	dataObj.username.toLowerCase() == "alireza" &&
	dataObj.surname.toLowerCase() == "kazemi"
) {
	for (let key in dataObj) {
		let html = `
    <div class="data">
        <span>${key} = ${dataObj[key]}</span>
        </div>
    `;

		show.innerHTML += html;
	}
} else {
	let html = `
  <div class='data'>
  <h3 style="color:red">You Are Not Valid</h3>
  </div>
  `;

	show.innerHTML = html;

	let counter = document.createElement("span");


	counter.innerText = 3;
	show.append(counter);
	setInterval(() => {
		counter.innerText -= 1;
	}, 1000);

	setTimeout(() => {
		window.location.href = "index.html";
	}, 3200);

	let confirmButton = document.getElementById("confim_button");
	confirmButton.innerText = "Back to Login";
	confirmButton.addEventListener("click", () => {
		window.location.href = "index.html";
	});
}
