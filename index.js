/* Given Code, don't edit */

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
function greet(time){
  let t = time.split(':')
  let time_now = parseInt(t[0])
  let greet = ""
  if (time_now >= 3 && time_now < 12){
    greet = "Good Morning";
  }else if (time_now >= 12 && time_now < 17){
    greet = "Good Afternoon";
  }else{
    greet = "Good Evening";
  }
  return greet;
}
/* Write your implementation of displayMessage() */
function displayMessage(msg){
  const get_header = document.getElementById('greeting')
  get_header.innerText = msg
}