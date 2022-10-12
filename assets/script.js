

// execute start of quiz
function handleStart() {
  // sets variable to define logic for timer
var isSetTimeoutRunning = false;

// time is up logic
var timeUp = document.getElementById("timeisup")
timeUp.style.display = "none"


  
  // if statement to start countdown and validates "isSetTimeoutRunning" state
  if( isSetTimeoutRunning == false ){
   
    // quiz time
    var timeCount = 60

    //  defines logic for timer using "setTimeout"
    if( timeCount >=1 ){
      isSetTimeoutRunning = true;
      var countMilliseconds = timeCount*1000;
      setTimeout(function(){
        isSetTimeoutRunning = false;
      }, countMilliseconds);
    
      //creates counter
      var counter = timeCount;
      //displays counter on page
      document.getElementById("countdown-text").innerHTML = "<b>" + counter + "</b>";
      // logic for counter
      var interval = setInterval(function(){
        counter--;
        document.getElementById("countdown-text").innerHTML = "<b>" + counter + "</b>";
        if( counter <= 0 ){
          // executes once counter reaches 0
          document.getElementById("countdown-text").innerHTML = "";
          // resets interval
          clearInterval(interval);
          alert(" Time is up!");
          // hides questions and displays button to try again
          firstQuestion.style.display = "none"
          secondQuestion.style.display = "none"
          thirdQuestion.style.display = "none"
          timeUp.style.display = "block"
        }
      }, 1000);
    }
  }

  // flow for quiz questions
  if (isSetTimeoutRunning == true) {
    //sets user score
    var userScore = 0
    //hides start button
    var startButton = document.querySelector("#start-button")
    startButton.style.display = "none"
    //displays first question
    var firstQuestion = document.querySelector("#first-question")
    firstQuestion.style.display = "block"
    // creates variables for second and third question
    var secondQuestion = document.querySelector("#second-question")
    var thirdQuestion = document.querySelector("#third-question")
    // correct answer for question 1 flow
    document.getElementById("correct1").onclick = function() {
      firstQuestion.style.display = "none"
      secondQuestion.style.display = "block"
      userScore++ 
    }
    // correct answer for question 2 flow
    document.getElementById("correct2").onclick = function() {
      secondQuestion.style.display = "none"
      thirdQuestion.style.display = "block"
      userScore++
    }
    // correct answer for question 3 flow
    document.getElementById("correct3").onclick = function() {
      userScore++
      // clears timer
      document.getElementById("countdown-text").innerHTML = "";
      clearInterval(interval);
      //displays scoreboard
      thirdQuestion.style.display = "none"
      firstQuestion.style.display = "none"
      secondQuestion.style.display = "none"
      scoreboard.style.display = "block"
      // execute score function
      saveScore(userScore)
  }


// handler for incorrect answers along with time reduction. 
  var incorrectAns = document.querySelectorAll("button#incorrect")
  for (const incorrect of incorrectAns) {
    incorrect.addEventListener('click',  function(event) {
    alert("Incorrect. Subtracting 10 seconds.")
    counter = counter - 10
  })
}

// refresh 
} else {
  location.reload();
}
}

// scoreboard handler
function saveScore(score) {
  const name = prompt('Post your score! Enter your initials:');
  localStorage.setItem(name, score)
  var scoreBoard = document.getElementById("scoreboard")
  scoreBoard.innerHTML = "Great Job, " + name + "! Your score is: " + localStorage.getItem(name)
};