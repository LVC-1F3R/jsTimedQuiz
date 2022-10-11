// refractor code 

function handleStart() {
var isSetTimeoutRunning = false;
  
  if( isSetTimeoutRunning == false ){
   
    var timeCount = 120

    if( timeCount >=1 ){
      isSetTimeoutRunning = true;
      var countMilliseconds = timeCount*1000;
      setTimeout(function(){
        isSetTimeoutRunning = false;
        alert(" Time is up!");
        // redirect to scoreboard
      }, countMilliseconds);
    
      var counter = timeCount;
    
      document.getElementById("countdown-text").innerHTML = "<b>" + counter + "</b>";

      var interval = setInterval(function(){
        counter--;
        document.getElementById("countdown-text").innerHTML = "<b>" + counter + "</b>";
        if( counter == 0 ){
          document.getElementById("countdown-text").innerHTML = "";
          clearInterval(interval);
        }
      }, 1000);
    }
  }


if (isSetTimeoutRunning == true) {
  var startButton = document.querySelector("#start-button")
  startButton.style.display = "none"

  var firstQuestion = document.querySelector("#first-question")
  firstQuestion.style.display = "block"

  var secondQuestion = document.querySelector("#second-question")
  var thirdQuestion = document.querySelector("#third-question")

  document.getElementById("correct1").onclick = function() {
    firstQuestion.style.display = "none"
    secondQuestion.style.display = "block"
  }

  document.getElementById("correct2").onclick = function() {
    secondQuestion.style.display = "none"
    thirdQuestion.style.display = "block"
  }

  document.getElementById("correct3").onclick = function() {
    thirdQuestion.style.display = "none"
    // show scoreboard and stop timer
  }


// handler for incorrect answers along with time and point reduction. 

  var incorrectAns = document.querySelectorAll("button#incorrect")
  console.log(incorrectAns)
  for (const incorrect of incorrectAns) {
    incorrect.addEventListener('click',  function(event) {
    alert("Incorrect")
    // subtract time
    // subtract score
  })
}


} else {
  // show scoreboard
}





}