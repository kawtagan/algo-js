let person = prompt("Please enter your name", "Example: Bilbon Saké");
let text;
if (person == null || person == "") {
  text = "User cancelled the prompt.";
} else {
  text = "Hello World!";
}
