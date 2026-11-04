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
  // get input values
  let userName = document.getElementById("nameInput").value
  let userQuestion = document.getElementById("questionInput").value
console.log(userName, userQuestion)

// show question on site
document.getElementById("questionOut").textContent = 'You asked: ' + userQuestion

// greet the user
let greeting
if (userName === '') {
  greeting = "Hello Random Person!"
} else {
  greeting = `Hello, ${userName}!`
}
document.getElementById("greeting").textContent = greeting

// check question
if (userQuestion === '') {
  document.getElementById('questionOut').textContent = ''
  document.getElementById('answer').textContent = 'Maybe put in a question this time?'
  document.getElementById('answerType').innerHTML = ''
}

// get random number


// get 8 ball answer


// show 8 ball answer type badge
}