/* Given Code, don't edit */

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}


/* End Given Code, don't edit above here...*/


/* Write your implementation of greet() */

function greet(time){
  let hour = parseInt(time, 10);
  let greeting;
 if (hour < 12){
   greeting = "Good Morning";
 } else if (hour < 17){
  greeting = "Good Afternoon"; 
 } else { 
   greeting = "Good Evening";
 }
  return greeting;
}

/* Write your implementation of displayMessage() */
function displayMessage(message){
 let greeting = document.getElementById("greeting");
 greeting.innerText = message;
}