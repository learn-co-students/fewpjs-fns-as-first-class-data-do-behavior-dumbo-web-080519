/* Given Code, don't edit */

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */

function greet(string) {
  var time = parseInt(string, 10)
  if (time < 12) {return "Good Morning"};
  if (time > 12 && time < 17) {return "Good Afternoon"};
  if (time > 17) {return "Good Evening"};
}

/* Write your implementation of displayMessage() */

function displayMessage(string){
  document.getElementById("greeting").innerText = string
}
