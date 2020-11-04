function Hotel(name, rooms, booked){
    this.name=name;
    this.rooms=rooms;
    this.booked=booked;
    this.checkAvailablity=function (){
        return this.rooms-this.booked;
    };
};

var quayhotel = new Hotel('quay', 40,25);
var parkhotel= new Hotel('Park', 120, 77);

var details1=quayhotel.name +'rooms:';
    details1+=quayhotel.checkAvailablity();
var elHotel1= document.getElementById('hotel1'
);
elHotel1.textContent=details1;

var details2= parkhotel.name+'rooms:';
    details2+=parkhotel.checkAvailablity();
var elHotel2=document.getElementById('hotel2');
elHotel2.textContent=details2;