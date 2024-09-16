window.addEventListener("DOMContentLoaded", init);

function init() {
  const login = document.querySelector("button");
  login.addEventListener("click", info);
}

function info() {
  alert("Du er nu logget ind tillykke.");
}
