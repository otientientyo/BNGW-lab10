var score = 4;

var pass=5;

var msg;
if (score>pass){
    var el=document.getElementById('answer');
    el.innerHTML='Congratulation!'+'<br/>'+'Proceed to the next round';
}
else {
    var el=document.getElementById('answer');
    el.textContent='Try it later!';
}

// var score=75;
// var msg;
// if (score>=50){ msg='congratulation!'; msg+= 'Proceed to the next round';}
// var el = document.getElementById('answer');
// el.textContent=msg;