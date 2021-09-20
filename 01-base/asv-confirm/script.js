let age = prompt("Please enter your age", "25");
let Gender = prompt("Please enter your Gender", "mâle");
let city = prompt("Please enter your city", "La Terre du milieu");
let text;
if (age == null || age == "") {
  text = "please Repeat.";
} else {
  text = "Welcome!";
}

if (Gender == null || Gender == "") {
    text = "please Repeat.";
  } else {
    text = "Welcome!";
  }

  if (city == null || city == "") {
    text = "please Repeat.";
  } else {
    text = "Welcome!";
  }
