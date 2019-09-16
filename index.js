/* Given Code, don't edit */

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
/* Write your implementation of displayMessage() */
function greet(timeString) {
  const timeHour = parseInt(timeString.split(":")[0]);
  let greeting = "";
  if (timeHour < 12) {
    greeting = "Good Morning";
  } else if ((timeHour >= 12) && (timeHour <= 17)) {
    greeting = "Good Afternoon";
  } else {
    greeting = "Good Evening";
  }
  return greeting;
}

function displayMessage(greetingString) {
  const greeting = document.querySelector('#greeting');
  greeting.innerText = greetingString;
}
