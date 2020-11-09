var elements= document.getElementsByClassName('hot');

if ( elements.length >2){ // iF 3 or more are found

    var el = elements[2]; //Select the third one from the NodeList
    el.className='cool'; //Change the value of this class attribute

}