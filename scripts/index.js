'use strict'

let form = document.getElementById('form');
console.log(form);

document.addEventListener('submit', (event)=>{
  event.preventDefault();
  let formData = new FormData(document.getElementById("form"));
  let userObj = Object.fromEntries(formData)
  
  let jsonObj = JSON.stringify(userObj);
  localStorage.setItem("first-form", jsonObj);
  window.location.href = 'second.html'
})