var isSetTimmeoutRunning = false;
  
function startCountdown(){

  if( isSetTimmeoutRunning == false ){
   
    var timeCount = 60

    if( timeCount >=1 ){
      isSetTimmeoutRunning = true;
      var countMilliseconds = timeCount*1000;
      setTimeout(function(){
        isSetTimmeoutRunning = false;
        alert(timeCount + " seconds have passed.");
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
}


function handleStart() {




}