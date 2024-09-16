window.addEventListener("DOMContentLoaded", init);

function init() {
  const login = document.querySelector("#Login");
  login.addEventListener("click", info);
  document.querySelector("#submit").addEventListener("click", submit);
}

function info() {
  alert("Du er nu logget ind tillykke.");
}

function submit() {
  alert("Du har submittet");
}
