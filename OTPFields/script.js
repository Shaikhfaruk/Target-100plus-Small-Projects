const inputs = document.querySelectorAll(".otp-field input");

inputs.forEach((input, index) => {
  input.dataset.index = index;

  input.addEventListener("paste", handleOnPasteOtp);
  input.addEventListener("keyup", handleOtp);
});

function handleOnPasteOtp(e) {
  const data = e.clipboardData.getData("text");

  let value = data.split("");
  console.log(value);

  if (value.length === inputs.length) {
    inputs.forEach((input, index) => {
      // value = value[index];
      input.value = value;
    });

    // Store value in each input field using for loop
    for (let i = 0; i < inputs.length; i++) {
      const element = inputs[i];
      element.value = value[i];
    }

    submit();
  }
}
function handleOtp(e) {
  const input = e.target;
  let value = input.value;
  input.value = "";
  input.value = value ? value[0] : "";

  let fieldIndex = input.dataset.index;
  if (value > 0 && fieldIndex < inputs.length - 1) {
    input.nextElementSibling.focus();
  }

  if (e.key === "Backspace" && fieldIndex > 0) {
    input.previousElementSibling.focus();
  }

  if (fieldIndex == inputs.length - 1) {
    submit();
  }
}

function submit() {
  console.log("Submitting.....");
  var otp = "";
  inputs.forEach((input) => {
    otp += input.value;
    input.disabled = true;
    input.classList.add("disabled");
  });
  console.log("otp");
  console.log(otp);
}

// reset otp fields
function reset() {
  inputs.forEach((input) => {
    input.value = "";
    input.disabled = false;
    input.classList.remove("disabled");
  });
}
