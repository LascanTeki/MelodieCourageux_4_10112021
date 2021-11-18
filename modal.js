function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const closeMod = document.querySelectorAll(".close");
const formData = document.querySelectorAll(".formData");
const form = document.getElementById("form");
const click = document.getElementById("button")
var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
var firstv = document.getElementById("first");
var lastv = document.getElementById("last");
var emailv = document.getElementById("email");
var emailv = document.getElementById("email");
var bday = document.getElementById("birthdate");
var qtty = document.getElementById("quantity");
var check = document.getElementById("checkbox1");
var error = "";

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

// launch modal close
closeMod.forEach((close) => close.addEventListener("click", closeModal));

// close modal
function closeModal() {
  modalbg.style.display = "none";
}

//validation of the form

click.addEventListener("click", function (e) {
  e.preventDefault();
  validate();

});

function validate() {

  if (error != "") {
    error.style.display = "none";
    error = "";
  }

  if (firstv.value.length < 2) {
    firstv.focus();
    error = document.getElementById("Prénom");
    error.style.display = "block";
  }

  if (lastv.value.length < 2) {
    lastv.focus();
    error = document.getElementById("Nom");
    error.style.display = "block";
  }

  if (!emailv.value.match(mailformat)) {
    emailv.focus();
    error = document.getElementById("Mail");
    error.style.display = "block";
  }

  if (bday.value.length != 10) {
    bday.focus();
    error = document.getElementById("date");
    error.style.display = "block";
  }

  if (qtty.value < 0 || qtty.value == "") {
    qtty.focus();
    console.log("quant");
    error = document.getElementById("numb");
    error.style.display = "block";
  }

  for (var i = 1; i < 7; i++) {
    var loc = document.getElementById('location' + i);
    if (loc.checked) {
      var checked = true;
    }
  }

  if (checked != true) {
    error = document.getElementById("loc");
    error.style.display = "block";
  }

  if (!check.checked) {
    check.focus();
    error = document.getElementById("termes");
    error.style.display = "block";
  }

  if (error != "") {
    return false
  }

  return true
  

}
