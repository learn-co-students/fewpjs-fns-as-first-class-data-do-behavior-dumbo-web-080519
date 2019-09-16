/* Given Code, don't edit */

function handleClick(e) {
  const timeString = document.getElementById('time').value
  console.log(timeString)
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
function greet(timeString) {
  let hour = timeString.split(":")[0];
  let hourToInt = parseInt(hour, 10);
  if (hourToInt < 12) {
    return "Good Morning";
  } else if (hourToInt >= 12 && hourToInt < 17){
    return "Good Afternoon";
  } else {
    return "Good Evening";
  }
}
/* Write your implementation of displayMessage() */
function displayMessage(string) {
  document.querySelector("#greeting").innerText = string
}