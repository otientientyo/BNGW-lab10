var i=1; // Set counter to 1
var msg=''; // Message

//Store 5 time table in a variable
do {
    msg+= i+'x 5 =' + (i*5) + '<br/>';
    i++;
}
while (i<=10);
// Note how this is already 1 and it still runs
document.getElementById('answer').innerHTML=msg;