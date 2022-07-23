var password = document.getElementById("password"),
  confirm_password = document.getElementById("confirm_password"),
  tick = document.querySelector(".validation");
console.log(tick);
function validatePassword() {
  if (password.value != confirm_password.value) {
    confirm_password.setCustomValidity("Passwords Don't Match");
  } else {
    confirm_password.setCustomValidity("");
    tick.style.opacity = `1`;
  }
}
password.onchange = validatePassword;
confirm_password.onkeyup = validatePassword;
