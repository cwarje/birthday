function rickRollAfterXSeconds(numMilliSeconds) {
  setTimeout(
    function(numMilliSeconds) {
      document.getElementById("textrainbow").innerHTML = "You've been rick rolled!";
    }, numMilliSeconds);
}