/* Given Code, don't edit */

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
/* Write your implementation of displayMessage() */
function greet(time) {
  const hour = parseInt(time, 10);
  if (hour < 12) return "Good Morning"
  else if (12 < hour && hour < 17) return "Good Afternoon"
  else if (17 < hour) return "Good Evening"
}

function displayMessage(message) {
  document.getElementById('greeting').innerText = message
}
