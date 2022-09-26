const jour = document.getElementById("jour");
const heure = document.getElementById("heure");
const minute = document.getElementById("minute");
const seconde = document.getElementById("seconde");
console.log(seconde);
let deadline = new Date("jan 5, 2024 15:37:25").getTime();
let x = setInterval(function () {
  let now = new Date().getTime();
  let t = deadline - now;
  let days = Math.floor(t / (1000 * 60 * 60 * 24));
  let hours = Math.floor((t % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((t % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((t % (1000 * 60)) / 1000);
  seconde.innerHTML = seconds;
  minute.innerHTML = minutes;
  heure.innerHTML = hours;
  jour.innerHTML = days;
  if (t < 0) {
    clearInterval(x);
  }
}, 1000);
