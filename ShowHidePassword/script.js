let lock = document.querySelector(".input-box i");
let showState = false;

toggle = () => {
  if (!showState) {
    document.querySelector("input").setAttribute("type", "text");
    lock.setAttribute("class", "fa fa-eye-slash");
    showState = true;
  } else {
    document.querySelector("input").setAttribute("type", "password");
    lock.setAttribute("class", "fa fa-eye");
    showState = false;
  }
};
lock.addEventListener("click", toggle);

// progress bar start

function check_pass() {
  let progress = document.querySelector(".progress");
  let strPassword = document.querySelector("input").value;
  let strength = document.querySelector(".strength h4");
  let strengthDetails = document.querySelector(".strength p");

  document.querySelector(".strength").style.display = "block";

  let no = 0;
  if (strPassword !== "") {
  }
  if (strPassword.length <= 6) {
    no = 1;
  }
  if (
    strPassword.length > 6 &&
    (strPassword.match(/[a-z]/) ||
      strPassword.match(/\d+/) ||
      strPassword.match(/.[!, @,#,$,%,^,&,*,(,)]/))
  )
    no = 2;
  if (
    (strPassword.length > 6 &&
      strPassword.match(/[a-z]/) &&
      strPassword.match(/\d+/)) ||
    (strPassword.match(/\d+/) &&
      strPassword.match(/.[!, @,#,$,%,^,&,*,(,)]/)) ||
    (strPassword.match(/[a-z]/) && strPassword.match(/.[!, @,#,$,%,^,&,*,(,)]/))
  )
    no = 3;
  if (
    strPassword.length > 6 &&
    strPassword.match(/[a-z]/) &&
    strPassword.match(/\d+/) &&
    strPassword.match(/.[!, @,#,$,%,^,&,*,(,)]/)
  )
    no = 4;
  if (no === 1) {
    progress.style.width = "30%";
    progress.style.backgroundColor = "#e74c3c";
    strength.innerHTML = "Weak Password";
    strengthDetails.innerHTML = "Your Password is easily guessable";
  }
  if (no === 2) {
    progress.style.width = "50%";
    progress.style.backgroundColor = "#e67e22";
    strength.innerHTML = "Average Password";
    strengthDetails.innerHTML = "Your Password is Average, You can do better";
  }
  if (no === 3) {
    progress.style.width = "70%";
    progress.style.backgroundColor = "#f1c40f";
    strength.innerHTML = "Good Password";
    strengthDetails.innerHTML = "Your Password is Good, You can do even better";
  }
  if (no === 4) {
    progress.style.width = "100%";
    progress.style.backgroundColor = "#2ecc71";
    strength.innerHTML = "Strong Password";
    strengthDetails.innerHTML =
      "Your Password is Strong, Just don't forget him";
  }
  //    else {
  //     progress.style.width = "0%";
  //     progress.style.backgroundColor = "trasparent";
  //     strength.innerHTML = "Password Strength";
  //     strengthDetails.innerHTML = "";
  //   }
  {
  }
  {
  }
  {
  }
}
document.querySelector("input").addEventListener("keyup", check_pass);
