var myForm = document.querySelector("#contact-form");
myForm.addEventListener("submit", checkFields);

function checkFields(event) {
  event.preventDefault();
  var is_all_ok = true;
  let nameRegEx = /^[a-z ,.'-]+$/i;
  const emailEl = document.querySelector("#email");
  const nameEl = document.querySelector("#name");

  const name = nameEl.value;
  const email = emailEl.value;

  if (name === "" || !nameRegEx.test(name)) {
    document.getElementById("nameerrormsg").style.display = "inline";
    is_all_ok = false;
  } else {
    document.getElementById("nameerrormsg").style.display = "none";
  }

  if (email === "") {
    document.getElementById("mailerrormsg").style.display = "inline";
    is_all_ok = false;
  } else {
    document.getElementById("mailerrormsg").style.display = "none";
  }

  // Additional form validation logic goes here

  if (is_all_ok) {
    console.log("Form submitted successfully");
    myForm.reset();
  }
}
