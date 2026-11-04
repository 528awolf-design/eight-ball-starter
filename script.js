/*
  Magic 8 Ball
  Name: Aaron Wolf
  Period: 4

  REQUIREMENTS:
  Run a function named askEightBall() from the button's onclick event.
  Read the name and question from the input boxes with .value.
  Greet the user by name with if / else, or greet a mystery person when the name is blank.
  Show the user's question on the page.
  Show a message instead of an answer when the question is blank.
  Pick a random answer with Math.random() and a switch.
  Show a colored YES, MAYBE, or NO badge using if / else if / else and innerHTML.
  Put every result on the page with getElementById(), .textContent, and .innerHTML.
*/
function askEightBall() {
  let userName = document.getElementById("nameInput").value
  let userQuestion = document.getElementById("questionInput").value
console.log(userName, userQuestion)
}