/* Given Code, don't edit */

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
function greet(time)
{
  // console.log("(A)time: " + time)
  let new_time = time.replace(":", "");
  // console.log("(B:SPLIT)new_time: " + new_time)
  new_time = parseInt(new_time, "10");
  // console.log("(C:PARSE)new_time: " + new_time)

  if(new_time < 1200)
    return "Good Morning";
  else if (new_time <= 1700)
    return "Good Afternoon";
  else
    return "Good Evening";
}
/* Write your implementation of displayMessage() */

// console.log("Time: 12:00: " + greet("12:00"));
function displayMessage(msg)
{
  document.getElementById("greeting").innerText = msg;
}