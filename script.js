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

// get random number
let randomNumber = Math.floor(Math.random() * 8)

// check question
if (userQuestion === '') {
  randomNumber = 8
  document.getElementById('questionOut').textContent = ''
  document.getElementById('answer').textContent = 'Maybe put in a question this time?'
  document.getElementById('answerType').innerHTML = ''
}
if (randomNumber === 8) {
 document.getElementById('answer').textContent = 'Maybe put in a question this time?'
}

// get 8 ball answer
switch (randomNumber) {
  case 0:
    document.getElementById('answer').textContent = 'Without a doubt.'
  break;
  case 1:
    document.getElementById('answer').textContent = 'As I see it, yes.'
  break;
  case 2:
    document.getElementById('answer').textContent = 'Outlook good.'
  break;
  case 3:
    document.getElementById('answer').textContent = 'I doubt it.'
  break;
  case 4:
    document.getElementById('answer').textContent = 'My reply is no.'
  break;
  case 5:
    document.getElementById('answer').textContent = 'I wouldn\'t do that if I were you...'
  break;
  case 6:
    document.getElementById('answer').textContent = 'Cannot predict now.'
  break;
  case 7:
    document.getElementById('answer').textContent = 'Click again?'
  break;
}
// badge answer variables
let yes = document.getElementById('answerType').value
let maybe = document.getElementById('answerType').value
let noQuestion = document.getElementById('answerType').value
let no = document.getElementById('answerType').value
// show 8 ball answer type badge
if (randomNumber <=2) {
  document.getElementById('answerType').textContent = 'Yes'
  document.getElementById('answerType').innerHTML = yes
} else if (randomNumber >= 6 && randomNumber <= 7) {
  document.getElementById('answerType').textContent = 'Maybe'
  document.getElementById('answerType').innerHTML = maybe
} else if (randomNumber >= 8) {
  document.getElementById('answerType').textContent = '???'
  document.getElementById('answerType').innerHTML = noQuestion
} else if (randomNumber >= 3 && randomNumber <= 5) {
  document.getElementById('answerType').textContent = 'No'
  document.getElementById('answerType').innerHTML = no
}
}