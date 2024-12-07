'use strict'

let getData = localStorage.getItem("first-form");

let dataObj = JSON.parse(getData);

console.log(dataObj);


if (dataObj.username.toLowerCase() == 'alireza' && dataObj.username.toLowerCase() == 'kazemi' ) {
  for(let key in dataObj){
    let html = `
    <div class="data">
        <span>${key} = ${dataObj[key]}</span>
        </div>
    `;

    let show = document.getElementById('data')
    show.innerHTML += html;
  }
}else {
  let html = `
  <div class='data'>
  <h3 style="color:red">You Are Not Valid</h3>
  </div>
  `;

  let show = document.getElementById('data');
  show.innerHTML = html;
  let counter = document.createElement('span');
  let i = 3;
  counter.innerText = i;
  show.append(counter);
  setInterval(()=>{
    counter.innerText = i--;
  },1000)

  setTimeout(() => {
    window.location.href = 'index.html'
  }, 4000);
  let confirmButton = document.getElementById("confim_button");
  confirmButton.innerText = 'Back to Login';
  confirmButton.addEventListener("click", () => {
		window.location.href = "index.html";
  });
}