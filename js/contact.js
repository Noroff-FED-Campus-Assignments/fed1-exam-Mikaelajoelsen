var myForm = document.querySelector("#js-form-contact");
myForm.addEventListener("submit", checkFields);

function checkFields(event) {
  event.preventDefault();
  var isAllOk = true;
  var nameRegEx = /^[a-zA-Z ,.'-]+$/;
  var emailEl = document.querySelector("#js-email");
  var nameEl = document.querySelector("#js-name");

  var name = nameEl.value.trim();
  var email = emailEl.value.trim();
  resetValidationFeedback();

  if (name === "" || !nameRegEx.test(name)) {
    document.getElementById("nameerrormsg").style.display = "block";
    isAllOk = false;
  }

  if (email === "" || !validateEmail(email)) {
    document.getElementById("emailerrormsg").style.display = "block";
    isAllOk = false;
  }

  if (isAllOk) {
    console.log("Form submitted successfully!");
  }
}

function resetValidationFeedback() {
  document.getElementById("nameerrormsg").style.display = "none";
  document.getElementById("emailerrormsg").style.display = "none";
}

function validateEmail(email) {
  var emailRegEx = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegEx.test(email);
}
