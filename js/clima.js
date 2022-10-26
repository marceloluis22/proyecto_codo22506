const form = document.querySelector(".top-banner form");
const input = document.querySelector(".top-banner input");
const msg = document.querySelector(".top-banner .msg");
const list = document.querySelector(".ajax-section .cities");
const apiKey = "47e8ae67849b5f99edbf9078ba4ed852";

form.addEventListener("submit", e => {
  e.preventDefault();
  let inputVal = input.value;

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${inputVal}&appid=${apiKey}&units=metric`;

  fetch(url)
    .then(response => response.json())
    .then(data => {
      const { main, name, sys, weather } = data;

      let li = list.firstChild;
      if ( li === null ) {
            li = document.createElement("li");
            }
      li.classList.add("city");
      li.innerHTML = `        <div > ${Math.round(main.temp)}<sup>°C</sup></div>      `;
      list.appendChild(li);
      
    })
    .catch(() => {
      msg.textContent = "Por favor, ingrese una ciudad valida";
    });

  msg.textContent = "";
  form.reset();
  input.focus();
});