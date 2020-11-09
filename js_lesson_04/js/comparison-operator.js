var pass=50;// pass mark
var score=90; //Score

// Check if the user has passed
var hasPassed = score >= pass;//=> true

// var hasPassed = '3'==3; ==> true
// var hasPassed = '3'===3; ==> false

//Write the message into the page

var el= document.getElementById('answer');
el.textContent='Level Passed:' + hasPassed;