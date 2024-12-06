'use strict'

let getData = localStorage.getItem("first-form");

let dataObj = JSON.parse(getData);

if (dataObj.username == 'alireza') {
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
  show.innerHTML = html
}