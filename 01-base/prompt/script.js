let person = prompt("what is your name ?" , "Berthaux Romain");
let text;
if (person == null || person == "") {
  text = "User cancelled the prompt.";
} else {
  text = "Hello" + person + "!";
}
