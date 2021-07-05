window.onload = () => {
  'use strict';

  if ('serviceWorker' in navigator) {
    navigator.serviceWorker
             .register('./sw.js');
  }
}

const addItem = () =>{
  let ul = document.getElementById("todo-list")
  let item = document.getElementById("todo-data").value
  let li = document.createElement('li')
  li.setAttribute('class','list-group-item')
  li.innerHTML = item
  ul.appendChild(li)
}