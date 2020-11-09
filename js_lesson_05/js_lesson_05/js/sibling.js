
var startItem = document.getElementById('two');
var prevItem = startItem.previousElementSibling;
var nextItem = startItem.nextSibling;

//Change the value of the sibling' class attributes.

prevItem.className = 'complete';

nextItem.className = 'cool';