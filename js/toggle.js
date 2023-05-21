const toggle = document.getElementById("toggle");
const body = document.body;

toggle.addEventListener("change", function () {
  if (this.checked) {
    body.classList.add("dark-theme");
  } else {
    body.classList.remove("dark-theme");
  }
});
