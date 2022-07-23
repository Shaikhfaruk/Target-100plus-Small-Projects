let btn = document.querySelector(".btn");
let popup = document.querySelector(".popup");
let close = document.querySelector(".close");
let confe = document.querySelector("#my-canvas");

btn.onclick = function () {
  popup.classList.add("active");
  confe.classList.add("active");
};
close.onclick = function () {
  popup.classList.remove("active");
  confe.classList.remove("active");
};

var confettiSettings = { target: "my-canvas" };
var confetti = new ConfettiGenerator(confettiSettings);
confetti.render();
