var hotItems= document.querySelectorAll('li.hot'); // Store NodeList

if (hotItems.length>0) {  // If it contains items
    for (var i=0; i<hotItems.length; i++){ //Loop through each item
        hotItems[i].className='cool'; //Change value of the  item
    }
}