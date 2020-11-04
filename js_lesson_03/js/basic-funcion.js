// create a variable called msg to hold a new message
var msg='Sign up to receive our newsletter for 10% OFF!';
// create a function to update the content of the element whose id  attribute
function updateMessage(){
    var el=document.getElementById('message');
    el.textContent=msg;
}
// Call the function
updateMessage();